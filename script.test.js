const googleSearch = require('./script');

const dbMock = ['sadf.com', 'cwfwef.com', 'catty.com', 'cow.com']
it('this is a silly test', () => {
    expect('hello').toBe('hello')
    googleSearch('cat', dbMock)
})

it('searching google', () => {
    expect(googleSearch('testtest',dbMock)).toEqual([])
    expect(googleSearch('sad',dbMock)).toEqual(['sadf.com'])
})
it('work with undefined and null input', () => {
    expect(googleSearch(undefined,dbMock)).toEqual([])
    expect(googleSearch(null,dbMock)).toEqual([])
})
it('not return more than 3 items', () => {
    expect(googleSearch('.com',dbMock).length).toEqual(3)
    expect(googleSearch('c',dbMock).length).toNotEqual(4)
})