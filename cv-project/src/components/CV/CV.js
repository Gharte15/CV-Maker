import { Box, Typography } from "@mui/material"
import { GeneralInfoHeader } from "./GeneralInfoHeader"
import { EducationSection } from "./EducationSection"
import { ExperienceSection } from "./ExperienceSection"

export const CV = () => {
  return(
    <Box
      sx={{
        width: "620px",
        height: "877px",
        border: "2px solid",
      }}>
      <GeneralInfoHeader />
      <EducationSection />
      <ExperienceSection />
    </Box>
  )
}