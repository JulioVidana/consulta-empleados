import { useState } from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Typography
} from '@mui/material'
import {
    LocationOn,
    Phone,
    School,
    Home,
    Today,
    Group
} from '@mui/icons-material'
import { format, parseISO } from 'date-fns'


const DetalleGenerales = (props) => {
    const [values, setValues] = useState({
        direccion: 'CIRCUITO DEL ROBLE NO.125',
        colNomb: 'DEL BOSQUE',
        ciuNomb: 'HERMOSILLO, SONORA',
        telefono: '6622 29 24 15',
        lugNac: 'EMPLAME, SONORA',
        fecNac: '1987-08-20T00:00:00',
        escolaridad: 'LICENCIATURA',
        conyuge: 'PAZOS TRUJILLO ANALI',
        fecNacCon: "04/16/1990 00:00:00",
        fecMatr: "2009"
    })
    return (
        <Card {...props}>
            <CardHeader
                title="Información General"
                sx={{
                    m: -2
                }}
            />
            <Divider />
            <CardContent>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={12}
                        xs={12}
                    >
                        <Home
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Dirección:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {
                                //direcc(datos.calle, datos.colonia, datos.ciudad, datos.cp)
                                `${values.direccion} ${values.colNomb} ${values.ciuNomb}`
                            }
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={7}
                        xs={12}
                    >
                        <Phone
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Teléfono:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {values.telefono}
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={5}
                        xs={12}
                    >
                        <School
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Escolaridad:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {values.escolaridad}
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={7}
                        xs={12}
                    >
                        <LocationOn
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Lugar de Nacimiento:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {values.lugNac}
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={5}
                        xs={12}
                    >
                        <Today
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Fecha:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {format(parseISO(values.fecNac), 'dd/MM/yyyy')}
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={7}
                        xs={12}
                    >
                        <Group
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Conyuge:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {values.conyuge}
                        </Typography>

                    </Grid>

                    <Grid
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            paddingTop: 2
                        }}
                        item
                        sm={5}
                        xs={12}
                    >
                        <Today
                            sx={{
                                marginRight: 1
                            }}
                            color="action"
                        />
                        <Typography
                            color="textPrimary"
                            variant="h6"
                        >
                            Fecha Nac.:
                        </Typography>
                        <Typography
                            color="textSecondary"
                            sx={{
                                marginLeft: 1
                            }}
                            variant="subtitle1"
                        >
                            {values.fecNacCon.slice(0, 10)}
                        </Typography>

                    </Grid>

                </Grid>
            </CardContent>
        </Card>
    )
}



export default DetalleGenerales
