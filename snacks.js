// Snack 1

function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ')
    return `${nome.charAt(0)}${cognome.charAt(0)}`
}



// Snack 2 / 4 / 6

function createSlug(str) {
    if (!str) {
        throw new Error('Titolo non valido')
    } else {
        const slug = str.toLowerCase().replaceAll(' ', '-')
        return slug
    }
}



// Snack 3

function average(arr) {
    let somma = 0
    arr.forEach((numero) => {
        somma += numero
    })
    const media = somma / arr.length
    return media
}

// Snack 5

function isPalindrome(parola) {
    const parolaInversa = parola.split('').reverse().join('')
    return parola === parolaInversa
}

// Snack 7

function findPostById(arr, id) {
    return arr.find((post) => post.id === id)

}



module.exports = { getInitials, createSlug, average, isPalindrome, findPostById }