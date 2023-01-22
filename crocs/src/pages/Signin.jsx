import React from 'react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useContext } from 'react';
  import { useParams,useNavigate } from "react-router-dom";
  import { AuthContext } from '../Context/AuthContext';

function Signin() {
    const [email,setemail]=React.useState("")
    const [password,setpassword]=React.useState("")
    const [check,setcheck]=React.useState({Email:"",Password:""})
    const {isAuth,setAuth}=useContext(AuthContext);
    const navigate=useNavigate()
    const handlesignin=()=>{
        fetch("http://localhost:8080/cred").then((res)=>res.json()).then((res)=>{
            setcheck(res)
             });
             console.log(check)
             if(email && password){
                if(email===check.Email && password===check.Password){
                 setAuth(true)
                alert("Login successfull")
                 navigate("/")
                 
                 
                 setemail('')
                 setpassword('')
                }else{
                 alert("wrong credentials")
                }
               
             }else{
               alert("login failed")
             }
    }
  return (
    <Flex
         minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e)=>setemail(e.target.value)} value={email}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              onClick={handlesignin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signin