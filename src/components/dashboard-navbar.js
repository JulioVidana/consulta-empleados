import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../components/logo-top'
import AccountMenu from './AccountMenu'

const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

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
          <Box sx={{ flexGrow: 1 }} />

          <AccountMenu />
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
