const env = process.env.NODE_ENV

let BASEURL

if(env === 'development'){
    BASEURL = "http://192.168.31.100:8080"
}

if(env === 'production'){
    BASEURL = "http://192.168.31.100"
}

module.exports = {
    BASEURL
}