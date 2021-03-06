import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    
componentDidMount() {
    window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
            clientId: '998439686275-i307b13gv68a7p2vnbk6kgjs805vr273.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get());
            this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
}

onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
        this.props.signIn(this.auth.currentUser.get().getId());
    } else {
        this.props.signOut();
    }
};

onSignInClick = () => {
    this.auth.signIn();
};

onSignOutClick = () => {
    this.auth.signOut();
};

renderAuthButton() {
    if(this.props.isSignedIn === null) {
        return null;
    }else if (this.props.isSignedIn) {
        return (
            <div className="item">
            <button onClick={ this.onSignOutClick } className="ui red google button">
                <i className="google icon" />
                Sign Out
            </button>
            </div>
        );
    } else {
        return (
            <div className="item">
            <button onClick={ this.onSignInClick } className="ui green google button">
                <i className="google icon" />
                Sign in
            </button>
            </div>
        );
    }

};

    render() {
        return <div> {this.renderAuthButton()} </div>; 
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut }) (GoogleAuth);