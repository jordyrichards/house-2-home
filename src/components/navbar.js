import React, { Fragment, Component } from 'react';
import '../stylesheets/nav-bar.css'

export default class NavBar extends Component {
    render() {
        return (
          <div className="contained">
            <ul>
              <li><a href="/">Home(Replace with Logo)</a></li>
              <li><a href="/shop">Products</a></li>
              <li><a href="/paint-and-dec">Painting + Decorating</a></li>
              <li><a href="contact">Contact</a></li>
            </ul>
          </div>
        );
    }
}
