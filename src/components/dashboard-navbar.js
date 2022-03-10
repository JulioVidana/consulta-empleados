import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../components/logo-top'
import AccountMenu from './AccountMenu'
import { useSession } from 'next-auth/react'


const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}))

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props
  const { data: session } = useSession()
  const { user } = session

  const usuario =
  {
    nombre: user.nombre,
    imagen: '/static/images/avatars/avatar_1.png',
    rol: 'Activo'
  }

  return (
    <>
      <DashboardNavbarRoot
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Logo />
          <Typography variant="h5"
            component="div"
            color='text.primary'
            sx={{ flexGrow: 1 }}
          >
            Consulta de Empleados
          </Typography>

          <AccountMenu usrData={usuario} />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  )
}

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
}
