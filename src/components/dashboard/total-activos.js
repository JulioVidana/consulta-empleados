import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'

export const TotalActivos = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL EMPLEADOS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            670
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)
