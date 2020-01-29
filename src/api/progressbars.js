import axios from 'axios';

export default {

    getData(cb) {
        axios.get('http://pb-api.herokuapp.com/bars').then( response => {
            cb(response.data);
        }).catch( e => {
            cb(e);
        })
    }
}