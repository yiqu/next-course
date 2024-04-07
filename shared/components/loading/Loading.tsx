import Skeleton from "@mui/material/Skeleton";

function LoadingBar() {
  return (
    <Skeleton variant="text" width="5rem" sx={ {mx: 1} } />
  );
}

export default LoadingBar;