import { Box, TextField } from "@mui/material"


export const ExperienceSectionInput = ({ experienceInfo, onChange }) => {
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
        label="Company"
        variant="outlined" 
        name="company"
        onChange={(e) => onChange(e)} 
        value={experienceInfo.company}
      />
      <TextField 
        label="Position"
        variant="outlined" 
        name="position"
        onChange={(e) => onChange(e)} 
        value={experienceInfo.position}
      />
      <TextField 
        label="From"
        variant="outlined" 
        name="from"
        onChange={(e) => onChange(e)} 
        value={experienceInfo.from}
      />
      <TextField 
        label="To"
        variant="outlined" 
        name="to"
        onChange={(e) => onChange(e)} 
        value={experienceInfo.to}
      />
    </Box>
  )
}