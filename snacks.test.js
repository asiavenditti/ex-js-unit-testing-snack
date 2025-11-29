// 🏆 Snack 1

const { getInitials, createSlug, average } = require('./snacks')


test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    const initials = getInitials('Asia Venditti')
    expect(initials).toBe('AV')
})


// Snack 2

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    const slug = createSlug('Hello World')
    expect(slug).toBe('hello-world')
})


// Snack 3

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    const media = average([1, 2, 4, 5])
    expect(media).toBe(3)
})


// Snack 4

test('La funzione createSlug sostituisce gli spazi con -.', () => {

    expect(createSlug('ciao mondo')).toBe('ciao-mondo')

})
