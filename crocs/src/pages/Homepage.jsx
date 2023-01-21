import React from 'react'
import {Box,Image,Text,Button, SimpleGrid,Link,Stack} from '@chakra-ui/react'
import Hcrousel from '../component/Hcrousel'
import Footer from '../component/Footer'



function Homepage() {

    const photos=['https://static.pxlecdn.com/photos/415402486/original/d2380b0f8e611371661a.jpg',
    'https://static.pxlecdn.com/photos/415402355/original/f73bc06a1a50f10ab397.jpg','https://static.pxlecdn.com/photos/467402789/original/2da0d835f8ef0d362c4f.jpg','https://static.pxlecdn.com/photos/418974574/original/8eab0ed70f41f5999fd1.jpg']

      return (
   <Box margi='0' w='100%'>
      <Box position='relative' border='1px' backgroundColor='#A954B5' w="100%" margin='0px'>
        <Box pos='absolute' top={{sm:'135px',md:'210px',lg:'350px'}} left={{sm:"20px",md:"80px",lg:'145px'}}>
        
       <Button size={{sm:"sm",lg:'lg'}}>Shop Platform Styled</Button>
        </Box>
      
       <Image src="https://media.crocs.com/images/f_auto,q_auto/marketing/mega-crush-sandal-product--desktop/crocs" w={{sm:"100%"}} margin='0px'></Image>
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
      <Box mb="35px">
      <Hcrousel />

      </Box>
      <Box mb='30px'>
        <Link>
        <Image src="https://i.ibb.co/H74tsGB/Screenshot-20230120-195833.png" w={{lg:"93%",sm:"87%"}} ml={{lg:"50px",sm:'40px'}}></Image>
        </Link>
        
      </Box>
      <Box mb='30px'>
         <Image src='https://i.ibb.co/KGTsD4t/Screenshot-20230120-203359.png' w={{lg:"93%",sm:"87%"}} ml={{lg:"50px",sm:'40px'}}></Image>
      </Box>
          <SimpleGrid gridTemplateColumns={{lg:"repeat(4,1fr)",sm:"repeat(1,1fr)"}}  mb='30px' ml={{lg:"54px",sm:'100px'}} gap='10px'>
            {photos.map((el)=>(
                <Box>
                    <Image src={el} height='310px'></Image>
                </Box>
            ))}
          </SimpleGrid> 
    <Box>
        <Box backgroundColor='black' color='white' >
            <Stack direction='row' ml='40px'>
                <Button w='150px' backgroundColor='black' color='white' _hover={{color:'#ccc'}} >SignUp For Free</Button>
                <Text>Download Crocs App</Text>
                <Image src='https://cdn.iconscout.com/icon/free/png-256/google-166-189830.png?w=256&f=avif' w='100px'></Image>
            </Stack>
        </Box>
        <Footer />
    </Box>
   </Box>
  )
}

export default Homepage