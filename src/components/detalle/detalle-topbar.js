import { Box, Typography, Grid, Button, Avatar, Chip, Skeleton } from '@mui/material'
import PrintIcon from '@mui/icons-material/Print'

const DetalleTopBar = ({ data, isLoading }) => {
  return (
    <Grid
      container
      spacing={3}
      direction="row"
      justifyContent="space-between"
    >
      <Grid
        item
        sx={{ display: 'flex' }}
        direction='row'
      >
        {
          isLoading ?
            <Skeleton animation="wave" variant="circular" sx={{ height: 64, mr: 2, width: 64 }} />
            :
            <Avatar
              /* src='/static/images/avatars/avatar_6.png' */
              sx={{ height: 64, mr: 2, width: 64 }} />
        }



        {
          isLoading ?
            <div>
              <Skeleton width="100%" animation="wave">
                <Typography variant='h3'>................................</Typography>
              </Skeleton>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Skeleton width="100%" animation="wave">
                  <Typography variant='subtitle1'>............</Typography>
                </Skeleton>
              </Box>
            </div>
            :
            <div>
              <Typography variant="h4" >
                {data.nombre}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="subtitle2">
                  Clave de Empleado:
                </Typography>
                <Chip
                  label={data.clave}
                  sx={{ ml: 1 }} />
              </Box>
            </div>
        }



      </Grid>
      <Grid
        item
      >
        <Button
          variant='outlined'
          endIcon={(<PrintIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Imprimir
        </Button>
      </Grid>

    </Grid>
  )
};

export default DetalleTopBar
