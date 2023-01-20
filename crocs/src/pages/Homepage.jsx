import React from 'react'
import {Box,Image,Text,Button, SimpleGrid,Link} from '@chakra-ui/react'
function Homepage() {
  return (
   <Box >
      <Box position='relative' border='1px' backgroundColor='#A954B5' >
        <Box pos='absolute' top={{sm:'135px',md:'210px',lg:'350px'}} left={{sm:"20px",md:"80px",lg:'145px'}}>
        
       <Button size={{sm:"sm",lg:'lg'}}>Shop Platform Styled</Button>
        </Box>
      
       <Image src="https://media.crocs.com/images/f_auto,q_auto/marketing/mega-crush-sandal-product--desktop/crocs"></Image>
      </Box>
      <SimpleGrid gridTemplateColumns={{sm:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} spacing={{sm:"20px",lg:"20px"}} ml={{lg:"90px",sm:"35px"}} mr={{lg:"90px",sm:"35px"}} mt='30px'>
      <Button _hover={{color:"white",backgroundColor:"black"}}>SHOP WOMEN'S</Button>
        <Button _hover={{color:"white",backgroundColor:"black"}}>SHOP MEN'S</Button>
        <Button _hover={{color:"white",backgroundColor:"black"}}>SHOP KIDS'S</Button>
        <Button _hover={{color:"white",backgroundColor:"black"}}>SHOP JIBBIZ'S</Button>
      </SimpleGrid>

      <Box border="1px" ml="40px" mr="40px" mb='100px' mt='30px' pos='relative'>
        <Link>
           <Image w="100%"  src='https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'></Image>
           <Text pos="absolute" bottom='100px' left='50px' fontSize='2xl' color='blue.400'>Download The App,For early Access</Text>
        </Link>
      </Box>
      <SimpleGrid>
        
      </SimpleGrid>
   </Box>
  )
}

export default Homepage