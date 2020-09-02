import Axios from "axios";

async function request(data,url,method = 'POST') {
    return Axios({
        method,url:`${process.env.REACT_APP_BASE_URL}${url}`,
        data: data,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export default request;