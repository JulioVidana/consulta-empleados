import {
  Box,
  Card,
  Grid,
  Stack,
  Skeleton,
  Typography
} from '@mui/material'

export const PostSkeleton = () => {

  return (
    <Card >
      <Box p={2}>
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
            <Stack>
              <Typography variant="h1">
                <Skeleton />
              </Typography>
            </Stack>

          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            xs={6}
          >
            <Stack>
              <Typography variant="h1">
                <Skeleton />
              </Typography>
            </Stack>

          </Grid>
          <Grid
            item
            md={3}
            sm={3}
            xs={6}
          >
            <Stack>
              <Typography variant="h1">
                <Skeleton />
              </Typography>
            </Stack>

          </Grid>

        </Grid>
      </Box>

      <Stack mt={3}>
        <Skeleton
          variant="rectangular"
          width="100%">
          <div style={{ paddingTop: '57%' }} />
        </Skeleton>
      </Stack>

    </Card>
  )
}

