import { useState } from 'react'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PropTypes from 'prop-types'
import { format, parseISO } from 'date-fns'
import {
  Avatar,
  Box,
  Card,
  Grid,
  InputAdornment,
  SvgIcon,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  Stack,
  Skeleton,
  TextField
} from '@mui/material'
import Tabla from '../Tabla'
import { getInitials } from '../../utils/get-initials'
import Controls from '../controls/Controls'
import { Search as SearchIcon } from 'react-feather'

export const EmpleadosLista = ({ empleados, ...rest }) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('sm'), {
    defaultMatches: true,
    noSsr: false
  });
  const [filterFn, setFilterFn] = useState({ fn: items => { return items } })
  const headCells = [
    { id: 'nombre', label: 'Nombre', hidden: false },
    { id: 'clave', label: 'Clave', hidden: true },
    { id: 'adscripcion', label: 'Adscrito A', hidden: true },
    { id: 'funciones', label: 'funciones', hidden: true },
    { id: 'fecha_ingreso', label: 'Fecha de Ingreso', hidden: true }
  ]

  const [sortMenu, setSortMenu] = useState('')
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting
  } = Tabla(empleados, headCells, filterFn, lgUp)

  const handleSearch = e => {
    let target = e.target.value.toLowerCase()
    setFilterFn({
      fn: items => {
        if (target === "")
          return items
        else
          return items.filter(x => x.nombre.toLowerCase().includes(target))
      }
    })
  }

  return (
    <Card {...rest}>
      <Box p={2}>
        <Grid
          container
          spacing={2}
          justify="space-between"
          alignItems="center"
        >
          <Grid
            item
            md={6}
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
              onChange={handleSearch}
            />
          </Grid>

        </Grid>
      </Box>

      <PerfectScrollbar>
        <Box>
          <TblContainer>
            <TblHead />
            <TableBody>
              {
                recordsAfterPagingAndSorting().map(item =>
                (
                  <Link
                    key={item.clave}
                    href="/detalle/[clave]"
                    as={`/detalle/${item.clave}`}
                    passHref >
                    <TableRow
                      hover
                      key={item.clave}
                      sx={{
                        cursor: 'pointer'
                      }}
                    >
                      <TableCell>
                        <Box
                          sx={{
                            alignItems: 'center',
                            display: 'flex'
                          }}
                        >
                          <Avatar
                            src={item.nivel_homo}
                            sx={{ mr: 2 }}
                          >
                            {getInitials(item.nombre)}
                          </Avatar>
                          <Typography
                            color="textPrimary"
                            variant="body1"
                          >
                            {item.nombre.trim()}
                          </Typography>
                        </Box>
                      </TableCell>

                      {lgUp && (
                        <>
                          <TableCell>{item.clave}</TableCell>
                          <TableCell>{item.adscripcion}</TableCell>
                          <TableCell>{item.funciones.trim()}</TableCell>
                          <TableCell>
                            {format(parseISO(item.fecha_ingreso), 'dd/MM/yyyy')}
                          </TableCell>
                        </>
                      )}

                    </TableRow>
                  </Link>
                )
                )
              }
            </TableBody>
          </TblContainer>
          <TblPagination />

        </Box>
      </PerfectScrollbar>


    </Card>
  )
}

EmpleadosLista.propTypes = {
  empleados: PropTypes.array.isRequired
}
