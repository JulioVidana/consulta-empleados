import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Box, Button, Container, Grid, Avatar, TextField, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Logo from 'src/components/logo-top'

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: 'usuario@difson.gob.mx',
      password: 'Password123'
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
    onSubmit: () => {
      router.push('/');
    }
  });

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
            <Typography Typography
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
              focused
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
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
    </>
  );
};

export default Login;
