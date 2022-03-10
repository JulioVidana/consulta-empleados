import { Box } from '@mui/material'

const Logo = (props) => {

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{ cursor: 'pointer' }}
      >
        <img
          alt="Logo"
          src="/static/logo-sistemasDIF1.png"
          {...props}
        />

      </Box>
      <style jsx>{`
                img {
                  height:40px;
                }
            `}

      </style>
    </>
  )
}

export default Logo
