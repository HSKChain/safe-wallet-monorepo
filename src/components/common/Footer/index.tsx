import type { ReactElement } from 'react'
import { SvgIcon, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useRouter } from 'next/router'
import css from './styles.module.css'
import { AppRoutes } from '@/config/routes'
import ExternalLink from '../ExternalLink'

const GITHUB_REPO_URL = 'https://github.com/HSKChain/safe-wallet-monorepo/tree/fix/reduce-safe-browsing-flagging'

const footerPages = [
  AppRoutes.welcome.index,
  AppRoutes.settings.index,
  AppRoutes.imprint,
  AppRoutes.privacy,
  AppRoutes.cookie,
  AppRoutes.terms,
  AppRoutes.licenses,
]

const Footer = (): ReactElement | null => {
  const router = useRouter()

  if (!footerPages.some((path) => router.pathname.startsWith(path))) {
    return null
  }

  return (
    <footer className={css.container}>
      <ul>
        <li>
          <Typography variant="caption">2024–2026 HSKChain Safe</Typography>
        </li>
        <li>
          <ExternalLink href={GITHUB_REPO_URL} noIcon>
            <SvgIcon component={GitHubIcon} inheritViewBox fontSize="inherit" sx={{ mr: 0.5 }} />
            github-hskchain
          </ExternalLink>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
