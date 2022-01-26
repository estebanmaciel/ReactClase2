
    
export function getBooks() {
    const URL = "http://localhost:3001/books"
    return new Promise ((resolve,reject)=>{
        setTimeout(() => resolve (
            fetch (URL)
            .then ((respuesta) => respuesta.json())         
        ), 2000)})
}

export function getOneBooks() {
    const URL = "http://localhost:3001/books"
    return new Promise ((resolve,reject)=>{
        setTimeout(() => resolve (
            fetch (URL)
            .then ((respuesta) => respuesta.json())
    ), 2000)})
}
