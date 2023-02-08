const lastDigitDotRemove = (value) => {
    return String(value).slice(-1) === '.' ? value = value.substr(0,value.length - 1 ) : value
}

const randomId = () => {
    return Math.floor(Math.random() * 1000000)
}

const uniqueArraySort = (array) => {
    const uniqArray = [...new Set(array)]
    return uniqArray.sort()
}

const uniqueFragmentArray = (array) => {
    const combine = array.flat()
    const x = uniqueArraySort(combine)
    return x
}
const boldKeyword = (string, keyword) => {
    const x = new RegExp(keyword, "gi")
    return string.replace(x, "<b>" + keyword + "</b>")
}
const formattedDate = (date) =>{
    const newDate = new Date(date)
    return newDate.toISOString().slice(0, 10)
}

export {
    lastDigitDotRemove,
    randomId,
    uniqueArraySort,
    uniqueFragmentArray,
    boldKeyword,
    formattedDate
}
