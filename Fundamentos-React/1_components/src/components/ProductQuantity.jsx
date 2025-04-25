import React, {useState} from 'react'

const ProductQuantity = () => {
    const [product, setProduct] = useState({
        name:"Cadeira",
        quantity: 1
    })

    const updateProduct = () => {
        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: prevProduct.quantity + 1
        }))
    }
  return (
    <>
    <p>Nome do produto: {product.name}</p>
    <p>Quantidade: {product.quantity}</p>

    <button onClick={updateProduct}>Aumentar quantidade</button>
    </>
  )
}

export default ProductQuantity