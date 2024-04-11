import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

export default function QuotesLoading() {
  return (
    <Box width="100%">
      <Skeleton variant="rectangular" width="10rem" />
    </Box>
  );
}