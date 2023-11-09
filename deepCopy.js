// {a: 'hi', b: 'b'}

function deepCopy(obj){
    
    const keys = Object.key(obj)
    const newObject = {}

    for (let i=0; i< keys.length; i++){
        const key = keys[i]
        if (typeof obj[key] === 'object'){
            newObject[key] = deepCopy(obj[key])
        }else{
            newObject[key] = obj[key]
        }
    }
    return newObject
}