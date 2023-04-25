import { Box, Typography } from "@mui/material"

export const EducationSection = ({educationInfo}) => {
  return(
    <Box sx={{
      padding: "8px",
      paddingLeft:"24px"
    }}>
      <Typography sx={{fontWeight: 'bold'}} variant="h6">Education</Typography>
      <Typography variant="body1">University: {educationInfo.university}</Typography>
      <Typography variant="body1">Degree: {educationInfo.degree}</Typography>
      <Typography variant="body1">From: {educationInfo.from}</Typography>
      <Typography variant="body1">To: {educationInfo.to}</Typography>
    </Box>
  )
}