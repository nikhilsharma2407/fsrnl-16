import axios from 'axios';
import React, { Component } from 'react'

export default class UsersClass extends Component {

  constructor() {
    super();
    this.state = {
      users: [],
      userId: "1"
    };
    console.log("Initialisation - constructor");
  }
  
  BASE_URL = "https://jsonplaceholder.typicode.com/users/";

  async componentDidMount() {
    console.log("mounted");
    const data = await (await axios.get(this.BASE_URL)).data;
    console.log(data);
    this.setState({users:data});
  };

  async componentDidUpdate() {
    console.log("updated");
    const {userId} = this.state
    const url = this.BASE_URL+userId;
    const userData = await (await axios.get(url)).data;
    console.log({userData});
  }

  componentWillUnmount(){
    console.log("Component will unmount");
  }

  

  render() {
    console.log("render");
    const {userId} = this.state
    return (
      <>
        <input type="number" min="1" max = "10" 
        onChange={e=>this.setState({userId:e.target.value})} />
        <h1>user id - {userId}</h1>
        <div>UsersClass</div>
        <button onClick={e=>this.setState({users:[]})}>Update Users</button>

      </>
    )
  }
}
