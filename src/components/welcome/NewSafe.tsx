import React from 'react'
import { Box, Button, Grid, Paper, Typography, useTheme } from '@mui/material'
import Link from 'next/link'
import { AppRoutes } from '@/config/routes'
import css from './styles.module.css'
import WelcomeLogin from './WelcomeLogin'

const ActionCard = ({
  title,
  description,
  href,
  cta,
  variant = 'contained',
}: {
  title: string
  description: string
  href: string
  cta: string
  variant?: 'contained' | 'outlined'
}) => {
  const theme = useTheme()
  // Accent lives on primary in dark mode and secondary in light mode (Safe palette convention)
  const accentColor = theme.palette.mode === 'dark' ? 'primary' : 'secondary'

  return (
    <Paper className={css.actionCard} elevation={0}>
      <Typography variant="h4" className={css.actionTitle}>
        {title}
      </Typography>
      <Typography className={css.actionDescription}>{description}</Typography>
      <Link href={href} passHref legacyBehavior>
        <Button component="a" variant={variant} color={accentColor} className={css.actionButton} fullWidth>
          {cta}
        </Button>
      </Link>
    </Paper>
  )
}

const NewSafe = () => {
  return (
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
      <Grid item xs={12} lg={5}>
        <WelcomeLogin />
      </Grid>
      <Grid
        item
        xs={12}
        lg={7}
        sx={{
          flex: 1,
        }}
      >
        <div className={css.content}>
          <Typography variant="h1" className={css.heroTitle}>
            Welcome to HSKChain Safe
          </Typography>

          <Typography className={css.heroSubtitle}>
            The most trusted decentralized custody protocol and collective asset management platform on HashKey Chain.
          </Typography>

          <Box className={css.actionGrid}>
            <ActionCard
              title="Create HSKChain Safe Account"
              description="A new Account that is controlled by one or multiple owners."
              href={AppRoutes.newSafe.create}
              cta="+ Create new Account"
              variant="contained"
            />
            <ActionCard
              title="Add existing Account"
              description="Already have a Safe Account? Add it via its address."
              href={AppRoutes.newSafe.load}
              cta="Add existing Account"
              variant="outlined"
            />
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}

export default NewSafe
