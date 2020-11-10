import axios from 'axios';

export default{
    getWithHeader(url, headers){
       // url = this.appendTimeStampToClearCache(url);
        return axios.get(url, headers);

    },
    postData(url, dataObject){
        return axios.post(url, dataObject);
    }
    
}