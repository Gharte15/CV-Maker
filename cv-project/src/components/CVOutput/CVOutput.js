import { Box, Typography } from "@mui/material"
import { GeneralInfoHeader } from "./GeneralInfoHeader"
import { EducationSection } from "./EducationSection"
import { ExperienceSection } from "./ExperienceSection"

export const CV = ({ cv }) => {
  return(
    <Box
      sx={{
        width: "620px",
        height: "877px",
        border: "2px solid",
        margin: "12px"
      }}>
      <GeneralInfoHeader name={cv.generalInfo.name} />
      <EducationSection educationInfo={cv.educationInfo}/>
      <ExperienceSection experienceInfo={cv.experienceInfo}/>
    </Box>
  )
}