import React from 'react'
import {
    Container,
    Image,
    Menu,
} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const HeaderComp = () => (
    <Menu fixed='top' inverted>
        <Container>
            <Menu.Item as='a' header>
                <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
                Todo APP
            </Menu.Item>
            <Menu.Item as={NavLink} to={"/"} exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to={"/todos/new"} exact>Add New</Menu.Item>
        </Container>
    </Menu>
)

export default HeaderComp