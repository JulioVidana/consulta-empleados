import {
  Box,
  Button,
  Typography
} from '@mui/material'
import { Download as DownloadIcon } from '../../icons/download'
import { format, parseISO } from 'date-fns'
import { CSVLink } from 'react-csv'

export function getAge(dateString) {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export const EmpleadosToolbar = ({ empleadosData }) => {
  const csvData = empleadosData.map(x => {
    const sueldoBruto = x.sueldo + x.compensacion + x.prestac_ley + x.prestaciones
    let nuevo = {
      Clave: x.clave,
      Nombre: x.nombre,
      Edad: getAge(x.fecNac),
      FechaNacimiento: format(parseISO(x.fecNac), 'dd/MM/yyyy'),
      Sexo: x.sexo === 1 ? 'Mujer' : 'Hombre',
      Adscripcion: x.adscripcion,
      Nivel: x.nivel,
      Funciones: x.funciones,
      Plaza: x.plaza,
      FechaIngreso: format(parseISO(x.fecha_ingreso), 'dd/MM/yyyy'),
      TipoNomina: x.tpoNom,
      CondicionLaboral: x.condLabo,
      Sueldo: x.sueldo,
      Compensacion: x.compensacion,
      PrestacionLey: x.prestac_ley,
      Prestaciones: x.prestaciones,
      SueldoBruto: sueldoBruto,
      Deducciones: x.deducciones,
      sueldoNeto: sueldoBruto - x.deducciones
    }
    return nuevo
  })
  return (
    <Box >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Consulta de Empleados
        </Typography>
        <Box sx={{ m: 1 }}>
          <CSVLink
            data={csvData}
            filename={'ListaEmpleados.csv'}
          >

            <Button
              startIcon={(<DownloadIcon fontSize="small" />)}
              sx={{ mr: 1 }}
            >
              Exportar
            </Button>
          </CSVLink>

        </Box>
      </Box>
    </Box>
  )
}
