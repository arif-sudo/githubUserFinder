import React, { Component } from 'react';

class Search extends Component {
    constructor(){
        super();
        this.state = {
            keyword: ''
        }
        this.inputValue = this.inputValue.bind(this);
        this.searchUser = this.searchUser.bind(this);
    }
    inputValue(e){
        this.setState({keyword: e.target.value});
    }
    searchUser(e){
        e.preventDefault();
        this.props.searchValue(this.state.keyword);
    }
    render() {
        return (
            <div className="container my-5 w-50 py-4 ">
            <form className="input-group" onSubmit={this.searchUser}>
                <input onChange={this.inputValue} type="text" className="form-control fs-5" placeholder="Enter username"  />
                <button className="btn btn-outline-secondary fs-5" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            </div>

        )
    }
}

export default Search