import { getOneEmpleado } from '../../api/apis'
import { useQuery } from 'react-query'

export const useEmpleadoDetalle = (claveEmpleado) => {

  useQuery(['empleado', claveEmpleado], getOneEmpleado)

}
