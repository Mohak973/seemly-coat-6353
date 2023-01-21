import React from 'react'
import {Box,Stack,Select} from "@chakra-ui/react"
function Women() {
  return (
    <Box>
        <Stack>
            <Box>
            <Select placeholder='Select option'>
             <option value='option1'>Option 1</option>
             <option value='option2'>Option 2</option>
             <option value='option3'>Option 3</option>
            </Select>
            </Box>
        </Stack>
    </Box>
  )
}

export default Women