import NextLink from 'next/link';
import { Link, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const RegresarLink = ({ href, texto }) => {
  return (


    <NextLink
      href={href}
      passHref
    >
      <Link href="#"
        underline="hover"
        color="inherit"
        sx={{ display: 'flex', mb: 4 }}
      >

        <ArrowBackIcon fontSize="small"
          sx={{ mr: 1 }} />

        <Typography
          variant='subtitle2'
        >
          {texto}
        </Typography>
      </Link>

    </NextLink>
  )
}

export default RegresarLink
