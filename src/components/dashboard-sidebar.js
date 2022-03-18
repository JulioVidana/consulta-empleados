import { useEffect } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { Box, Divider, Drawer, useMediaQuery } from '@mui/material'
import { ChartBar as ChartBarIcon } from '../icons/chart-bar'
import { Users as UsersIcon } from '../icons/users'
import { NavItem } from './nav-item'

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },
  {
    href: '/empleados',
    icon: (<UsersIcon fontSize="small" />),
    title: 'Empleados'
  }
]

export const DashboardSidebar = (props) => {
  const { open, onClose } = props
  const router = useRouter()
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  })

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      if (open) {
        onClose?.()
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  )

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ flexGrow: 1, mt: 3 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />

      </Box>
    </>
  )

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 230,
            top: 64,
            height: 'calc(100% - 64px)'
          }
        }}
        variant="persistent"
      >
        {content}
      </Drawer>
    )
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 230
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
}
