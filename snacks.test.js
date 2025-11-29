// 🏆 Snack 1

const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./snacks')


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

// Snack 5


test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('inni')).toBeTruthy()
})

// Snack 6 

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido', () => {
    // titolo vuoto
    expect(() => createSlug('')).toThrow('Titolo non valido')

    // titolo nullo
    expect(() => createSlug(null)).toThrow('Titolo non valido')

    // titolo undefined
    expect(() => createSlug(undefined)).toThrow('Titolo non valido')
})


// Snack 7

const posts = [{
    id: 1,
    title: 'mare mosso',
    slug: 'mare-mosso'
},
{
    id: 2,
    title: 'mare calmo',
    slug: 'mare-calmo'
},
{
    id: 3,
    title: 'montagna innevata',
    slug: 'montagna-innevata'
}

]





test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 1)).toEqual({
        id: 1,
        title: 'mare mosso',
        slug: 'mare-mosso'
    })
})