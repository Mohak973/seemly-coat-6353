import React from 'react';
import {useState,useEffect,useContext} from "react";
import { useParams,useNavigate, } from "react-router-dom";
import {Box,Stack,Image,Text,Button,Radio, RadioGroup,Select} from "@chakra-ui/react";
import {AuthContext} from "../Context/AuthContext";
import "../Css/Hcrousel.css"
function Singlepage() {
    const {id} =useParams();
   const {authState,handlecart,handlesize}=useContext(AuthContext)
    const [detail,setdetail]=useState({})
    const [isloading,setloading]=useState(true)
    const [cartstate,setcartstate]=useState(false)
    const [value, setValue] = React.useState('5')
    const navigate=useNavigate()
    useEffect(()=>{
      setloading(true)
     fetch(`https://croc-database.vercel.app/Women/${id}`).then((res)=>res.json()).then((res)=>{
        setdetail(res)
     })
     setloading(false)
    },[])
   
    const handleaddtocart=(id)=>{
      console.log(id)
     handlecart(id)
    //  console.log(authState.cart)  
     
       setcartstate(true);
      
    }
    console.log(authState.cart)  
    console.log(authState.size) 
    const handleRadioChange = (value) => {
      console.log(value)
      // Update the state using the Context API
    };
   
    
    if(isloading){
      return <div>
        <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
      </div>
    }
  return (
    <>
    <Stack direction={{base:'column',sm:'row',md:'row'}} spacing={{lg:'400px',base:'20px'}} justifyContent={{base:'space-between'}}  pr={{base:'30px'}}>
        <Box mb='30px'ml={{lg:'80px',base:'30px'}} mt='30px' textAlign='center' justifyContent="center" >
          <Image src={detail.image} w={{lg:'400px',base:'600px'}} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px' mb='10px'></Image>
          <Text mb='30px'>Price-{detail.price}</Text>
          <Text maxW='300px' ml={{base:'45px'}}>{detail.detail}</Text>
        </Box>
        <Box marginRight={{base:'20px'}}  mt="30px" paddingTop="40px" height={{base:'500px'}} marginTop={{base:'30px',sm:'30px',md:'30px'}} marginLeft={{base:'30px'}} w={{base:'350px'}} >
            <Image src={detail.image} mb='10px' ml={{base:'100px'}}></Image>
            <Text mb='10px'>{detail.title}</Text>
            <Text mb='10px'>Sizes</Text>
            
            <Select placeholder='Select Size' onChange={(e)=>handlesize(e.target.value)}>
             <option value='5'>5</option>
             <option value='6'>6</option>
             <option value='7'>7</option>
            </Select>
            <Text mb='20px'>{`Size:${authState.size}`}</Text>
            <Button onClick={()=>handleaddtocart(id)} isDisabled={cartstate}>{cartstate ? "Added To Cart":'Add To Cart'}</Button>
        </Box>
    </Stack>
    </>
  )
}

export default Singlepage