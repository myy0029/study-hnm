import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({item}) {
    const navigate = useNavigate();
    const showDetail = () => {
        navigate(`/product/${item.id}`);
    }

    
    return (
        <div className='card' onClick={showDetail}>
            <img className='product-img' src={item?.img} />
            <div className='choice'>{item?.choice == true ? "Conscious choice" : ""}</div>
            <div className='title'>{item?.title}</div>
            {/* <div className='price'>₩ {item?.price}</div> */}
            <div className='bottom'>
                <p className='price'>₩ {item?.price != null ? new Intl.NumberFormat('ko-KR').format(item.price) : ''}</p>
                <p className='new-product'>{item?.new == true ? "신제품" : ""}</p>
            </div>
        </div>
    );
}

export default ProductCard;