import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import { format, parseISO } from 'date-fns'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const ReporteEmpleado = ({ empleadoData, imagenSrc, famsData, expData }) => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Expediente_Empleado_${empleadoData.clave}`
  })

  const fechaNacimiento = empleadoData.fecNac && empleadoData.fecNac !== '0001-01-01T00:00:00' ? format(parseISO(empleadoData.fecNac), 'dd/MM/yyyy') : ''
  const fechaIngreso = empleadoData.fecha_ingreso && empleadoData.fecha_ingreso !== '0001-01-01T00:00:00' ? format(parseISO(empleadoData.fecha_ingreso), 'dd/MM/yyyy') : ''
  const fechaBase = empleadoData.fecha_base && empleadoData.fecha_base !== '0001-01-01T00:00:00' ? format(parseISO(empleadoData.fecha_base), 'dd/MM/yyyy') : ''
  const fechaBaja = empleadoData.fecha_baja && empleadoData.fecha_baja !== '0001-01-01T00:00:00' ? format(parseISO(empleadoData.fecha_baja), 'dd/MM/yyyy') : ''

  const sueldoBruto = empleadoData?.sueldo + empleadoData?.compensacion + empleadoData?.prestac_ley + empleadoData?.prestaciones

  let dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  })

  const horarioData = [
    { id: 'Entrada', dato: empleadoData?.entrada_1 },
    { id: 'Salida', dato: empleadoData?.salida_1 },
    { id: 'Entrada2', dato: empleadoData?.entrada_2 },
    { id: 'Salida2', dato: empleadoData?.salida_2 },
    { id: 'Lun', dato: empleadoData?.trabaja_lun },
    { id: 'Mar', dato: empleadoData?.trabaja_mar },
    { id: 'Mier', dato: empleadoData?.trabaja_mie },
    { id: 'Jue', dato: empleadoData?.trabaja_jue },
    { id: 'Vier', dato: empleadoData?.trabaja_vie },
    { id: 'Sab', dato: empleadoData?.trabaja_sab },
    { id: 'Dom', dato: empleadoData?.trabaja_dom },
    { id: 'Fest', dato: empleadoData?.dias_festivos },
    { id: 'Checa', dato: empleadoData?.checa }
  ]

  return (
    <div className="cuerpo">
      <div className='header-row'>
        {/* eslint-disable-next-line */}
        <a className="print-action-btn" onClick={handlePrint}>Imprimir</a>
      </div>
      <div
        className="container"
        ref={componentRef}>

        <div className="header">
          <img
            src={imagenSrc}
            alt={empleadoData.nombre}
          />
          <div>
            <div className="full-name">
              <span className="first-name">{empleadoData.nombre}</span>
            </div>
            <div className="contact-info">
              <span className="clave">CLAVE EMPLEADO: </span>
              <span className="email-val">{empleadoData.clave}</span>
            </div>
          </div>
        </div>
        <div className="details">
          <div className="section">
            <div className="section__title">Datos Generales</div>
            <div className="about">
              <span className="direccion">DIRECCIÓN: </span>
              <span className="desc">
                {`${empleadoData.direccion}, ${empleadoData.colNomb}, ${empleadoData.ciuNomb}`}
              </span>
            </div>
            <div className="about">
              <span className="direccion">TELÉFONO: </span>
              <span className="desc">
                {empleadoData.celular}
              </span>
            </div>
            <div className="about">
              <span className="direccion">EMAIL: </span>
              <span className="desc">
                {empleadoData.email}
              </span>
            </div>
            <div className="about">
              <span className="direccion">ESCOLARIDAD: </span>
              <span className="desc">
                {empleadoData.escolaridad}
              </span>
            </div>
            <div className="about">
              <span className="direccion">LUGAR DE NACIMIENTO: </span>
              <span className="desc">
                {empleadoData.lugNac}
              </span>
            </div>
            <div className="about">
              <span className="direccion">FECHA DE NACIMIENTO: </span>
              <span className="desc">
                {fechaNacimiento}
              </span>
            </div>
            <div className="about">
              <span className="direccion">FECHA DE INGRESO: </span>
              <span className="desc">
                {fechaIngreso}
              </span>
            </div>
            <div className="about">
              <span className="direccion">FECHA BASE: </span>
              <span className="desc">
                {fechaBase}
              </span>
            </div>
            <div className="about">
              <span className="direccion">FECHA BAJA: </span>
              <span className="desc">
                {fechaBaja}
              </span>
            </div>
          </div>

          <div className="section">
            <div className="section__title">DATOS DE PUESTO</div>
            <div className="about">
              <span className="direccion">ADSCRITO A: </span>
              <span className="desc">
                {empleadoData.adscripcion}
              </span>
            </div>
            <div className="about">
              <span className="direccion">PLAZA: </span>
              <span className="desc">
                {empleadoData.plaza}
              </span>
            </div>
            <div className="about">
              <span className="direccion">NIVEL: </span>
              <span className="desc">
                {empleadoData.nivel}
              </span>
            </div>
            <div className="about">
              <span className="direccion">CON FUNCIONES DE: </span>
              <span className="desc">
                {empleadoData.funciones}
              </span>
            </div>
            <div className="about">
              <span className="direccion">TIPO DE NÓMINA: </span>
              <span className="desc">
                {empleadoData.tpoNom}
              </span>
            </div>
            <div className="about">
              <span className="direccion">CONDICIÓN LABORAL: </span>
              <span className="desc">
                {empleadoData.condLabo}
              </span>
            </div>
          </div>


          <div className="section">
            <div className="section__title">DETALLE DE SUELDO</div>
            <table className="tabla">
              <thead>
                <tr>
                  <th>Sueldo</th>
                  <th>Compensación</th>
                  <th>Prest. Ley</th>
                  <th>Prestac.</th>
                  <th>Sdo. Bruto</th>
                  <th>Deducc.</th>
                  <th>Sdo. Neto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{dollarUS.format(empleadoData?.sueldo)}</td>
                  <td> {dollarUS.format(empleadoData?.compensacion)}</td>
                  <td>{dollarUS.format(empleadoData?.prestac_ley)}</td>
                  <td>{dollarUS.format(empleadoData?.prestaciones)}</td>
                  <td>{dollarUS.format(sueldoBruto)}</td>
                  <td>{dollarUS.format(empleadoData?.deducciones)}</td>
                  <td>{dollarUS.format(sueldoBruto - empleadoData?.deducciones)}</td>
                </tr>

              </tbody>
            </table>
          </div>


          <div className="section">
            <div className="section__title">HORARIO DE TRABAJO</div>
            <table className="tabla">
              <thead>
                <tr>
                  {
                    horarioData.map(item => (
                      <th key={item.id}>
                        {item.id}
                      </th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                <tr>
                  {
                    horarioData.map(item => (
                      <td key={item.id}>
                        {(item.dato === true && <CheckCircleIcon color='success' />)
                          || (item.dato === false && '-')
                          || item.dato}
                      </td>
                    ))
                  }
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section">
            <div className="section__title">FAMILIARES</div>
            <table className="tabla">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Parentesco</th>
                  <th>Fecha Nacimiento</th>
                </tr>
              </thead>
              <tbody>

                {
                  famsData.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.nombre}
                      </td>
                      <td>
                        {item.parentesco}
                      </td>
                      <td>
                        {format(parseISO(item.fecha_naci), 'dd/MM/yyyy')}
                      </td>
                    </tr>
                  ))
                }
              </tbody>

            </table>
          </div>
        </div>

        <hr className='new5'></hr>
        <div className="details">
          <div className="section">
            <div className="section__title">EXPEDIENTE</div>
            <table className="tabla">
              <thead>

                <tr>
                  <th>Fecha</th>
                  <th>Suceso</th>
                </tr>
              </thead>

              <tbody>
                {
                  expData.map(item => (
                    <tr key={item.id}>
                      <td>
                        {format(parseISO(item.fecha), 'dd/MM/yyyy')}
                      </td>
                      <td>
                        {item.suceso}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>




      <style jsx>{`

        .cuerpo {
          min-height: 100%;
          font-family: 'Lato', sans-serif;
          font-weight: 400;
          color: #222;
          font-size: 14px;
          line-height: 26px;
          padding-bottom: 50px;
      }

      .container {
          max-width: 1000px;
          background: #fff;
          margin: 0px auto 0px;
          padding: 40px;
          margin-top: 0px;
      }

       .header-row {
        max-width: 1000px;
        margin: 30px auto 0px;
        padding-left:40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }

    .print-action-btn {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      background: #5282e5;
      border-radius: 3px;
      color: #FFFFFF;
      cursor: pointer;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      font-size: 0.85em;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-left: 0.5em;
      padding: 0.5em 1em;
      text-decoration: none;
      text-transform: none;
      -webkit-transition: background 0.2s;
      transition: background 0.2s;
      text-rendering: auto !important;
      min-width:100px
  }

      .header {
          margin-top: 10px;
          margin-bottom: 30px;
          display: flex;
          align-items: center;
      }
      .header img {
        width: 120px;
        height: 154px;
    }

      .full-name {
          font-size: 25px;
          text-transform: uppercase;
          margin-bottom: 5px;
          margin-left: 10px;
      }

      .first-name {
          font-weight: 600;
      }

      .contact-info {
          margin-bottom: 20px;
          margin-left: 10px;
      }

      .clave {
          color: #999;
          font-weight: 300;
      }

      .direccion {
          font-weight: bold;
          display: inline-block;
          margin-right: 10px;
      }


      .section {
          margin-bottom: 30px;
      }

      .section:last-of-type {
          margin-bottom: 0px;
      }

      .section__title {
          letter-spacing: 2px;
          color: #b94645;
          font-weight: bold;
          margin-bottom: 10px;
          text-transform: uppercase;
      }

      hr.new5 {
        margin-top:150px;
        border: 30px solid white;
        border-radius: 5px;
      }

      .tabla {
          width: 100%;
          border-spacing: 0;
          border-collapse: collapse;
      }

      .tabla th {
          padding-top: 11px;
          padding-bottom: 11px;
          background-color: #eee;
          text-align: left;
          padding-right: 20px;
          padding-left: 5px;
      }

      .tabla td {
          text-align: left;
          padding-right: 20px;
          padding-left: 5px;
          vertical-align:center;
      }
      `}</style>
    </div>
  )
}

export default ReporteEmpleado
