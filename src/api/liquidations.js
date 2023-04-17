const { default: baseHandler } = require("./base-handler")

const getList = (liquidation) => {
    return baseHandler.doGetAll(liquidation);
}

const resolve = () => {
    
}