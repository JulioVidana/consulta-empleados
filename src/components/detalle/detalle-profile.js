import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';

const empleado = {
    "nombre": "VIDAÑA GARCÍA JULIO CESAR",
    "clave": "9447",
    "sexo": "Hombre",
    "edad": "34 años",
    "edoCiv": "CASADO (A)",
    "imagen": "/static/images/avatars/avatar_1.png"
}

const DetalleProfile = (props) => {
    return (
        <Card {...props}>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={empleado.imagen}
                        sx={{
                            height: 100,
                            mb: 1,
                            width: 100
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                        align='center'
                    >
                        {empleado.nombre}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="h6"
                    >
                        {`${empleado.edoCiv} - ${empleado.sexo} - ${empleado.edad}`}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />

            <Box
                sx={{
                    m: 2,
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <Typography
                    color="primary"
                    gutterBottom
                    variant="h5"
                    align='center'
                >
                    {empleado.clave}
                </Typography>

            </Box>


        </Card>
    )
}


export default DetalleProfile
