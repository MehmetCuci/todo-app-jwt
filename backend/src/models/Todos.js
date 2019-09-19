import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    OwnerID : String,
    name : String,
    done : {
        type : Number,
        default : 0
    },
})

export default mongoose.model("Todos", TodoSchema);