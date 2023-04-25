import { Box, Typography } from "@mui/material"

export const EducationSection = () => {
  return(
    <Box sx={{
      padding: "8px",
      paddingLeft:"24px"
    }}>
      <Typography sx={{fontWeight: 'bold'}} variant="h6">Education</Typography>
      <Typography variant="body1">University: INPUT</Typography>
      <Typography variant="body1">Degree: INPUT</Typography>
      <Typography variant="body1">From: INPUT</Typography>
      <Typography variant="body1">To: INPUT</Typography>
    </Box>
  )
}