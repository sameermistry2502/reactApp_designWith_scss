import React, { Component, lazy ,Suspense} from 'react';
import { BrowserRouter, Route, Switch ,Link } from 'react-router-dom';
import '../scss/global.scss';
import '../scss/footer.scss';
import Footer from './Footer.js';
const Home = lazy(() => import('./Home.js'));
const About = lazy(() => import('./About.js'));
const Contact = lazy(() => import('./Contact.js'));
class Main extends Component {
    /*constructor(props) {
        super(props);

    }*/

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        //let main = "";
        return (
        <React.Fragment>
        <header>
                    <BrowserRouter >
                    <div>
                        <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        </nav>
                       
                    </div>
                    <Switch>
                     <Suspense fallback={<div></div>}>
                        <Route exact path='/' component={Home} ></Route>
                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/contact" component={Contact} ></Route>
                        </Suspense>
                    </Switch>
                    </BrowserRouter>
        </header>
       
        <footer  class="footer">
          <Footer/>
        </footer>
        </React.Fragment>
        );
    }
}  

export default Main;