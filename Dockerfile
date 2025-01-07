# build env
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat git python3 py3-pip make g++ libusb-dev eudev-dev linux-headers
WORKDIR /app
COPY . .

# Fix arm64 timeouts
RUN yarn config set network-timeout 300000 && yarn global add node-gyp

# install deps
RUN yarn install --frozen-lockfile
RUN yarn after-install

# replace node_modules
RUN rm -rf ./node_modules/@safe-global
RUN mv ./@safe-global ./node_modules/@safe-global

# build
RUN yarn build

# running env
FROM nginx:stable-alpine
ENV NODE_ENV=production

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
ENV NEXT_TELEMETRY_DISABLED=1

# 设置 Nginx 的静态文件目录
WORKDIR /usr/share/nginx/html

# 删除默认的 Nginx 静态文件配置
RUN rm -rf ./*

# 将 Next.js 的生成文件复制到 Nginx 的静态文件目录
#COPY --from=builder /app/.next /usr/share/nginx/html
#COPY --from=builder /app/public ./public
#COPY --from=builder /app/package.json ./
COPY --from=builder /app/out .

# 添加自定义 Nginx 配置文件
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 Nginx 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
