import { usersDao } from "../dao/index.js";
import { createHash, isValidPassword } from "../utils.js";

export class SessionsController{
    static redirectLogin = (req,res)=>{
        res.render("login",{message:"usuario registrado"});
    }

    static failSignup = (req,res)=>{
        res.render("signup",{error:"No se pudo registrar el usuario"});
    }

    static renderProfile = (req,res)=>{
        res.redirect("/perfil");
    }

    static failLogin = (req,res)=>{
        res.render("login",{error:"Credenciales invalidas"});
    }

    static changePass = async(req,res)=>{
        try {
            const form = req.body;
            const user = await usersDao.getByEmail(form.email);
            if(!user){
                return res.render("changePassword",{error:"No es posible cambiar la contraseña"});
            }
            user.password = createHash(form.newPassword);
            await usersService.update(user._id,user);
            return res.render("login",{message:"Contraseña restaurada"})
        } catch (error) {
            res.render("changePassword",{error:error.message});
        }
    }

    static gitLogin = (req,res)=>{
        res.redirect("/products");
    }

    static logOut = (req,res)=>{
        req.logOut(error=>{
            if(error){
                return res.render("profile",{user: req.user, error:"No se pudo cerrar la sesion"});
            } else {
                req.session.destroy(error=>{
                    if(error) return res.render("profile",{user: req.session.userInfo, error:"No se pudo cerrar la sesion"});
                    res.redirect("/");
                })
            }
        })
    }
}