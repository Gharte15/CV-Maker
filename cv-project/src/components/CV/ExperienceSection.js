import { Box, Typography } from "@mui/material"

export const ExperienceSection = () => {
  return(
    <Box sx={{
      padding: "8px",
      paddingLeft:"24px"
    }}>
      <Typography sx={{fontWeight: 'bold'}} variant="h6">Experience</Typography>
      <Typography variant="body1">Company: INPUT</Typography>
      <Typography variant="body1">Job Position: INPUT</Typography>
      <Typography variant="body1">From: INPUT</Typography>
      <Typography variant="body1">To: INPUT</Typography>
    </Box>
  )
}