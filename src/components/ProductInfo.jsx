const ProductInfo = (props) => {
  return (
    <>
    <div>
        <h4 className={`text-base text-menuC ${props.className}`}
            >{props.productName}</h4>
      
        <h4 className={`text-base text-menuC ${props.className}`}>{props.productPrice}</h4>
        <h4 className={`text-base text-menuC ${props.className}`}>{props.productCategory}</h4>
        <h4 className={`text-base text-menuC ${props.className}`}>{props.productColor}</h4>
      </div>     
    </>
  )
}

export default ProductInfo
