import express from "express";
import config from "../../config";
import jwt from "jsonwebtoken";

import crypto from "crypto";

import User from "../../models/User";


const route = () => {

    const router = new express.Router();

    router.route("/").post((req, res) => {
        res.send({})
    });

    return router;


}

export default {
    route,
    routePrefix : `/${config.version}/check`
}