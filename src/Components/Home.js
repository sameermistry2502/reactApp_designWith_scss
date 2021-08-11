import React, { Component } from 'react';
import '../scss/home.scss';
class Home extends Component {


    render() {
        return (
            <div className="home_main">
              <div class="corner-ribbon top-left sticky red shadow">Angular</div>
                <div class="corner-ribbon top-right sticky blue">React</div>
                <div class="corner-ribbon bottom-left sticky orange">Ember</div>
                <div class="corner-ribbon bottom-right sticky green shadow">Vue</div>

                <h1>SPA Frameworks</h1>
                <h2>( A single-page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages....)</h2>
            </div>
        );
    }
}



export default Home;