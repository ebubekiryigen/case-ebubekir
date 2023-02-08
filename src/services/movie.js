import { formattedDate, randomId } from "../core/utils/extension";
import { get } from "./services";

export const getMovie = (searchText) => get(searchText).then(async (data)=>{
    const array = data.Search
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        await fetch(`https://www.omdbapi.com/?i=${array[index].imdbID}&apikey=25aa2ba2`).then(res=>res.json()).then((data)=>{
            let id = randomId()
            data.id = id
            let dvd = data.DVD
            dvd !== 'N/A' ? data.DVD = formattedDate(data.DVD) : data.DVD = formattedDate("12 Aug 2022")
            let alphanumericTitle = data.Title.replace(/[^a-zA-Z0-9]/g, " ")
            data.Title = alphanumericTitle
            newArray.push(data)
    });
    }
    return newArray
}).catch('şuan dataya ulaşılamıyor')