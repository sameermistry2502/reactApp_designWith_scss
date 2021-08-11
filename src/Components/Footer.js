import React, { Component } from 'react';
import '../../node_modules/font-awesome/scss/font-awesome.scss';
class Footer extends Component {


    render() {
        return (
            <div className="icons">
            <a href={'/about'}><i className="fa fa-instagram" ></i></a>
            <a href={'/about'}><i className="fa fa-linkedin" ></i></a>
            <a href={'/about'}><i className="fa fa-facebook" ></i></a>
            <a href={'/about'}><i className="fa fa-twitter" ></i></a>
            <a href={'https://sameermistry2502.medium.com/'} ><i className="fa fa-medium"></i></a>
            <a href={'https://github.com/sameermistry2502?tab=repositories'}><i className="fa fa-github"></i></a>
            
             <p className="company-name">
                 CopyRight &copy; 2021, ALL Rights Reserved
             </p>
           </div>
        );
    }
}



export default Footer;