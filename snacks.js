// Snack 1

function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(' ')
    return `${nome.charAt(0)}${cognome.charAt(0)}`
}



// Snack 2

function createSlug(str) {
    const slug = str.replaceAll(' ', '-')
    return slug
}

module.exports = { getInitials, createSlug, average }

// Snack 3

function average(arr) {
    let somma = 0
    arr.forEach((numero) => {
        somma += numero
    })
    const media = somma / arr.length
    return media
}