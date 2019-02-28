import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Album from './Components/Album/album'
import Contacts from './Components/Contacts/contacts'
import About from './Components/About/about'
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/contacts" exact component={About}/>
                        <Route path="/about" exact component={Contacts}/>
                        <Route path="/" exact component={Album}/>
                    </Switch>
                </BrowserRouter>


            </div>
        );
    }
}

export default App;
