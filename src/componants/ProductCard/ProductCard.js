import React from 'react'
import './ProductCard.css'
import { button, theme } from '../../data'

function ProductCard({name, img, button}) {
  return (
    <div className='product-card' style={{background: theme.cardBg}}>
        <img src={img} alt={name} className='product-img'/>
        <h1 className='product-name' style={{color: theme.heading}}>{name}</h1>
     
        <button className="btn">{button} </button>
    </div>
  )
}

export default ProductCard