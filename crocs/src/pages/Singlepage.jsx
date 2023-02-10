import React from 'react'
import {useState,useEffect} from "react"
import { useParams,useNavigate } from "react-router-dom";
import {Box,Stack,Image,Text,Button,Radio, RadioGroup} from "@chakra-ui/react"
function Singlepage() {
    const {id} =useParams();
    const [detail,setdetail]=useState({})
    const [value, setValue] = React.useState('5')
    const navigate=useNavigate()
    useEffect(()=>{
     fetch(`https://croc-database.vercel.app/Women/${id}`).then((res)=>res.json()).then((res)=>{
        setdetail(res)
     })
    },[])
    function RadioExample() {
       
        return (
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              <Radio value='5'>5</Radio>
              <Radio value='6'>6</Radio>
              <Radio value='7'>7</Radio>
            </Stack>
          </RadioGroup>
        )
      }
    
  return (
    <Stack direction='row' spacing='400px'>
        <Box mb='30px' ml='80px' mt='30px'>
          <Image src={detail.image} w='400px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mb='10px'></Image>
          <Text mb='30px'>Price-{detail.price}</Text>
          <Text maxW='300px'>{detail.detail}</Text>
        </Box>
        <Box>
            <Image src={detail.image} mb='10px'></Image>
            <Text mb='10px'>{detail.title}</Text>
            <Text mb='10px'>Sizes</Text>
            <Stack direction='row' mb='50px'>
                <RadioExample />
            </Stack>
            <Text mb='20px'>{`Size:${value}`}</Text>
            <Button onClick={()=>navigate(`/Cartpage/${id}`)}>Add To Cart</Button>
        </Box>

    </Stack>
    
  )
}

export default Singlepage