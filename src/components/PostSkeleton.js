import { Stack, Skeleton } from '@mui/material'

export const PostSkeleton = ({ altura, marginTop = 0 }) => {
  return (
    <Stack sx={{ mt: marginTop }}>
      <Skeleton variant="rectangular"
        width='100%'
        height={altura} />
    </Stack>
  )
}
