import { Bar } from 'react-chartjs-2'
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material'




export const Adscripciones = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        backgroundColor: '#3F51B5',
        data: [10, 35, 29, 17, 19, 80, 10],
        label: 'Total',
        barThickness: 22,
        maxBarThickness: 30,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      }
    ],
    labels: ['COORD. GENERAL ADMON.', 'DIR. PROG. ALIM. Y DES. COM.', 'DIRECCION ATENC A PERSONAS C/DISCAP', 'DIRECCION DE PLANEACION Y FINANZAS', 'CENTRO ASISTENCIA SOCIAL UNACARI', 'PROC DE PROT DE NIÑAS NIÑOS Y ADOL', 'CENTRO MANOS A LA VIDA']
  }

  const options = {
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {

          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  }

  return (
    <Card {...props}>
      <CardHeader title="Áreas de Adscripción" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>

    </Card>
  )
}
