import { Box, Typography } from "@mui/material"
import { GeneralInfoHeaderInput } from "./GeneralInfoHeaderInput"
import { EducationSectionInput } from "./EducationSectionInput"
import { ExperienceSectionInput } from "./ExperienceSectionInput"

export const CVInput = ({ 
  cv, 
  onChangeGeneralInfo,
  onChangeEducationInfo,
  onChangeExperienceInfo
}) => {
  return(
    <Box
      sx={{
        border: "2px solid",
        margin: "12px"
      }}>
      <GeneralInfoHeaderInput 
        generalInfo={cv.generalInfo} 
        onChange={onChangeGeneralInfo} 
      />
      <EducationSectionInput 
        educationInfo={cv.educationInfo} 
        onChange={onChangeEducationInfo} 
      />
      <ExperienceSectionInput 
        experienceInfo={cv.experienceInfo} 
        onChange={onChangeExperienceInfo} 
      />
    </Box>
  )
}