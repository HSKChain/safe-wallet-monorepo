import { IS_PRODUCTION } from '@/config/constants'
import { ContentSecurityPolicy, StrictTransportSecurity } from '@/config/securityHeaders'
import lightPalette from '@/components/theme/lightPalette'
import darkPalette from '@/components/theme/darkPalette'

// 使用 HashKey 自有品牌信息, 避免被反钓鱼模型判定为对官方 Safe{Wallet} 的品牌仿冒
const descriptionText = 'Official self-hosted Safe multisig wallet interface for HashKey Chain.'
const titleText = 'HashKey Safe'

const MetaTags = ({ prefetchUrl }: { prefetchUrl: string }) => (
  <>
    <meta name="description" content={descriptionText} />
    {/* 多签管理后台无需被搜索引擎收录, 始终 noindex 以降低对外暴露面 */}
    <meta name="robots" content="noindex, nofollow" />

    {/* Social sharing: 不再引用 app.safe.global 的资源, 避免冒充官方域名 */}
    <meta name="og:description" content={descriptionText} />
    <meta name="og:title" content={titleText} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={titleText} />
    <meta name="twitter:description" content={descriptionText} />

    {/* CSP */}
    <meta httpEquiv="Content-Security-Policy" content={ContentSecurityPolicy} />
    {IS_PRODUCTION && <meta httpEquiv="Strict-Transport-Security" content={StrictTransportSecurity} />}

    {/* Prefetch the backend domain */}
    <link rel="dns-prefetch" href={prefetchUrl} />
    <link rel="preconnect" href={prefetchUrl} crossOrigin="" />

    {/* Mobile tags */}
    <meta name="viewport" content="width=device-width" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    {/* PWA primary color and manifest */}
    <meta name="theme-color" content={lightPalette.background.main} media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content={darkPalette.background.main} media="(prefers-color-scheme: dark)" />
    <link rel="manifest" href="/safe.webmanifest" />

    {/* Favicons */}
    <link rel="shortcut icon" href="/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
    <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000" />
  </>
)

export default MetaTags
