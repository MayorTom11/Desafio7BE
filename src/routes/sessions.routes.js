import { Router } from "express";
import passport from "passport";
import { SessionsController } from "../controllers/sessions.controller.js";

const router = Router()

router.post("/signup", passport.authenticate("signupStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}) ,SessionsController.redirectLogin);
router.get("/fail-signup",SessionsController.failSignup);
router.post("/login", passport.authenticate("loginStrategy",{
    failureRedirect:"/api/sessions/fail-login"
}),SessionsController.renderProfile);
router.get("/fail-login",SessionsController.failLogin);
router.post("/changePass",SessionsController.changePass);
router.get("/loginGithub", passport.authenticate("githubLoginStrategy"));
router.get("/github-callback", passport.authenticate("githubLoginStrategy",{
    failureRedirect:"/api/sessions/fail-signup"
}),SessionsController.gitLogin);
router.get("/logout",SessionsController.logOut);

export {router as sessionsRouter}