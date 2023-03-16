import React, { Component } from 'react'
import Singlecard from './Singlecard'

class Cardlist extends Component {
    render() {  
        return (
            <div className="container ">
                <div className="row g-5 ">
                {this.props.uservalue.map((item, index) => {
                        return <Singlecard datauser={item} key={index} />
                    })}
                </div>
            </div>
        )
    }
}

export default Cardlist