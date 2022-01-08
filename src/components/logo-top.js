import { Box } from '@mui/material'

const Logo = (props) => {

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
            >
                <img
                    alt="Logo"
                    src="/static/logo-sistemasDIF.png"
                    {...props}
                />

            </Box>
            <style jsx>{`
                img {
                    width: 50%;
                }
            `}

            </style>
        </>
    )
}

export default Logo
