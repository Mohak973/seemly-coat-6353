import React from 'react'
import {Image,
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { useParams,useNavigate } from "react-router-dom";
  import {useContext} from "react"
  import { AuthContext } from '../Context/AuthContext';
import { jsx } from '@emotion/react';

function Navbar() {
  const {authState,signup,logoutUser}=useContext(AuthContext)
  const {cart}=authState
  let isAuth=JSON.parse(localStorage.getItem("isAuth"))
  let Email=JSON.parse(localStorage.getItem("email"))
  // console.log(cart)
    const navigate=useNavigate()
    const { isOpen, onToggle } = useDisclosure();
    const gocart=()=>{
      if(authState.isAuth){
        navigate("/cartpage")
      }else{
        alert("Login First")
      }
    }
    return (
        <Box w={{lg:'100%',base:'100%'}} >
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'} >
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }} >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex   flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} >
              {/* <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800', 'white')}>
                Logo
              </Text> */}
              <Link href='/'>
                
              <Image   textAlign={useBreakpointValue({ base: 'center', md: 'left' })} w="180px" src="https://www.crocs.com/on/demandware.static/Sites-crocs_us-Site/-/default/dw3ce21b1f/images/logo-no-tag.svg"/>
              </Link>
              
    
              <Flex display={{ base: 'none', md: 'flex' }} ml={10}  >
                <DesktopNav />
              </Flex>
            </Flex>
            
            {isAuth ?<Stack direction={'row'}><Text>{
              `Hello, ${Email}` }
              </Text>
              <Box><Link href='/Cartpage'> <Image  width='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMe8zNDZDDQLi_l0tU0wCCHrstXIQBpDh7TM-_f-8&s"></Image></Link></Box>
              <Button
                 onClick={logoutUser}
                   as={'a'}
                   fontSize={'sm'}
                   fontWeight={400}
                   variant={'link'}
                   
                   >
                   Logout
                 </Button>
              </Stack>:  <Stack
              flex={{ base: 1, md: 0 }}
              justify={'flex-end'}
              direction={'row'}
              spacing={6}>
                <Button fontSize={'sm'} onClick={()=>navigate("/Signin")}>Signin</Button>
                
              
              <Button
              onClick={()=>navigate("/Signup")}
                display={{  md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={''}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign Up
              </Button>
              <Button onClick={gocart}> <Image  width='30px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXMe8zNDZDDQLi_l0tU0wCCHrstXIQBpDh7TM-_f-8&s"></Image></Button>
             
            </Stack>}

           
          </Flex>
    
          <Collapse in={isOpen} animateOpacity >
            <MobileNav />
          </Collapse>
        </Box>
      );
    }
    
    const DesktopNav = () => {
      const linkColor = useColorModeValue('gray.600', 'gray.200');
      const linkHoverColor = useColorModeValue('gray.800', 'white');
      const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    
      return (
        <Stack direction={'row'} spacing={4} >
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label} >
              <Popover trigger={'hover'} placement={'bottom-start'}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={navItem.href}
                    fontSize={'sm'}
                    fontWeight={500}
                    color={linkColor}
                    _hover={{
                      textDecoration: 'none',
                      color: linkHoverColor,
                    }}>
                    {navItem.label}
                  </Link>
                </PopoverTrigger>
    
                {navItem.children && (
                  <PopoverContent
                    border={0}
                    boxShadow={'xl'}
                    bg={popoverContentBgColor}
                    p={4}
                    rounded={'xl'}
                    minW='xl'  display='grid'>
                    <Stack direction="column" >
                        
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                  </PopoverContent>
                )}
              </Popover>
            </Box>
          ))}
        </Stack>
      );
    };
    
    const DesktopSubNav = ({ label, href, subLabel,icon,trending,image}: NavItem) => {
      return (
        <Stack direction='row' >
            <Link
          href={href}
          role={'individual'}
          display={'block'}
          p={2}
          rounded={'md'}
          >
           
            <Stack direction='column' align={'left'} h="30px" w='200px'  >
            <Box display="flex">
            <Image src={icon} w="30px"></Image>
              <Text
                transition={'all .3s ease'}
                _groupHover={{ color: 'pink.400' }}
                fontWeight={500}>
                {label}
              </Text>
              {/* <Text fontSize={'sm'}>{subLabel}</Text> */}
              
            </Box>
            <Flex
              transition={'all .3s ease'}
              transform={'translateX(-10px)'}
              opacity={0}
              _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
              justify={'flex-end'}
              align={'center'}
              flex={1}>
              {/* <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} /> */}
            </Flex>
          </Stack>
        </Link>
        <Stack >
        <Link href={href}
          role={'individual'}
          display={'block'}
          p={2}
          rounded={'md'}>
            <Text>{trending}</Text>

           
        </Link>
        </Stack>
        <Stack >
            <Image  src={image} />
        </Stack>
        
       
        

        </Stack>
        
      );
    };
    
    const MobileNav = () => {
      return (
        <Stack
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      );
    };
    
    const MobileNavItem = ({ label, children, href }: NavItem) => {
      const { isOpen, onToggle } = useDisclosure();
    
      return (
        <Stack spacing={4} onClick={children && onToggle}>
          <Flex
            py={2}
            as={Link}
            href={href ?? '#'}
            justify={'space-between'}
            align={'center'}
            _hover={{
              textDecoration: 'none',
            }}>
            <Text
              fontWeight={600}
              color={useColorModeValue('gray.600', 'gray.200')}>
              {label}
            </Text>
            {children && (
              <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            )}
          </Flex>
    
          <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
            <Stack
              mt={2}
              pl={4}
              borderLeft={1}
              borderStyle={'solid'}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              align={'start'}>
              {children &&
                children.map((child) => (
                  <Link key={child.label} py={2} href={child.href}>
                    {child.label}
                  </Link>
                ))}
            </Stack>
          </Collapse>
        </Stack>
      );
    };
    
    interface NavItem {
      label: string;
      subLabel?: string;
      children?: Array<NavItem>;
      href?: string;
      icon?:string;
    }
    
    const NAV_ITEMS: Array<NavItem> = [
      {
        label: 'Women',
        href:'/Women',
        children: [
          {
            label: 'Clogs',
            subLabel: 'Trending Design to inspire you',
            href: '/Women',
            icon:"https://cdn-icons-png.flaticon.com/128/4187/4187487.png",
            trending:"Valentine Day",
            image:"https://media.crocs.com/images/f_auto,q_auto/marketing/2022-05-09-WomensSandalsUpdate-MegaMenu-sandal/Crocs"
          },
          {
            label: 'Boots',
            subLabel: 'Up-and-coming Designers',
            href: '/Women',
            icon:"https://t4.ftcdn.net/jpg/02/34/52/75/240_F_234527509_RCzmzLdblvvDyTbMQhRFzRASqxLfyIxF.jpg",
            trending:"Limited Series",
            image:"https://media.crocs.com/images/f_auto,q_auto/marketing/2022-05-09-WomensSandalsUpdate-MegaMenu-work/Crocs"
          },
          {
            label: 'Sandals',
            subLabel: 'Up-and-coming Designers',
            href: '/Women',
            icon:"https://t4.ftcdn.net/jpg/02/34/52/75/240_F_234527509_RCzmzLdblvvDyTbMQhRFzRASqxLfyIxF.jpg",
            trending:"Classics"
          },
          {
            label: 'Flip-Flops',
            subLabel: 'Up-and-coming Designers',
            href: '/Women',
            icon:"https://t4.ftcdn.net/jpg/02/34/52/75/240_F_234527509_RCzmzLdblvvDyTbMQhRFzRASqxLfyIxF.jpg",
            trending:"Animal Print"
          },
          {
            label: 'Socks',
            subLabel: 'Up-and-coming Designers',
            href: '#',
            icon:"https://t4.ftcdn.net/jpg/02/34/52/75/240_F_234527509_RCzmzLdblvvDyTbMQhRFzRASqxLfyIxF.jpg",
            trending:"Funn Day"
          },
          
        ],
      },
      {
        label: 'Men',
        children: [
          {
            label: 'Job Board',
            subLabel: 'Find your dream design job',
            href: '#',
          },
          {
            label: 'Freelance Projects',
            subLabel: 'An exclusive list for contract work',
            href: '#',
          },
        ],
      },
      {
        label: 'Children',
        href: '#',
      },
      {
        label: 'Exclusive',
        href: '#',
      },
    ];


export default Navbar