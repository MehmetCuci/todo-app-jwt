import React, {Component} from 'react';
import {connect} from "react-redux";
import LoginForm from "./auth/LoginForm";
import {doLogin} from "../actions/auth";

class LoginView extends Component {


    render() {
       return(
           <LoginForm doLogin={this.props.doLogin}/>
       )
    }
}

const mapStateToProps = ({user}) => {
     return{

     }
};

const mapDispatchToProps = {
    doLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginView);