function Product(props){
    console.log(props);

    return (
    <div className='product'>
        <div>
            <h1>{props.title}</h1>
        </div>
        <div className='product-price'>
            {props.price}

        </div>
        <div className='product-description'>
            {props.description}
        </div>

    </div>
    )
       

}