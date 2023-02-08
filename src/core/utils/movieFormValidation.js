
const alphanumeric = (str) => {
    if(!str) {
        return true
    } else {
        return /^[\w\-\s]+$/.test(str);
    }
}

const formValidation = (values) =>{
    const errors = {}
    const numberImbd = +values.imdbRating
    const NumericPattern = /^([^0-9]*)$/;
    const SpacesPettern = /^\s+$/

    if(!values.Title || !values.imdbRating || !values.Poster || !values.Plot || !values.DVD || !values.Actors || !values.Genre || !values.Language) {
        errors.form = "Boş alan kalmamalı"
    }
    if(values.Title.length > 255) {
        errors.Title = "Film başlığı maksimum 255 karakter olabilir"
    }
    if(SpacesPettern.test(values.Title) || SpacesPettern.test(values.imdbRating) || SpacesPettern.test(values.Poster) || SpacesPettern.test(values.Plot) || SpacesPettern.test(values.DVD) || SpacesPettern.test(values.Actors) || SpacesPettern.test(values.Genre) || SpacesPettern.test(values.Language)) {
        errors.form = "Boş alan kalmamalı"
    }
    if(numberImbd > 10) {
        errors.imdbRating = "Maksimum 10 puan verebilirsiniz"
    }
    if(alphanumeric(values.Title) === false) {
        errors.Title = "Sadece alfanümerik karakterler içerebilir"
    }
    if(numberImbd < 0) {
        errors.imdbRating = "Minimum 0 puan verebilirsiniz"
    }
    if(NumericPattern.test(numberImbd)) {
        errors.imdbRating = "IMBD Puanı sadece sayısal değerlerden oluşabilir"
    }
    if(isNaN(Date.parse(values.DVD))) {
        errors.DVD = "Çıkış yılı sadece tarihi değerlerden oluşabilir"
    }
    return errors
}

export {formValidation,alphanumeric}