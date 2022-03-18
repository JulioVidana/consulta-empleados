import { useState } from 'react'
import {
  Grid,
  InputAdornment,
  SvgIcon,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import Controls from '../controls/Controls'
import { Search as SearchIcon } from 'react-feather'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import SortBar from 'src/components/controls/SortBar'


const catConLaboral = [
  { clave: "BASE", nombre: "BASE" },
  { clave: "CONFIANZA", nombre: "CONFIANZA" },
  { clave: "COMISIONADO", nombre: "COMISIONADO" }
]

const menuItems = [
  { value: 'Activos', label: 'Activos' },
  { value: 'Bajas', label: 'Bajas' },
  { value: 'Adscripción', label: 'Adscripción' },
  { value: 'CondicionLaboral', label: 'Condicion Laboral' },
  { value: 'Mujeres', label: 'Mujeres' },
  { value: 'Hombres', label: 'Hombres' },
  { value: 'Compensacion', label: 'Compensacion' }

]

const TableTools = ({
  onChange,
  setFilterFn,
  sortMenu,
  setSortMenu,
  empleadosList,
  filterFn,
  setTipo,
  AdscCatalogo
}) => {

  const [filtroTipo, setFiltroTipo] = useState({
    activa: true,
    tipo: '',
    value: '',
    catalogo: []
  })

  const changeTipo = (event) => {
    let filtro = event.target.value

    setFiltroTipo({ ...filtroTipo, value: filtro })

    setFilterFn({
      fn: items => {
        switch (filtroTipo.tipo) {
          case 'Adscripción':
            return items.filter(x => x.id_adscripcion.includes(filtro))
          case 'CondicionLaboral':
            return items.filter(x => x.condLabo.includes(filtro))
          default:
            return items
        }
      }
    })
  }

  const handleSortChange = (e, value) => {
    let filtro = e.target.value

    if (filtro === 'Adscripción') {
      setFiltroTipo({ ...filtroTipo, activa: false, tipo: filtro, catalogo: AdscCatalogo })
    } else if (filtro === 'CondicionLaboral') {
      setFiltroTipo({ ...filtroTipo, activa: false, tipo: filtro, catalogo: catConLaboral })
    } else {
      setFiltroTipo({ ...filtroTipo, activa: true })
    }

    filtro === 'Bajas' ?
      setTipo({ queryllave: 'inactivos', tipo: 'inactivos' })
      :
      setTipo({ queryllave: 'empleados', tipo: '' })

    setSortMenu(filtro)

    setFilterFn({
      fn: items => {
        switch (filtro) {
          case 'Mujeres':
            return items.filter(x => x.sexo == 1)
          case 'Hombres':
            return items.filter(x => x.sexo == 2)
          case 'Compensacion':
            return items.filter(x => x.compensacion !== 0.00)
          default:
            return items
        }
      }
    })

  }

  return (
    <Grid
      container
      spacing={2}
      justify="flex-start"
      alignItems="center"
    >
      <Grid
        item
        md={6}
        sm={6}
        xs={12}
      >
        <Controls.Input
          fullWidth
          placeholder="Buscar Empleado"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon
                  fontSize="small"
                  color="action"
                >
                  <SearchIcon />
                </SvgIcon>
              </InputAdornment>
            )
          }}
          onChange={onChange}
        />
      </Grid>
      <Grid
        item
        md={3}
        sm={3}
        xs={6}
      >
        <SortBar
          sortBy={sortMenu}
          menuItems={menuItems}
          handleSortChange={handleSortChange}
          label="Por"
        />
      </Grid>
      <Grid
        item
        md={3}
        sm={3}
        xs={6}
      >
        <FormControl variant="outlined"
          fullWidth
          size='medium'>
          <InputLabel id="sort-label">Tipo {filtroTipo.tipo}</InputLabel>
          <Select
            labelId="sort-label"
            label="Tipo dinamico"
            disabled={filtroTipo.activa}
            value={filtroTipo.value}
            onChange={changeTipo}
            startAdornment={
              !filtroTipo.activa &&
              <InputAdornment position="start">
                <UnfoldMoreIcon
                  color="primary"
                  fontSize='large'
                />
              </InputAdornment>
            }
          >
            {filtroTipo.catalogo.map((m) => (
              <MenuItem key={m.clave}
                value={m.clave}>
                {m.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>


      </Grid>
      <Grid
        item
        md={3}
        xs={3}
      >
        <Typography
          variant="h6"
          component="div" >
          {`${filterFn.fn(empleadosList).length} Empleados`}
        </Typography>

      </Grid>

    </Grid>
  )
}

export default TableTools
