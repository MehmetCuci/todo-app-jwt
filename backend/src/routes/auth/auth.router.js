import express from "express";
import config from "../../config";
import jwt from "jsonwebtoken";

import crypto from "crypto";

import User from "../../models/User";


const route = () => {

    const router = new express.Router();

    router.route("/login").post((req, res) => {

        const { email, password } = req.body;
        
        User.findOne({ email: email}).then((user) => {
            if(!user){
                res.send({
                    status : false,
                    message: "Böyle bir e-posta bulunamadı."
                });
            }
            else{
                if(user.password === crypto.createHmac('sha256', config.passSecret).update(password).digest("hex")){
                    const token = jwt.sign({userId : user.id}, config.jwtsecret);
                    User.update({email}, {
                        $set : {
                            lastLogin : new Date()
                        }
                    }).then(() => {});

                    res.send({
                        status : true,
                        token
                    });
                } else{
                    res.send({
                        status: false,
                        message: "Hatalı parola girdiniz"
                    })
                }
            }
        })

        

    });

    router.route("/sign-up").post((req, res) => {
        const { email, password} = req.body;
        
        const newUser = new User({
            email,
            password : crypto.createHmac('sha256', config.passSecret).update(password).digest("hex")
        });

        newUser.save().then((data) => {
            res.send({status : true, user: data});
        },
        (err) => {
            res.send({status : false, error: err})
        } 
        )
       

    });

    return router;


}

export default {
    route,
    routePrefix : `/${config.version}/auth`
}