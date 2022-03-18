import {
  Box,
  Grid
} from '@mui/material'

const Imagen = ({ imagenSrc, mediaQuery }) => {

  return (
    <Box>
      <Grid
        container
        spacing={1}
      >
        <Grid
          item
          xs={12}
        >
          <Box>
            <img
              src={imagenSrc}
              alt='foto'
              style={{ maxWidth: mediaQuery ? 400 : '100%' }}
            />

          </Box>

        </Grid>
      </Grid>
    </Box>
  )
}

export default Imagen
