import React, { Component } from 'react'



class Singlecard extends Component {
    render() {
        const { avatar_url,html_url, login, node_id } = this.props.datauser;
        return (

            <div className="col-sm-6 col-md-4 col-lg-3 d-flex  justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                    <img src={avatar_url} className="card-img-top img-fluid" alt={login} />
                    <div className="card-body">
                        <h5 className="card-title">{login}</h5>
                        <p className="card-text">{node_id}</p>
                        <a href={html_url} rel="noreferrer" target='_blank' className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Singlecard