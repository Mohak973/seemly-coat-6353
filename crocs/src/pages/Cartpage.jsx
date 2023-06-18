import React from 'react'
import {useState,useEffect,useContext} from "react"
import { useParams,useNavigate } from "react-router-dom";
import {Box,Button,Stack,Heading,Image,Text,Input,Select,useToast,FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,} from '@chakra-ui/react'
import {AuthContext} from "../Context/AuthContext"

function Cartpage() {
    const toast = useToast()
    const navigate=useNavigate()
    
   
    const [form,setform]=useState({first:'',last:'',phone:'',email:'',password:'',state:'',district:'',city:''})
     
    const [isError, setIsError] = useState(false);
   
    const {authState,handlecount,handlesize,handleRemove,handlecartstate}=useContext(AuthContext)
    
    const MCart = JSON.parse(localStorage.getItem("Mcart") || "[]")
    const filteredData = MCart.filter((item, index, arr) => {
        // Check if the index of the current item is the first occurrence of its id
        return arr.findIndex(obj => obj.id === item.id) === index;
      });
      
  //  console.log(filteredData)
   const {cartstate}=authState;
  
  const handlequan=(id,val,)=>{
   handlecount(id,val,filteredData)
   handlecartstate()
//    console.log(filteredData)
  }
  console.log(cartstate)
  useEffect(()=>{
    //   console.log("m")
      
  },[cartstate]);
  const handleorder=()=>{

    if (
      form.first === "" ||
      form.last === "" ||
      form.email === "" ||
      form.password === "" ||
      form.phone === "" ||
      form.state === "" ||
      form.district === "" ||
      form.city === ""
    ) {
      setIsError(true)
    }else{
   setIsError(false)
   toast({
    title: 'Order Confirmed.',
    description: "Order is confirmed and will deliver to you in 7 days.",
    status: 'success',
    position:'top',
    duration: 50000,
    
    isClosable: true,
  })
  setTimeout(() => {
    navigate("/")
  }, 3000); 
}
  }
  const handleinputchange=(e)=>{
    console.log(e.target.id)
    const {id,value}=e.target
  setform({...form,[e.target.id]:value})
  
  } 
  const handleKeyPress = (e) => {
    if (e.target.type === "text" && /\d/.test(e.key)) {
      e.preventDefault();
    }
  };
  const handleremove=(id)=>{
    console.log(id) 
    handleRemove(id,filteredData) 
    handlecartstate()
    console.log(filteredData);  
  }
  
  

  return (
    <Stack direction='row' spacing={{lg:'254',base:'100px'}} justifyContent='space-evenly' pr={{base:'20px'}} pl={{base:'20px'}}>
 <Box mb='100px' border='1px solid red' width='40%'>
      
      {filteredData.map((el) => (
        <Box border='1px solid red'  justifyItems='center'>
          <Image src={el.image} border='1px solid green'></Image>
          <Text>{el.title}</Text>
          <Text>Price-{el.price*el.quantity}</Text>
          <Stack direction='row'>
            <Button onClick={() => handlequan(el.id, -1)} isDisabled={el.quantity===1}>-</Button>
            <Button>{el.quantity}</Button>
            <Button onClick={() => handlequan(el.id, +1)}>+</Button>
          </Stack>
          <Button onClick={()=>handleremove(el.id)}>Remove</Button> 
          <Select placeholder='Select Size'  onChange={(e) => handlesize(e.target.value)}>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
          </Select>
        </Box>
      )
    )}
    <Text>Total :  {filteredData.map(el=>el.price*el.quantity).reduce((total,value)=>total+value,0)}</Text>
  </Box>
  <Box textAlign='center' justifyContent='center' justifyItems='center' border='1px solid green' width='40%'>
    <Heading>Fill in The details</Heading>
<FormControl isRequired isInvalid={isError}>
<FormLabel mb='5px'>First name</FormLabel>
  <Input value={form.first} placeholder='First name' id='first' onKeyDown={handleKeyPress} onChange={handleinputchange} />
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>Last name</FormLabel>
  <Input value={form.last} id='last' type='text' placeholder='Last name' onKeyDown={handleKeyPress} onChange={handleinputchange} />
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>Email</FormLabel>
  <Input value={form.email} id='email' type='email'  placeholder='Email'  onKeyDown={handleKeyPress} onChange={handleinputchange}/>
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>Password</FormLabel>
  <Input value={form.password} id='password' type='password' placeholder='Password' onKeyDown={handleKeyPress} onChange={handleinputchange} />
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>Mobile Number</FormLabel>
  <Input value={form.phone} id='phone' type='number' placeholder='Mobile Number' onKeyDown={handleKeyPress} onChange={handleinputchange}/>
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>State</FormLabel>
  <Input value={form.state} id='state' type='text' placeholder='State' onKeyDown={handleKeyPress} onChange={handleinputchange}/>
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>District</FormLabel>
  <Input value={form.district} id='district' type='text' placeholder='District' onKeyDown={handleKeyPress} onChange={handleinputchange}/>
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <FormLabel mb='5px'>City</FormLabel>
  <Input value={form.city} id='city' type='text' placeholder='City' onKeyDown={handleKeyPress} onChange={handleinputchange}/>
  {!isError? (
        <FormHelperText>
          
        </FormHelperText>
      ) : (
        <FormErrorMessage>This is Required.</FormErrorMessage>
      )}
  <Button mt='5px' onClick={handleorder}>Confirm Order</Button>
</FormControl>
  </Box>
    </Stack>
   
  );
  
}

export default Cartpage