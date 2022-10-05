import { getData } from "./data";

const getProfile = ling => {
    const dados = getData();
    let profiles = [];

    dados.forEach(element => {
        if(element.linguagem === ling){
            profiles.push(element)
        }
    });

    return profiles
}

export default getProfile