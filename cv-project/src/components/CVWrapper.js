import { Box, Typography } from "@mui/material"
import { CV } from "./CV/CV"
import { CVInput } from "./CVInput/CVInput"
import { useState } from "react"
import CvData from "./utils/cvData"

export const CVWrapper = () => {
  const [cv, setCv] = useState(CvData)

  const handleChangeGeneralInfo = e => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeEducationInfo = e => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        [name]: value,
      },
    }))
  }

  const handleChangeExperienceInfo = e => {
    const { name, value } = e.target

    setCv((prevState) => ({
      ...prevState,
      experienceInfo: {
        ...prevState.experienceInfo,
        [name]: value,
      },
    }))
  }

  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "64px",
      }}>
      <CVInput 
        cv={cv} 
        onChangeGeneralInfo={handleChangeGeneralInfo} 
        onChangeEducationInfo={handleChangeEducationInfo}
        onChangeExperienceInfo={handleChangeExperienceInfo}
      />
      <CV cv={cv} />
    </Box>
  )
}