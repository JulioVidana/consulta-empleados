import { Snackbar, Alert } from '@mui/material'
import { useError } from 'src/hooks/useError'

/**
 * Tipos de alertas: error, warning, success, info
 */
const Notificacion = () => {
  const { removeError, error } = useError()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    removeError()
  }
  return (
    !!error &&
    <Snackbar
      open={!!error}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert
        variant="filled"
        severity={'error'}
        onClose={handleClose}
      >
        {

          error.message

        }
      </Alert>
    </Snackbar>

  )
}

export default Notificacion
