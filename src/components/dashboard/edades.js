import { Doughnut } from 'react-chartjs-2'
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material'

const rangoEdades = {
  "No definido": { min: 0, max: 0 },
  "19-25": { min: 19, max: 25 },
  "26-35": { min: 26, max: 35 },
  "36-50": { min: 36, max: 50 },
  "51-54": { min: 51, max: 64 },
  "65+": { min: 65, max: Infinity },
}

export const Edades = (props) => {
  const theme = useTheme()

  const data = {
    datasets: [
      {
        data: [10, 25, 23],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['COORD. GENERAL ADMON.', 'DIR. PROG. ALIM. Y DES. COM.', 'DIRECCION ATENC A PERSONAS C/DISCAP']
  }

  const options = {
    cutoutPercentage: 70,
    layout: { padding: 0 },
    legend: {
      display: true,
      position: 'bottom',
      align: 'start'
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 2,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  }


  return (
    <Card {...props}>
      <CardHeader title="Edades" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>

      </CardContent>
    </Card>
  )
}
