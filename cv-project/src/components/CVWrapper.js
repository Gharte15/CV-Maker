import { Box, Typography } from "@mui/material"
import { CV } from "./CV/CV"
import { CVInput } from "./CVInput/CVInput"
import { useState } from "react"
import CvData from "./utils/CvData"

export const CVWrapper = () => {
  const [cv, setCv] = useState(CvData)

  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "64px",
      }}>
      <CVInput/>
      <CV cv={cv}/>
    </Box>
  )
}