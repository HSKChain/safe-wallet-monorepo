import React from 'react'
import { Alert, AlertTitle, Grid, Link, SvgIcon, Typography } from '@mui/material'
import css from './styles.module.css'
import CheckFilled from '@/public/images/common/check-filled.svg'
import { HelpCenterArticle } from '@/config/constants'
import WelcomeLogin from './WelcomeLogin'

const BulletListItem = ({ text }: { text: string }) => (
  <li>
    <SvgIcon className={css.checkIcon} component={CheckFilled} inheritViewBox />
    <Typography
      sx={{
        color: 'static.main',
        fontWeight: 700,
      }}
    >
      {text}
    </Typography>
  </li>
)

const NewSafe = () => {
  return (
    <>
      <Alert severity="warning" sx={{ mx: 3, mt: 2 }} variant="outlined">
        <AlertTitle sx={{ fontWeight: 700 }}>Security notice</AlertTitle>
        Due to recent security incidents it is important to{' '}
        <strong>ALWAYS verify transactions</strong> that you are approving on your signer wallet. If you can&apos;t
        verify it, don&apos;t sign it.{' '}
        <Link href={HelpCenterArticle.VERIFY_TRANSACTIONS} target="_blank" rel="noopener noreferrer">
          More information in the help center
        </Link>
        .
      </Alert>
      <Grid
        container
        spacing={3}
        direction="row-reverse"
        sx={{
          p: 3,
          pb: 0,
          flex: 1,
        }}
      >
        <Grid item xs={12} lg={6}>
          <WelcomeLogin />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            flex: 1,
          }}
        >
          <div className={css.content}>
            <Typography
              variant="h1"
              sx={{
                fontSize: [44, null, 52],
                lineHeight: 1,
                letterSpacing: -1.5,
                color: 'static.main',
              }}
            >
              Unlock a new way of ownership
            </Typography>

            <Typography
              sx={{
                mb: 1,
                color: 'static.main',
              }}
            >
              The most trusted decentralized custody protocol and collective asset management platform.
            </Typography>

            <ul className={css.bulletList}>
              <BulletListItem text="Stealth security with multiple signers" />
              <BulletListItem text="Make it yours with modules and guards" />
              <BulletListItem text="Access 130+ ecosystem apps" />
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default NewSafe
