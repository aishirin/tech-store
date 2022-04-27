import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import css from './category-page.module.css'
function CategoryPage(){
    const [products,setProducts]=useState([]);
    const [colors,setColors]=useState([]);
    const [selectedColor,setSelectedColor]=useState()
    const fetchProducts=async()=>{
        const res= await fetch('http://localhost:3001/products');
        const data= await res.json();
        console.log(data);
    }

    useEffect(()=>{
        fetchProducts()
    },[])

    return(
        <div className={clsx(css.category,"container")}>
            <div className={css.filter}></div>
            <div className={css.list}>
            
            </div>
        </div>
    )
}
export default CategoryPage