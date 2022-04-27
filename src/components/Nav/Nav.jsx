import css from './nav.module.css';
import Card from '../Card/Card'
function Nav({title}){
    return(
        <div className="list">
            <section className={css.section}>
            <h1 className={css.title}>{title}</h1>
            <a href='#' className={css.link}>See All Products</a>
        </section>
        <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
          <Card
          isInStock={false}
          title="Asus Zenbook 15 EL-TU"
          image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
          priceOld={1000}
          price={899}
        />
        <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
          <Card
            isInStock={false}
            title="Asus Zenbook 15 EL-TU"
            image="https://www.pngplay.com/wp-content/uploads/1/Laptop-PNG-Image.png"
            priceOld={1000}
            price={899}
          />
        </div>
    )
    
}
export default Nav