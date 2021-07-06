import React from 'react';
import "./menu.css"

function Menu(props) {
    return (
        <div className="menu">
            <div className="menu-content">
                <div className="menu-nav">
                    <div className="menu-title">Menu</div>
                    <div className="menu-nav-content">
                        <div className="menu-nav-item">Case Studies</div>
                        <div className="menu-nav-item">Approach</div>
                        <div className="menu-nav-item">Services</div> 
                        <div className="menu-nav-item">About us</div>  
                    </div>
                </div>
                <div className="menu-contact">
                    <div className="menu-title">Contact</div>
                    <div className="menu-big-row">
                        <div className="menu-contact-content">
                            <div className="contact-subtitle">Email</div>
                            <div className="menu-nav-subitem">Get in touch with us</div>
                            <div className="menu-nav-subitem">Get a free audit</div>
                        </div>
                        <div className="menu-contact-content">
                            <div className="contact-subtitle">Headquarter</div>
                            <div className="menu-nav-subitem">Route du Jura 49 1700 Fribourg Switzerland</div>
                        </div>
                    </div> 
                    <div className="menu-small-row">
                        <div className="menu-contact-content">
                            <div className="contact-subtitle">Phone</div>
                            <div className="menu-nav-subitem">+41 (0) 79 510 28 70</div>
                        </div>
                        <div className="menu-contact-content">
                            <div className="contact-subtitle">Legal</div>
                            <div className="menu-nav-subitem">Privacy & Cookies</div>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    );
}

export default Menu;