import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import { useSession, getSession, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { useError } from 'src/hooks/useError'

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  }
}

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 230
  }
}));

export const DashboardLayout = (props) => {
  const { children } = props;
  const { addError } = useError()
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter()
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login')
    },
  })

  if (status == 'loading') {
    return null
  }
  //validar fecha de expiración (ISODate) del Token
  const exp = new Date(session.user.expiracion);
  const ahora = new Date().getTime() / 1000;

  if (ahora > exp.getTime() / 1000) { signOut() }

  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
      <DashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
