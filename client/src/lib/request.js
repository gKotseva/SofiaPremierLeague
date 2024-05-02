const buildOptions = (method, data) => {
    const options = {}

    if(method !== "GET") {
        options.body = JSON.stringify(data)
        options.headers = {
            'content-type': 'application/json'
        }
    }

    return options
    
}

const request = async(method, url, data) => {
    console.log(method, url, data)
    const response = await fetch(url, {
        ...buildOptions(method, data),
        method
    })

    console.log(response)

    if(response.status === 204){
        return {}
    }

    const result = await response.json()

    return result
}

export const get = request.bind(null, 'GET')
export const post = request.bind(null, 'POST')
export const put = request.bind(null, 'PUT')
export const remove = request.bind(null, 'DELETE')