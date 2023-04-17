const { default: baseHandler } = require("./base-handler")

const device = {
    collectionName: "devices"
}
const getDeviceList = (start) => {
    device.start = start;
    device.count = 10;
    return baseHandler.doGetAll(device);
};

const Device = {
    getDeviceList
};

export default Device;