import React from "react";
import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Css/Hcrousel.css"
import {Link,Box,SimpleGrid} from "@chakra-ui/react"

const cards = [
    {
      title: 'Classic Clog',
      text:
        "$54.99",
      image:
      "https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/10001_5Q6_ALT100/crocs",
    },
    {
      title: 'Classic marbled Clog',
      text:
        "$54.99",
      image:
        'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/206867_2Y3_ALT100/crocs',
    },
    {
      title: 'Adjustable Clog',
      text:
        "$50.99",
      image:
        'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208112_066_ALT100/crocs',
    },
    {
        title: 'Kids Clog',
        text:
          "$54.99",
        image:
          'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208464_2Y3_ALT100/crocs',
      },
      {
        title: 'Off Court Clog',
        text:
          "$40.99",
        image:
          'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/208371_2Y2_ALT100/crocs',
      },
      {
        title: 'Toddler Clog',
        text:
          "$54.99",
        image:
          'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207009_6S0_ALT100/crocs',
      },
  ];

function Hcrousel(){
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
       <Box className="container" w={{lg:"93%",sm:"87%"}} ml={{lg:'47px',sm:'33px'}} border='1px'>
<div style={{width:"90%",marginLeft:"50px",}} className='Hcrousel'>
           <Slider {...settings}>

    
          
           {cards.map((el)=>(
            <Link href="/Women">
                 <SimpleGrid w={{lg:'100%'}}>
                <img src={el.image} alt={el.text} style={{width:"300px"}}/>
                <h1>{el.title}</h1>
                <p>{el.text}</p>
                </SimpleGrid>
            </Link>
           
           ))}
            </Slider>
        </div>
        </Box>
       
        

    )
}
export default Hcrousel;