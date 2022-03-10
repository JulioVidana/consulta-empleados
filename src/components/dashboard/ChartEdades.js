import { Box, Card, CardContent, CardHeader, useTheme } from '@mui/material'
import { teal } from '@mui/material/colors'
import { Bar } from 'react-chartjs-2'

export const ChartEdades = ({ rangoEdades }) => {
  const theme = useTheme()
  const propiedades = rangoEdades.map(e => e.rango)
  const valores = rangoEdades.map(e => e.total)

  const data = {
    datasets: [
      {
        backgroundColor: teal[400],
        data: valores,
        label: 'Total',
        barThickness: 40,
        maxBarThickness: 100,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
    labels: propiedades
  }



  const options = {
    cornerRadius: 20,
    layout: { padding: 0 },
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      }
    },
    scales: {
      y: {
        suggestedMin: 50,
        suggestedMax: 100
      }
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
    <Card>
      <CardHeader title="Edades" />
      <CardContent>
        <Box
          sx={{
            height: 300,
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
