import AuthRouter from './auth/auth.router';
import TodoRouter from './todos/todos.router';
import CheckRouter from './check/check.router';
import config from '../config';
const jwtMiddleware = require('express-jwt-middleware');

var jwtCheck = jwtMiddleware(config.jwtsecret);


const AppRoutes = (app) => {
    app.use(AuthRouter.routePrefix, AuthRouter.route());
    app.use(TodoRouter.routePrefix, jwtCheck, TodoRouter.route());
    app.use(CheckRouter.routePrefix, jwtCheck, CheckRouter.route());
}

export default AppRoutes;