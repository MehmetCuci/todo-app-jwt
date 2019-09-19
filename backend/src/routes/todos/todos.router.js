import express from 'express';
import config from '../../config';

import Todos from "../../models/Todos";

const route = () => {
    const router = new express.Router();
    
    router.route('/').get((req, res) => {

        const userID = req.tokenData.userId;

        Todos.find({ OwnerID: userID }, (err, todos) => {
            if (err) throw err;
            res.send(todos);
        });
    });
    
    router.route("/add").post((req, res) => {
        const { OwnerID, name} = req.body;
        
        const newTodo = new Todos({
            OwnerID,
            name
        });

        newTodo.save().then((data) => {
            res.send({status : true, data});
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
    routePrefix : `/${config.version}/todos`
}