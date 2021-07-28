import React, { Component } from 'react'


class Header extends Component {
    render() {
        return (

            <div style={{ width: "auto", height: "60px", backgroundColor: "#000000", borderStyle: "double", borderColor: "#41474a" }}>
              
                <div style={{ paddingTop: "6px", paddingLeft: "15px" }}>
                  
                    <h1 style={{ color: "White", marginTop: "0%" }}>AGRICULTURE DASHBOARD</h1>
                </div>
            </div>
        )
    }
}

export default Header;