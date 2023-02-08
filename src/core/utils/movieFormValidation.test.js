import {formValidation} from './movieFormValidation'

describe("Extension testleri",()=>{
    test("form validasyonu sırasında herhangi bir eleman gelmesse uyarı verirmi", ()=>{
        const form = {DVD:"19-04-2001", imdbRating:"", Poster:"ebubekiryigen.com/img/poster.img", Plot:"lorem ipsum dolar sit amet", Title:"Ava Garden", Actors:"Jesús García de Dueñas, Ava Gardner, Nieves Herrero",Genre:"Drama",Language:"En"}
        expect(formValidation(form)).toEqual({"form": "Boş alan kalmamalı"})
    })
})