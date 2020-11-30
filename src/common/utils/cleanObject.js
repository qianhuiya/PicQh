import getType from "./getType";

/**
 * 根据 object 每个 key 上值的数据类型，赋对应的初始值
 * @param object
 */
const cleanObject = (object) => {

  for (let key in object) {
    switch (getType(object[key])) {

      case 'string':
        object[key] = ''
        break

      case 'array':
        object[key] = []
        break

      case 'number':
        object[key] = 0
        break

      case 'boolean':
        object[key] = false
        break
    }
  }
}

export default cleanObject
