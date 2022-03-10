import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { createEmotionCache } from '../utils/create-emotion-cache'
import { theme } from '../theme'
import { QueryClient, QueryClientProvider } from 'react-query'
//import { ReactQueryDevtools } from "react-query/devtools"
import { ProviderError } from 'src/hooks/useError'
import Notificacion from 'src/components/Notificacion'
import { SessionProvider as ProviderAuth } from 'next-auth/react'

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const queryClient = new QueryClient()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ProviderAuth session={pageProps.session}>
      <ProviderError>
        <QueryClientProvider client={queryClient}>
          <CacheProvider value={emotionCache}>
            <Head>
              <title>
                Consulta de Empleados
              </title>
              <meta
                name="viewport"
                content="initial-scale=1, width=device-width"
              />
            </Head>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <Notificacion />
                {getLayout(<Component {...pageProps} />)}
              </ThemeProvider>
            </LocalizationProvider>
          </CacheProvider>
          {/* <ReactQueryDevtools /> */}
        </QueryClientProvider>
      </ProviderError>
    </ProviderAuth>
  )
}

export default App
