const ProductInfo = (props) => {
  return (
    <>
    <div>
        <h4 className={`font-bold text-xl text-hoverC ${props.className}`}
            >{props.productName}</h4>
      
        <h4 className={`text-base text-menuC ${props.className}`}>{props.productPrice}</h4>
      </div>     
    </>
  )
}

export default ProductInfo
