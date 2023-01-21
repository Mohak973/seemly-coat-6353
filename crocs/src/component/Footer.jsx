import React from 'react'
import {Box, Heading, SimpleGrid,Text,Stack,Link} from "@chakra-ui/react"
function Footer() {
  return (
    <SimpleGrid gridTemplateColumns={{lg:"repeat(4,1fr)",sm:"repeat(1,fr)"}} backgroundColor='black' color='white'>
        <Box>
            <Heading>Crocs Insiders</Heading>
            <Stack>
                <Link>
                <Text>Crocs Club</Text>
                <Text>Student Discount</Text>
                <Text>Teacher discount</Text>
                <Text>Healthcare Discount</Text>
                <Text>Military Discount</Text>
                </Link>
                
            </Stack>
        </Box>
        <Box>
        <Heading>Company</Heading>
        <Link>
        <Stack>
                <Text>About Crocs</Text>
                <Text>Crocs Purpose</Text>
                <Text>Carrers</Text>
                <Text>Custom Orders</Text>
                <Text>Investor Relation</Text>
            </Stack>
        </Link>
            
        </Box>
        <Box>
        <Heading>Help</Heading>
        <Link>
        <Stack>
                <Text>Order Status & Return</Text>
                <Text>FAQs</Text>
                <Text>Size Chart</Text>
                <Text>Caring For Your Crocs</Text>
                <Text>Accessiblility</Text>
            </Stack>
        </Link>
           
        </Box>
        <Box>
        <Heading>Customer Services</Heading>
        <Link>
        <Stack>
                <Text>Mon</Text>
                <Text>Tue-Thurs</Text>
                <Text>Fri</Text>
                <Text>Sat-Sun</Text>
                <Text>Contact US</Text>
            </Stack>
        </Link>
            
        </Box>
    </SimpleGrid>
  )
}

export default Footer