import Axios from "axios";

async function request(data,url,method = 'POST') {
    return Axios({method,url:`${process.env.REACT_APP_BASE_URL}${url}`,data})
}

export default request;