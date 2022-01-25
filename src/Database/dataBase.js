// const books = 
//     [{"id":0,
//                 "name":"El señor de los annillos",
//                 "pages":310,
//                 "cover":"Dura", 
//                 "price" : 1029.20,
//                 "stock":10,
//                 "image":"https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg"},
//                 {"id":1,
//                     "name":"Harry Potter y la piedra filosofal",
//                     "pages":310,
//                     "cover":"Dura", 
//                     "price":1928,
//                     "stock":10,
//                     "image":"https://storage.googleapis.com/lanacion-media-storage/2020/06/24e890c1-harry-potter.jpg"},
//                 {"id":2,
//                     "name":"Pyhton para tontos",
//                     "pages":410,
//                     "cover":"Blanda", 
//                     "price":6730.12,
//                     "stock":6,
//                     "image":"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4717/9780471778646.jpg"},
//                 {"id":3,
//                     "name":"Learning React",
//                     "pages":110,
//                     "cover":"Blanda", 
//                     "price":3730.12,
//                     "stock":2,
//                     "image":"https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"}                    
//             ]



const allBooks =  ""
//  [
//       {id: 0, titulo: "El señor de los anillos", autor: "Nombre del autor", paginas: 310, tapa: "Dura", precio : 1029.20, stock : 2, imagen:"https://images-na.ssl-images-amazon.com/images/I/51kfFS5-fnL._SX332_BO1,204,203,200_.jpg"},
//       {id:1, titulo:"Harry Potter y la piedra filosofal",autor :"Autor",paginas:310,tapa:"Dura", precio:1928, stock:10,imagen:"https://storage.googleapis.com/lanacion-media-storage/2020/06/24e890c1-harry-potter.jpg"},
//       {id:3, titulo:"Learning React",autor :"Autor",paginas:110,tapa:"Dura", precio:3628, stock:4,imagen:"https://images-na.ssl-images-amazon.com/images/I/51FHuacxYjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"},
//       {id:3, titulo:"Pyhton para tontos",autor :"Autor",paginas:670,tapa:"Blanda", precio:13628, stock:1,imagen:"https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/4717/9780471778646.jpg"}
// ]
    
export function getBooks() {
    const URL = "http://localhost:3001/books"
    return new Promise ((resolve,reject)=>{
        setTimeout(() => resolve (
         
            fetch (URL)
            .then ((respuesta) => respuesta.json())         


        
            
        
        
        ), 2000)})
}

