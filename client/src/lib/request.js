const buildOptions = (data) => {
    const options = {};

    if (data instanceof FormData) {
        options.body = data;
    } else if (typeof data === 'object' && data !== null) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json',
        };
    }

    return options;
};

const request = async(method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method
    })


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