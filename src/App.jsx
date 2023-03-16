import axios from 'axios';
import React, { Component } from 'react';
import Cardlist from './components/Cardlist';
import Header from './components/Header';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: [],
      found: false
    }
  }
  findUser = (keyword) => {
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users: res.data.items, found: true }))
    .catch(err=> console.log(err))
    
  }
  render(){
    return (
      <>
      {console.log(this.state.users)}
        <Header />  
        <Search searchValue={this.findUser} />
        {this.state.found ? <Cardlist uservalue={this.state.users} /> : <h1 className='text-center'>No user</h1> }

      </>

    )
  }
}

export default App