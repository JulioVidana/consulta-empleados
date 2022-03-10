import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import MaleIcon from '@mui/icons-material/Male'

export const TotalHombres = ({ data }) => (
  <Card>
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
            HOMBRES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {data.hombre}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <MaleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)
