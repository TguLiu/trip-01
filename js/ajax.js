import DEFAULT from './defaults.js'

class Ajax{
    constructor(url,options){
        this.url = url;
        this.options = Object.assign({},
            DEFAULT,options);

    }
}

export default Ajax