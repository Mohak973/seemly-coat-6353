import React from 'react'
import {Box,Stack,Select, SimpleGrid,Image,Text,Link,Button} from "@chakra-ui/react"
import Wdrawer from '../component/Wdrawer'
import {NavLink} from "react-router-dom"


const getdata=()=>{
    return fetch("https://croc-database.vercel.app/Women").then((res)=>res.json())
}
function Women() {

    const [data,setdata]=React.useState([]);
    const [sort,setsort]=React.useState("");
   const [load,setload]=React.useState("");

    React.useEffect(()=>{
        getdata().then((res)=>{
            setdata(res)
        })
    },[])

    const handlelth=()=>{
       data.sort((a,b)=>a.price-b.price)
      setload("lth")
      
    }

    const handlehtl=()=>{
     data.sort((a,b)=>b.price-a.price)
     setload("htl")
    }
   
   
  return (
    <Box>
        <Stack>
            <Box w='20%'>
        <Button onClick={handlelth}>Price:Low To High</Button>
        <Button onClick={handlehtl}>Price:High To Low</Button>
              <Box>
                <Wdrawer />
              </Box>
            </Box>
            <SimpleGrid gridTemplateColumns={{lg:"repeat(4,1fr)"}} gap='20px' >
                {data.map((el)=>(
                    <NavLink to={`/Women/${el.id}`}>
                     <Box  h='300px' w='250px' ml={{lg:'25px'}} mb='30px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                        <Image src={el.image} ml='35px'></Image>
                        <Text>{el.title}</Text>
                        <Text mb='10px'>{el.price}</Text>
                        <Button>Quick Look</Button>
                    </Box>
                    </NavLink>
                   
                ))}

            </SimpleGrid>
        </Stack>
    </Box>
  )
}

export default Women