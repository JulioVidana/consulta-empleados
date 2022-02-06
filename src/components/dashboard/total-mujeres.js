import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material'
import FemaleIcon from '@mui/icons-material/Female';
import { pink } from '@mui/material/colors';

export const TotalMujeres = (props) => (
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
            MUJERES
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            456
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              bgcolor: pink[500],
              height: 56,
              width: 56
            }}
          >
            <FemaleIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
)
