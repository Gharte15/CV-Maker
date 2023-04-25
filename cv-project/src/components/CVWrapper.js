import { Box, Typography } from "@mui/material"
import { CV } from "./CV/CV"

export const CVWrapper = () => {
  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "64px",
      }}>
      <CV />
    </Box>
  )
}