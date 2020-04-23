import axios from 'axios';
 
 
export default class Search {
    constructor(query){
        this.query = query;
    }
 
    async  getResults(query){   
 
        /* 1. old browsers can not recognise fetch so we use axios which works on all browsers 
           2. axios returns json data while fetch donot */
 
        try {
 
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
        } catch(error) {
            alert(error)
        }
    }
 
}
 