import { IToken, IUserInfo } from "../Interfaces/Interfaces";

const url = 'https://bioapijd.azurewebsites.net'

export const createAccount = async (createUser: IUserInfo) => {
    const res= await fetch(url + '/User/AddUser', {
        method : "POST" ,
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(createUser)
    });
    if(!res.ok){
        const message = `An Error has occured ${res.status}`
        throw new Error(message);
    }
    const data = await res.json();
    return data
}

export const login = async (userInfo:IUserInfo) => {

    const res = await fetch(url + '/User/Login', {
        method : "POST" ,
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(userInfo)
    });
    if(!res.ok){
        const message = `An Error has occured ${res.status}`
        throw new Error(message);
    }

    const data: IToken = res.json();
    return data;
}