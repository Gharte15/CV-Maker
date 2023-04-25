import { Box, Typography } from "@mui/material"

export const GeneralInfoHeader = ({ name, onChange }) => {
  return(
    <Box
      sx={{
        width: "620px",
        height: "40px",
        backgroundColor:"primary.light",
        color: "white",
        boxSizing: "border-box",
        p:2,
        pt:0.5
      }}>
      <Typography variant="h5">{name}</Typography>
    </Box>
  )
}