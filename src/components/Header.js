import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu item" >
            <Link to="/" className="ui button black massive">
            <i class="twitch icon"></i>STREAMY!
            </Link>
            <div className="right menu">
                <Link to="/" className="ui button black big">
                    All Streams    
                </Link>    
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;