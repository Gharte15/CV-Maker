import { Box, Typography } from "@mui/material"
import { GeneralInfoHeaderInput } from "./GeneralInfoHeaderInput"

export const CVInput = () => {
  return(
    <Box
      sx={{
        border: "2px solid",
        margin: "12px"
      }}>
      <GeneralInfoHeaderInput />
    </Box>
  )
}