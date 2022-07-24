import "./Avatar.scss"
import React from 'react'

interface IProps{
    name:string;
    image?:string
}

function Avatar({name,image}:IProps) {
const getInitials = (name)=>{

}
  return (
    <div className = "avatar container">
        {image!==undefined?<img src={image} alt="" />:
        <div className="name">
            {name[0]}
        </div>}
    </div>
  )
}

export default Avatar