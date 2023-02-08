async function services(url){
    const request =  await fetch( `https://www.omdbapi.com/?s=${url}&apikey=25aa2ba2`)
    .then(res => res.json())
    return request
}

export const get = (url) => services(url)