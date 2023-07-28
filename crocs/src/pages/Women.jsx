import React from 'react'
import {Box,Stack,Select, SimpleGrid,Image,Text,Link,Button} from "@chakra-ui/react"
import Wdrawer from '../component/Wdrawer'
import {NavLink} from "react-router-dom"
import {useContext} from "react"
import {AuthContext} from "../Context/AuthContext"
import Loading from '../component/Loading'
import "../Css/Hcrousel.css"
// const getdata=()=>{
//     return fetch("https://croc-database.vercel.app/Women").then((res)=>res.json())
// }
function Women() {

    const {loginUser,authState,Getdata} =useContext(AuthContext);
    console.log(authState.data)

    const [data,setdata]=React.useState([]);
    const [sort,setsort]=React.useState("");
   const [load,setload]=React.useState("");
   const [isloading,setloading]=React.useState(true);
    React.useEffect(()=>{
       setloading(true)
        Getdata()
        setloading(false)
    },[load,sort])

    const handlelth=()=>{
       data.sort((a,b)=>a.price-b.price)
      setload("lth")
    }

    const handlehtl=()=>{
     data.sort((a,b)=>b.price-a.price)
     setload("htl")
    }
   
  if(isloading){
   return  <div sytle={{width:'500px',margin:'auto'}}>
  <div class="loading">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div></div>
   
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
             
              <SimpleGrid gridTemplateColumns={{lg:"repeat(4,1fr)",base:'repeat(2,1fr)'}}   gap={{lg:'20px',base:'10px'}} >
                
                  {authState.data.map((el)=>(
                      <NavLink to={`/Women/${el.id}`}>
                       <Box  h='300px' w={{lg:'250px',base:'180px'}} ml={{lg:'25px'}} mb='30px' boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                          <Image src={el.image} boxSize={{base:'120px'}} ml='35px'></Image>
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