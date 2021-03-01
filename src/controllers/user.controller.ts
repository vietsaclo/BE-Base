import { Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

export const getUsers = async (req: Request, res: Response):Promise<Response> => {
    const users =  await getRepository(User).find();
    return res.json(users);
};

export const getUser = async (req: Request, res: Response):Promise<Response> => {
    const result =  await getRepository(User).findOne(req.params.id);
    return res.json(result);
};

export const createUser = async (req: Request, res: Response):Promise<Response> => {
    const newUser = getRepository(User).create(req.body);
    const result = await getRepository(User).save(newUser);
    return res.json(result);
};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const repo = getRepository(User);
    const user = await repo.findOne(req.params.id);
    if (user){
        repo.merge(user, req.body);
        const result = await repo.save(user);
        return res.json(result)
    }
    return res.status(404).json('User Not Found!');
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const result = await getRepository(User).delete(req.params.id);
    return res.json(result);
};