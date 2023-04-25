import { Box, TextField } from "@mui/material"


export const GeneralInfoHeaderInput = () => {
  return(
    <Box
      sx={{
        color: "white",
        boxSizing: "border-box",
        padding:'12px'
      }}>
      <TextField id="name" label="Name" variant="outlined" />
    </Box>
  )
}