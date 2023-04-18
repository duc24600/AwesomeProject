const { default: baseHandler } = require("./base-handler")

const getList = (liquidation) => {
    return baseHandler.doGetAll(liquidation);
}

const update = (liquidation) => {
    return baseHandler.doPut(liquidation);
}

const resolve = () => {
    
}

const Liquidation = {
    getList,
    update,
    resolve
};

export default Liquidation;