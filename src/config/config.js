export const config = {
    server:{
        port:8080,
        secretSession:"claveSecretaSessions"
    },
    mongo:{
        url:"mongodb+srv://fiszmantomas:Avena2510@cluster0.zkxea3e.mongodb.net/Desafio07DB?retryWrites=true&w=majority"
    },
    github:{
        clientId:"Iv1.098aff8aba6f8ce4",
        clienteSecret:"8cb121bd9b3b7addbac1cd5e2eba81c02b708a83",
        callbackUrl:"http://localhost:8080/api/sessions/github-callback"
    }
}