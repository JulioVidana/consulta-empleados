import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { signIn, getCsrfToken, getSession, useSession } from 'next-auth/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  Box,
  Button,
  Container,
  Grid,
  Backdrop,
  CircularProgress,
  TextField,
  Typography
} from '@mui/material'
import { useError } from 'src/hooks/useError'

const Login = () => {
  const router = useRouter()
  const { addError } = useError()
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/')
    }
  }, [status, router])



  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email(
          'Debe ser un correo electrónico válido')
        .max(255)
        .required(
          'Correo de usuario es requerido'),
      password: Yup
        .string()
        .max(255)
        .required(
          'Contraseña es requerida')
    }),
    onSubmit: async (values) => {

      const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}`
      })
      //console.log(res)
      if (res?.error) {
        addError(res.error, res.status)
      } else {
        router.push(res.url)
      }
    }
  })

  return (
    <>
      <Head>
        <title>Login | Consulta de Empleados</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >

            <img
              alt="Logo"
              src="/static/logo-sistemasDIF.png"
            />
            <Typography
              color="textPrimary"
              variant="h4"
              mt={3}
            >
              Consulta de empleados
            </Typography>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              Ingresa tu usuario y contraseña
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit}>

            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Usuario"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
              color='secondary'
              focused
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
              color='secondary'
              focused
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="secondary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ingresar
              </Button>
            </Box>

          </form>
        </Container>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={false} >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
      session: await getSession(context),
    },
  };
}

export default Login
