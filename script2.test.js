const fetch = require('node-fetch');

const swapi = require('./script2')

it('calls swapi to get people', async () => {
    expect.assertions(1)
    const data = await swapi.getPeopleAsync(fetch);
    expect(data.count).toEqual(87);
})

it('calls swapi to get people with promise', () => {
    expect.assertions(2)
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87)
        expect(data.results.length).toBeGreaterThan(5)
    })
})