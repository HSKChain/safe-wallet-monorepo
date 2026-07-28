# build env
FROM node:18-alpine AS builder
RUN apk add --no-cache libc6-compat git python3 py3-pip make g++ libusb-dev eudev-dev linux-headers
WORKDIR /app

# NEXT_PUBLIC_* 在 build 期被编译进静态产物，必须放在 yarn build 之前（放 nginx stage 无效）
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_BEAMER_ID=""
ENV NEXT_PUBLIC_CYPRESS_MNEMONIC=""
ENV NEXT_PUBLIC_FORTMATIC_KEY=""
ENV NEXT_PUBLIC_GATEWAY_URL_PRODUCTION=/cgw
ENV NEXT_PUBLIC_INFURA_TOKEN=""
ENV NEXT_PUBLIC_IS_PRODUCTION="true"
ENV NEXT_PUBLIC_PORTIS_KEY=""
ENV NEXT_PUBLIC_SAFE_APPS_INFURA_TOKEN=""
ENV NEXT_PUBLIC_SAFE_VERSION=1.3.0
ENV NEXT_PUBLIC_SENTRY_DSN=""
ENV NEXT_PUBLIC_TENDERLY_ORG_NAME=""
ENV NEXT_PUBLIC_TENDERLY_PROJECT_NAME=""
ENV NEXT_PUBLIC_TENDERLY_SIMULATE_ENDPOINT_URL=""
ENV NEXT_PUBLIC_WC_BRIDGE=""
ENV NEXT_PUBLIC_WC_PROJECT_ID=6f11f0436f9717026c9624effebe43c1
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY . .

# Fix arm64 timeouts
# node-gyp 钉 10.x：最新版依赖 proc-log@7 需 node>=22，与 node:18 不兼容
RUN yarn config set network-timeout 300000 && yarn global add node-gyp@10.2.0

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
