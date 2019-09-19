import React, {Component} from 'react';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";

class LoginForm extends Component {

    state = {
        email : "",
        password: "",
        errors: ""
    }

    inputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    formSubmit = (e) => {
        e.preventDefault();

        if(this.state.email == "" || this.state.password == ""){
            this.setState({errors: "Boş alan bırakmayınız!"});
            return;
        }
        this.props.doLogin(this.state);
    }

    render() {

        return (
            <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='https://react.semantic-ui.com/logo.png' /> Tuduuuu!
                    </Header>
                    <Form size='large' onSubmit={this.formSubmit}>
                        <Segment stacked>
                            <Form.Input
                                name="email"
                                fluid icon='user'
                                iconPosition='left'
                                placeholder='E-Mail'
                                value={this.state.email}
                                onChange={this.inputChange}
                                type="email"/>
                            <Form.Input
                                name="password"
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                value={this.state.password}
                                onChange={this.inputChange}/>

                            {this.state.errors}

                            <Button color='teal' fluid size='large' type="submit">
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        );
    }
}

export default LoginForm;