import React, {Component} from 'react';
import {Button, Form, Grid, Header, Image, Message, Segment} from "semantic-ui-react";
import * as Http from "../../utils/http.helper";


class RegisterForm extends Component {

    state = {
        email: "",
        password : "",
        hasErrors : false,
        errorMsg: ""
    }
    onInputChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    onSignUp = (e) => {
        e.preventDefault();

        if(this.state.email === "" || this.state.password === ""){
            this.setState({
                hasError : true,
                errorMsg: "Lütfen tüm alanları doldurun!"
            });

            return;
        }
        console.log(this.state);
        Http.post('auth/sign-up', { email: this.state.email, password: this.state.password })
            .then(res => {
                if(!res.status){
                    this.setState(
                        {
                            hasError: !res.status,
                            errorMsg : res.error.code === 11000 ? "Bu e-posta adresi mevcut!" : "Bir hata oluştu!"
                        }
                    )
                }
            }, (err) => {
                console.log(err);
            });
    }

    renderError = () => {
        return <div>{this.state.errorMsg}</div>;
    }

    render() {
        const Error = this.renderError;
        return (
            <div>
                <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='/logo.png' /> Tuduuuu!
                        </Header>
                        <Form size='large' onSubmit={this.onSignUp}>
                            <Segment stacked>
                                <Error/>
                                <Form.Input
                                    name="email"
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={this.onInputChange}
                                    value={this.state.email}
                                />
                                <Form.Input
                                    name="password"
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={this.onInputChange}
                                    value={this.state.password}
                                />

                                <Button color='teal' fluid size='large' type="submit">
                                    Register
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Have a account? <a>Login</a>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default RegisterForm;