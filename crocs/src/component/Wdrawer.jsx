import React from 'react'
import {Button,Input,useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    SimpleGrid,Image,Box,Text,Link
  } from '@chakra-ui/react'
  
  function Wdrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
   const [data,setdata]=React.useState([])

   const getdata=()=>{
    fetch("http://localhost:8080/Women").then((res)=>res.json()).then((res)=>{
        setdata(res)
     })
   }
        
   

   const handleclog=()=>{
    getdata()
    let d =  data.filter((el)=>el.type==="clog")
   
    console.log(d)
   }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
         Style +
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Sort By Style</DrawerHeader>
  
            <DrawerBody>
              <SimpleGrid gridTemplateColumns={{lg:'repeat(2,1fr)',sm:'repeat(1,1fr)'}}>
                <Box onClick={handleclog}>
                    <Image src='https://img.icons8.com/external-those-icons-lineal-those-icons/2x/external-Clogs-culture-and-communities-those-icons-lineal-those-icons.png'></Image>
                    <Text>Clogs</Text>
                </Box>
                <Box>
                <Image src='https://img.icons8.com/ios/2x/sandals.png'></Image>
                    <Text>Sandals</Text>
                </Box>
                <Box>
                <Image src='https://img.icons8.com/ios/2x/boots.png'></Image>
                    <Text>Boots</Text>
                </Box>
                <Box>
                <Image src='https://img.icons8.com/ios/2x/shoes.png'></Image>
                    <Text>Shoes</Text>
                </Box>
              </SimpleGrid>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'></Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

export default Wdrawer