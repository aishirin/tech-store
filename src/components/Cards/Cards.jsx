import './cards.css'
function Cards({isInStock,title,image,priceOld,price}){
    <article className='card'>
        <small className='card__status'>in stock</small>
        <img src={image} alt="img" className='card__img'/>
        <div className="review"></div>
        <h1 className='card__title'>{title}</h1>
        <p className='card__price card__price--old'>{priceOld}</p>
        <p className='card__price'>{price}</p>
    </article>
    }
export default Cards;
