import React from 'react'
import {useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom";
import {Box,Button,Stack,Heading,Image,Text,Input} from '@chakra-ui/react'

function Cartpage() {
    const navigate=useNavigate()
    const {id}=useParams();
    const [quan,setquan]=useState(1)
    const shipping=99
    const [checkout,setcheckout]=React.useState({})
    React.useEffect(()=>{
        fetch(`http://localhost:8080/Women/${id}`).then((res)=>res.json()).then((res)=>{
            setcheckout(res)
        })
    },[])
  
  return (
    <Box mb='100px'>
        <Stack direction='row' ml='90px'>
            <Box w='45%'>
               <Heading>{checkout.title}</Heading>
               <Image src={checkout.image} ml='200px'></Image>
              <Button onClick={()=>setquan(quan-1)} isDisabled={quan===1}>-</Button>
              <Button>{quan}</Button>
              <Button onClick={()=>setquan(quan+1)}>+</Button>
            </Box>
            <Box  w='45%'>
                 <Heading mb='10px'>Order Summary</Heading>
                 <Text mb='10px'>{`Item Subtotal:          ${quan*checkout.price}`}</Text>
                 <Text mb='10px'>{`Shipping Charges:${shipping}`}</Text>
                 <Text mb='10px'>{`Estimated Total:${(quan*checkout.price+shipping)}`}</Text>
                
                <Box>
                    <Text fontWeight='bold'>Enter Details</Text>
                <Input placeholder='Enter Name'></Input>
                <Input placeholder='Enter Mobile Number'></Input>
                <Input placeholder='Enter Email'></Input>
                <Input placeholder='Enter Address'></Input>
                <Button onClick={()=>navigate("/")}>Checkout</Button>
                </Box>
               
            </Box>
        </Stack>
        </Box>
  )
}

export default Cartpage