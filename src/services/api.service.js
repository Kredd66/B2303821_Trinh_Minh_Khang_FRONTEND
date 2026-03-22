import axios from 'axios';

const commonConfig = {
    headers: {
        "Content-Type" : "applicationjson",
        Accept : "application/json",
    },
};

export default (baseURL) => {
    return axios.create({
        baseURL,
        ...commonConfig,
    });
};