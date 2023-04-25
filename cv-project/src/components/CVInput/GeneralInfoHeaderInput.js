import { Box, TextField } from "@mui/material"


export const GeneralInfoHeaderInput = ({ generalInfo, onChange }) => {
  return(
    <Box
      sx={{
        color: "white",
        boxSizing: "border-box",
        padding:'12px'
      }}>
      <TextField 
        label="Name"
        variant="outlined" 
        name="name"
        onChange={(e) => onChange(e)} 
        value={generalInfo.name}
      />
    </Box>
  )
}