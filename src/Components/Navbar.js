import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{height: "25px"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">LOGO</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Data Insights</a>
                            <a class="nav-link" href="#">Queries</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Other Options</a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
