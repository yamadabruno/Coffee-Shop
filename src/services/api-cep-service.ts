import axios from 'axios'

export function findCEP(cep: string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}


