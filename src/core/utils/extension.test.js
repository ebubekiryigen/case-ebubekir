import {lastDigitDotRemove, uniqueArraySort,uniqueFragmentArray} from './extension'

describe("Extension testleri",()=>{
    test("Çift haneli değerlerde ikinci değerde nokta siliniyormu", ()=>{
        expect(lastDigitDotRemove('7.')).toEqual('7')
    })
    test("verilen dizideki tekrar eden elemanları çıkartıp kalanları sıralıyormu",()=>{
        const array = ['2018','2019','2022','1998','2022','1998','2018']
        const equalArray = ['1998','2018','2019','2022']
        expect(uniqueArraySort(array)).toEqual(equalArray)
    })
    test("gelen iç içe diziyi tek bir dizi haline getirip tekrar eden elemanları siliyormu",()=>{
        const array = [['Comedy', 'Drama'],['Drama', 'Romance'],['Documentary'],['Drama', 'Fantasy'],['Comedy', 'Drama', 'Romance'],
        ['Comedy'],['Animation', 'Family', 'Fantasy'],['Comedy'],['Comedy', 'Drama', 'Romance'],['Fantasy']]
        const equalArray = ['Comedy','Drama','Romance','Documentary','Fantasy','Animation','Family']
        expect(uniqueFragmentArray(array)).toEqual(equalArray)
    })
})