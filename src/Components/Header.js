import React, { Component } from 'react'


class Header extends Component {
    render() {
        return (
            <div style={{width:"auto" , height:"auto", backgroundColor:"#000000", borderStyle:"double", borderColor:"#41474a"}}>
               <div style={{paddingTop:"16px", paddingLeft:"50px"}}>
               <h1 style={{color:"White", marginTop:"0%"}}>DASHBOARD</h1>
               </div>
            </div>
        )
    }
}

export default Header;