import React, { Fragment, Component } from 'react';
import '../stylesheets/nav-bar.css'

export default class NavBar extends Component {
    render() {
        return (
          <div className="contained">
            <ul>
              <li><a href="/">Home(Replace with Logo)</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="contact.asp">Painting + Decorating</a></li>
              <li><a href="about.asp">Contact</a></li>
            </ul>
          </div>
        );
    }
}
