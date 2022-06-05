import React, { Component } from 'react'
import UsersClass from '../Users/UsersClass';
import "./MyComponent.css"

export default class MyComponent extends Component {
    constructor(){
        super();
        this.state = {
            showLabel:true,
            name:''
        }
    }

  render() {
      console.log(this.props);
      const {name,email} = this.props;
    //   console.log("render");
    const clickHandler = ()=>{
        const {name} = this.state;
        alert(`Hello ${name}`)
    };

    const changeHandler = (e)=>{
        // const {target:{value:name}} = e
        // const name = e.target.value
        const {value:name} = e.target;
        console.log(name);
        this.setState({name});
    }
    const toggleVisibility = (e)=>{
        this.setState({showLabel:!showLabel},()=>{
            console.log(this.state);
        });
        // this.state.showLabel = !this.state.showLabel
        // this.state = {...this.state, showLabel:!this.state.showLabel}
        console.log("Non-CB",this.state);
    }
    const {showLabel} = this.state
    return (
    <>
        <h1>props - {name} {email}</h1>
      {showLabel?<h1>MyComponent </h1>:null}
      <input className='input-style' type="text" onChange={changeHandler} />
      <button onClick={clickHandler}>Click me</button>
      <button onClick={toggleVisibility}>{showLabel?"Hide Label":"Show Label"}</button>
      <hr />
      {/* {showLabel?<UsersClass name = {name}  email = "nikhil@gmail.com"/>:null} */}

      </>
    )
  }
}

const name = "Nikhil";
const img = "img1"

export  {name,img};