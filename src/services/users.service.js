import { usersDao } from "../dao/index.js";
export class UsersService{
    static getByEmail = async(username)=>{
        return await usersDao.getByEmail(username)
    }

    static save = async(newUser)=>{
        return await usersDao.save(newUser)
    }

    static getById = async(id)=>{
        return await usersDao.getById(id)
    }
}