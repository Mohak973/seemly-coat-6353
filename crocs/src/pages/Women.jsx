import React from 'react'
import {Box,Stack,Select,Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,} from "@chakra-ui/react"
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
            <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
            </Box>
        </Stack>
    </Box>
  )
}

export default Women