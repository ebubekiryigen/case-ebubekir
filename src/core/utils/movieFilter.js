const listMovie = (array) => {
    const newArray = [...array]
    return newArray.sort((a, b) => {
    let x = new Date(a.DVD)
    let y = new Date(b.DVD)
        if (y.getTime() !== x.getTime()) {
            return y - x
        } else {
            return +b.imdbRating - +a.imdbRating
        }
    })
}

const filterArray = (array,params,vote,year,genre) =>{
    const filter = array.filter(item=>{
        return(
            params ? item.Title.toLocaleLowerCase('TR').includes(params.toLocaleLowerCase('TR')) : true
        ) && (
            +vote !== 0 ? item.imdbRating >= +vote && item.imdbRating < +vote + 1 : true
        ) && (
            +year !== 0 ? new Date(item.DVD).getFullYear() === +year : true
        )&& (
            +genre !== 0 ? item.Genre.toLocaleLowerCase('TR').includes(genre.toLocaleLowerCase('TR')) : true
        )
    })
    const FinishFilter = listMovie(filter)
    return FinishFilter
}

export {
    filterArray,
    listMovie
}