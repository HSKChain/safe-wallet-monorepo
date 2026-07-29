import { useState, type ReactElement } from 'react'
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import useLocalStorage from '@/services/local-storage/useLocalStorage'
import ExternalLink from '@/components/common/ExternalLink'

// Safe 官方“如何核验交易”指南
const VERIFY_TX_URL = 'https://help.safe.global/articles/2485383995-how-to-perform-basic-transactions-checks-on-safewallet'

// 用户确认过安全须知后写入, 避免每次进入都弹窗
const ACK_KEY = 'securityNoticeAcknowledged_v1'

const SecurityNotice = (): ReactElement => {
  const [acknowledged = false, setAcknowledged] = useLocalStorage<boolean>(ACK_KEY)
  const [open, setOpen] = useState<boolean>(!acknowledged)

  const handleClose = (): void => {
    setAcknowledged(true)
    setOpen(false)
  }

  return (
    <>
      {/* 顶部常驻验签提示 */}
      <Alert severity="warning" icon={<WarningAmberIcon fontSize="small" />} sx={{ borderRadius: 0, py: 0.5 }}>
        <Typography variant="body2">
          ALWAYS{' '}
          <ExternalLink href={VERIFY_TX_URL} sx={{ fontWeight: 700 }}>
            verify transactions
          </ExternalLink>{' '}
          that you are approving on your signer wallet. If you can&apos;t verify it, don&apos;t sign it.
        </Typography>
      </Alert>

      {/* 首次进入展示的安全须知弹窗 */}
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontSize: '1.25rem', pt: 3 }}>Security notice</DialogTitle>
        <DialogContent>
          <Typography mb={2}>
            Due to recent security incidents it is important to ALWAYS verify transactions that you are approving on
            your signer wallet. If you can&apos;t verify it, don&apos;t sign it.
          </Typography>
          <Typography>
            More information on how to verify a transaction can be found in the{' '}
            <ExternalLink href={VERIFY_TX_URL}>corresponding help center article</ExternalLink>.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" disableElevation>
            I understand
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SecurityNotice
