module.exports = {
    serverRuntimeConfig: {
        secret: 'fe30feca-55b7-4a4d-9998-3165a2409d24'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}
