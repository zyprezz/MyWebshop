import React, { Component } from 'react';
import { Route } from 'react-router'
import  Store  from './components/shop';
import NavMenu from './components/layout'
import Cart from './components/cart'
import Contact from './components/contact'

import './custom.css'

export default class App extends React.Component {
    static displayName = App.name;

    render() {
        return (
            <NavMenu>
                <Route exact path='/' component={Store} />
                <Route path='/cart' component={Cart} />
                <Route path='/Contact' component={Contact} />
            </NavMenu>
        );
    }
}
