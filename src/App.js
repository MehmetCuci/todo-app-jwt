import React, {Component} from 'react';
import Header from "./components/static/Header";
import {Container} from "semantic-ui-react";
import { Switch, Route } from 'react-router-dom';
import AuthView from "./components/LoginView";
import {connect} from 'react-redux';
import {checkUser} from "./actions/auth";
import TodosPage from "./components/pages/TodosPage";
import Footer from "./components/static/Footer";
import jwt from "jsonwebtoken";

class App extends Component {

    componentDidMount() {

    }
       /* const token = localStorage.getItem("userToken");
        if(token){
            this.props.checkUser(token);
        }
    }*/


    render() {

        return (
            <div className="App">

                <Header/>
                <Container text style={{ marginTop: '5em' }}>
                    <Switch>
                        <Route path="/" component={AuthView} exact />
                        <Route path="/todos" component={TodosPage} exact />
                    </Switch>
                </Container>
                <Footer/>
            </div>
        );
    }
}

const mapDispatchToProps = {
    checkUser
}



export default connect(null, mapDispatchToProps)(App);