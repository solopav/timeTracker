import React, { Component } from 'react'
import { Link } from 'react-router'

export const Header = (props) => {
    return (
        <div className="header">
            <nav className="navbar navbar-light bg-faded">
                {/* <button className="navbar-toggler header__toggler">
                    &#9776;
                </button> */}

                <Link className="navbar-brand" to="/">timeTracker</Link>

                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                    {
                      props.signedIn
                        ? <a onClick={ (event) => {
                            event.preventDefault();
                            props.signOut()}
                          }
                          className="nav-link" href="#">Выход</a>
                        : null
                    }

                    </li>
                </ul>
            </nav>
        </div>
    )
};
