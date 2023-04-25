import { Box, TextField } from "@mui/material"


export const EducationSectionInput = ({ educationInfo, onChange }) => {
  return(
    <Box
      sx={{
        color: "white",
        boxSizing: "border-box",
        display:'flex',
        gap:"12px",
        flexDirection:'column',
        padding:'12px',
      
      }}>
      <TextField 
        label="University"
        variant="outlined" 
        name="university"
        onChange={(e) => onChange(e)} 
        value={educationInfo.university}
      />
      <TextField 
        label="Degree"
        variant="outlined" 
        name="degree"
        onChange={(e) => onChange(e)} 
        value={educationInfo.degree}
      />
      <TextField 
        label="From"
        variant="outlined" 
        name="from"
        onChange={(e) => onChange(e)} 
        value={educationInfo.from}
      />
      <TextField 
        label="To"
        variant="outlined" 
        name="to"
        onChange={(e) => onChange(e)} 
        value={educationInfo.to}
      />
    </Box>
  )
}