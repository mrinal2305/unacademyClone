import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div>

            <header class="nav-header">
                <div class="nav-header_parent">
                    <a href="/" class="nav-header_anchor">
                        <img src="https://static.uacdn.net/production/_next/static/images/logo.svg" alt="Company Logo"
                           />
                    </a>

                    <button type="button" class="nav-header-button">
                        IIT JEE
                <svg width="16px" height="16px" viewBox="0 0 80 80" class="nav-header-svg">
                            <path
                                d="M39.8 52.033c-0.003 0-0.008 0-0.012 0-0.687 0-1.308-0.28-1.755-0.733l-20-20c-0.49-0.458-0.796-1.108-0.796-1.829 0-1.381 1.119-2.5 2.5-2.5 0.721 0 1.371 0.306 1.828 0.794l0.001 0.001 18.233 18.233 18.233-18.233c0.445-0.416 1.045-0.671 1.704-0.671 1.381 0 2.5 1.119 2.5 2.5 0 0.659-0.255 1.259-0.672 1.706l0.001-0.001-20 20c-0.447 0.453-1.068 0.733-1.755 0.733-0.004 0-0.008 0-0.012 0h0.001z"
                                fill="#3C4852"></path>
                        </svg>
                    </button>

                    <div class="nav-header-search">
                        <div class="nav-header-svg-2" currentselecteditem="-1">
                            <div class="nav-header-svg-3">
                                <svg width="24px" height="24px" viewBox="0 0 80 80" class="nav-header-svg-4">
                                    <path
                                        d="M68.433 64.9l-13.667-13.667c3.485-4.205 5.6-9.657 5.6-15.602 0-0.011 0-0.022 0-0.033v0.002c-0.019-13.671-11.096-24.748-24.765-24.767h-0.002c-13.678 0-24.767 11.088-24.767 24.767s11.088 24.767 24.767 24.767v0 0c0.009 0 0.020 0 0.032 0 5.945 0 11.396-2.115 15.643-5.633l-0.041 0.033 13.667 13.667c0.452 0.452 1.077 0.731 1.767 0.731s1.314-0.279 1.767-0.731v0c0.452-0.452 0.731-1.077 0.731-1.767s-0.279-1.314-0.731-1.767v0zM35.6 55.367c-10.908-0.012-19.746-8.857-19.746-19.767 0-5.453 2.208-10.391 5.779-13.967l-0 0c3.543-3.582 8.458-5.8 13.891-5.8 0.027 0 0.053 0 0.080 0h-0.004c10.917 0 19.767 8.85 19.767 19.767s-8.85 19.767-19.767 19.767v0z"
                                        fill="#3C4852">
                                    </path>
                                </svg>
                            </div>
                            <input type="text" autocomplete="off" id="searchInput" placeholder="Search" value="" class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart MuiOutlinedInput-inputAdornedStart" />
                            <fieldset class="nav-header-fieldset">
                                <legend class="nav-header-legend"></legend>
                            </fieldset>
                        </div>
                    </div>
                    <button type="button" class="nav-header-login">Login</button>
                </div>
            </header>

        </div>
    );
}

export default Navbar;
