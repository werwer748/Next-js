import { NextApiRequest, NextApiResponse } from "next";
import { TodoType } from "../../../types/todo";
import fs from "fs";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === "GET"){
        // try {
        //     const todos = await new Promise<TodoType[]>((resolve, reject) => {
        //         fs.readFile("/data/todos.json",(err:any, data: any )=> {
        //             if (err) {
        //                 return reject(err.message);
        //             }
        //             const todosData = data.toString();
        //             if(!todosData){
        //                 // todos.json 값이 비어있다면
        //                 return resolve([]);
        //             }
        //             const todos = JSON.parse(data.toString());
        //             return resolve(todos);
        //         })
        //     })
        //     res.statusCode = 200;
        //     return res.send(todos);
        // }
        // catch(e){
        //     console.log(e);
        //     res.statusCode = 500;
        //     res.send(e);
        // }
        try {
            const todosBuffer = fs.readFileSync("data/todos.json");
            const todosString = todosBuffer.toString();
            if(!todosString){
                res.statusCode = 200;
                res.send([]);
            }
            const todos: TodoType[] = JSON.parse(todosString);
            res.statusCode = 200;
            return res.send(todos);
        }
        catch(e){
            console.log(e);
            res.statusCode = 500;
            res.send(e);
        }
    }

    res.statusCode = 405;
    console.log(res.statusCode);
    return res.end();
}