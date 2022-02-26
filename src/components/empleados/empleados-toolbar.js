import {
  Box,
  Button,
  Typography
} from '@mui/material'
import { Download as DownloadIcon } from '../../icons/download'

export const EmpleadosToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        Consulta de Empleados
      </Typography>
      <Box sx={{ m: 1 }}>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Exportar
        </Button>
      </Box>
    </Box>
  </Box>
)
