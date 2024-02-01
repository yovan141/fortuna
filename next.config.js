const withPWA = require("next-pwa")({
    dest: "pubilc",
    register: true,
    skipWaiting: true,
    disableDevLogs: true
})

module.exports = withPWA({
    
})