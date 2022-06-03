const fetch = require('node-fetch');

const getPeoplePromise = (fetchAPI) => {
    return fetchAPI('http://swapi.py4e.com/api/people/')
        .then(res => res.json())
        .then(data => {
            return {
                count: data.count,
                results: data.results
            }
        })
}
const getPeopleAsync = async (fetchAPI) => {
    const getReq = await fetchAPI('http://swapi.py4e.com/api/people/')
    const data = await getReq.json()
    return {
        count: data.count,
        results: data.results
    }
}

module.exports = {
    getPeopleAsync, getPeoplePromise
}