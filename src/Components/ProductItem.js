import React from 'react'
import "./ProductItems.css"

function ProductItem({ item }) {
    return (
        <div className='productItem'>
            <img style={{ width: 200, height: 200, marginLeft: "auto", marginRight: "auto" }} src={item.image} />
            <p>{item?.title.length > 30 ? item.title.substr(0, 30) : item.title}</p>
            <p>{item?.description.length > 60 ? item.description.substr(0, 60) : item.description}</p>
            <p>{item.price}</p>
            <button className='productAddTocartBtn'>Add to cart</button>
            <button className='productAddTocartBtnBuy'>Buy Now</button>
        </div>
    )
}

export default ProductItem