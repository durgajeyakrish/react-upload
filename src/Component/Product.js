import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import "./Product.css"


const Product = ({product}) => {
    console.log("product",product)

    const navigate = useNavigate();
    
  return (
    <div>
      
      <Card sx={{ maxWidth: 230 ,mt:2 }} onClick={()=>navigate(`/selectshow/${product.id}`)}>
      <CardMedia
        component="img"
        display="flex"
        height="340"
        image={product.image}
       // border-radius="25px !important"
      />
        </Card>
    <h3>{product.moviename}</h3>
    <p>{product.discription} </p>
    
    </div>
  )
}

export default Product
