import {
  Box,
  Card,
  Grid,
  Stack,
  Skeleton,
  TextField,
  Typography
} from '@mui/material'

export const PostSkeleton = () => {

  return (
    <Card >
      <Box p={2}>

        <Grid
          item
          md={6}
          xs={12}
        >
          <Stack>
            <Typography variant="h1">
              <Skeleton />
            </Typography>
            {/* <Skeleton width="100%" >
              <TextField fullWidth />
            </Skeleton> */}
          </Stack>

        </Grid>

      </Box>

      <Stack>
        <Skeleton
          variant="rectangular"
          width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      </Stack>

    </Card>
  )
}

