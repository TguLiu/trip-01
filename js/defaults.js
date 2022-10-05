const DEFAULT = {
    method:'GET',
    //请求头数据
    params:null,
    //请求体数据
    data:null,
    contentType:'application/x-www-form-urlencoded',
    responseType:'',
    timeoutTime:0,
    withCredentials:false,

    success(){},
    httpCodeError(){},
    error(){},
    abort(){},
    timeout(){}
}