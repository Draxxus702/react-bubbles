import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'
// import axios from 'axios'


class Login extends React.Component{
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
state = {
  credentials: {
    username:'',
    password:''
  }
}

handleChange = e =>{
  this.setState({
      credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
      }
  })
}


login = e =>{
  e.preventDefault()
  console.log(this.state.credentials)
  axiosWithAuth()
  // axios
    .post('/api/login', this.state.credentials)
    .then(res =>{
        console.log('login resoponse', res.data.payload)
        window.localStorage.setItem('token', res.data.payload )
        this.props.history.push('/bubblepage')
    })
    .catch(err =>{
        console.log('login error', err)
    })
}

  render(){
  return (
   <div>
     <form onSubmit={this.login}>
        <label htmlFor='username'>Username</label>
        <input
        type = 'text'
        name = 'username'
        value = {this.state.credentials.username}
        onChange = {this.handleChange}
        />
         <label htmlFor='password'>Password</label>
            <input
                type = 'password'
                name = 'password'
                value = {this.state.credentials.password}
                onChange = {this.handleChange}
            />
            <button>Log In</button>

     </form>

  
   </div>
  );
};
}
export default Login;
