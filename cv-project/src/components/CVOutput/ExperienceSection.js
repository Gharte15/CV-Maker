import { Box, Typography } from "@mui/material"

export const ExperienceSection = ({experienceInfo}) => {
  return(
    <Box sx={{
      padding: "8px",
      paddingLeft:"24px"
    }}>
      <Typography sx={{fontWeight: 'bold'}} variant="h6">Experience</Typography>
      <Typography variant="body1">Company: {experienceInfo.company}</Typography>
      <Typography variant="body1">Job Position: {experienceInfo.position}</Typography>
      <Typography variant="body1">From: {experienceInfo.from}</Typography>
      <Typography variant="body1">To: {experienceInfo.to}</Typography>
    </Box>
  )
}