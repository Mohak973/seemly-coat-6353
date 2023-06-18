import React from "react"

export const AuthContext=React.createContext();

const AuthContextProvider=({children})=>{

    const [state, setState] = React.useState({
        isAuth: false,
        token: null,
        data:[],
        count:1,
        cart:[],
        size:'5',
        updatedcart:[],
        cartstate:1,
        signup:{first:''},
        signin:{Email:'',Password:""}
      });

    const loginUser=()=>{
        setState({
            ...state,
            isAuth: true,
          });
    }
    
    const logoutUser=()=>{
        setState({
            ...state,
            isAuth: false,
            
          });
    }
    const Getdata=()=>{
        fetch("https://croc-database-1.vercel.app/Women").then((res)=>res.json().then((res)=>{
          setState({...state,data:res})
        }))
    }
    
    const handlecart=(id)=>{

        const MCart = JSON.parse(localStorage.getItem("Mcart") || "[]");
        fetch(`https://croc-database-1.vercel.app/women/${id}`).then((res)=>res.json().then((res)=>{
           
       console.log(res)
            setState({...state,cart:[...state.cart,res]})
            
           
            MCart.push(res)
            localStorage.setItem("Mcart",JSON.stringify(MCart))
        }))
        console.log(MCart)
        const filteredData = MCart.filter((item, index, arr) => {
            // Check if the index of the current item is the first occurrence of its id
            return arr.findIndex(obj => obj.id === item.id) === index;
          });
          
          
              
         
    }

    const handlesize=(val)=>{
        setState({...state,size:val})
    }
    let MCart = JSON.parse(localStorage.getItem("Mcart") || "[]")
    const filteredData = MCart.filter((item, index, arr) => {
        // Check if the index of the current item is the first occurrence of its id
        return arr.findIndex(obj => obj.id === item.id) === index;
      });
     
    const handlecount=(id,changeby,data)=>{
        const foundElement = data.find((item) => item.id === id);
          foundElement.quantity=foundElement.quantity+changeby;
       
      console.log(foundElement);
    
     let MCart = JSON.parse(localStorage.getItem("Mcart"));
  MCart=data;
  localStorage.setItem("Mcart",JSON.stringify(MCart))
    //    
    //       console.log(foundElement)
    //       console.log(changeby)
    //   setState({...state,updatedcart:[...filteredData]});

    console.log(state.cartstate)
      
    }
    const handlecartstate=()=>{
        setState({...state,cartstate:state.cartstate+1})
    }
   
    const handlesignUp=(val)=>{
      setState({...state,signup:val})
    }
    const handleRemove=(id,data)=>{
      console.log(data,id)
     
    const ndata= data.splice(id,1);
    console.log(data)
    localStorage.setItem("Mcart",JSON.stringify(ndata))
    let MCart = JSON.parse(localStorage.getItem("Mcart"));
    console.log(MCart)
      setState({...state,cart:MCart})
    }
   
    
    
    
    return (
        <AuthContext.Provider value={{loginUser,logoutUser,handleRemove,Getdata,handlecart,handlesignUp,handlecartstate,handlecount,handlesize,authState:state}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider