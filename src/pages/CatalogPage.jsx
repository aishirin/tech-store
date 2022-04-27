import {useParams} from 'react-router-dom'
import { useState } from 'react'
const colorOptions=[
    {title: "BLACK",value:"#000"},
    {title: "RED",value:"#f00"},
    {title: "BLUE",value:"#00f"},
    {title: "WHITE",value:"#fff"},
    {title: "GREEN",value:"#0f0"}
]
const products=[
    {id:1,title:"B",color:"#000"},
    {id:2,title:"BL",color:"#00f"},
    {id:3,title:"R",color:"#f00"},
    {id:4,title:"B",color:"#000"},
    {id:5,title:"BL",color:"#00f"}
]

function CatalogPage(){
    const {name}=useParams()
    const [color, setColor] =useState(new Set([]))
    const handleChange=(value)=>{
        if(color.has(value)){
            color.delete(value)
        }else{
            color.add(value)
        }
        setColor(new Set(color))
    }
    return (<div style={{padding: "20px"}}>
        <h1>{name}</h1>
        <div>
        {colorOptions.map((op)=>(
           <label key={op.value}>
           <input type="checkbox" value={op.value} checked={color.has(op.value)} onChange={()=>handleChange(op.value)} />
           {op.title}
           </label> 
        ))}
        </div>
        <div>
            {products
            .filter((prod)=>color.has(prod.color))
            .map((prod)=><p key={prod.id}>{prod.title}</p>)}
        </div>
      </div>
          
    )
   }
export default CatalogPage