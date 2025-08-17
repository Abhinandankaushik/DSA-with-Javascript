/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {

    // console.log(Object.prototype.toString.call(obj))

    // return (Object.prototype.toString.call(obj) === Object.prototype.toString.call(classFunction))

    if (typeof classFunction !== "function") return false;

    // case: null/undefined
    if (obj == null) return false;

    // primitives ko wrapper bana do
    let currentObj = (typeof obj !== "object" && typeof obj !== "function")
        ? Object(obj)
        : obj;

    while (currentObj != null) {
        if (Object.getPrototypeOf(currentObj) === classFunction.prototype) {
            return true;
        }
        currentObj = Object.getPrototypeOf(currentObj);
    }

    return false;

};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
