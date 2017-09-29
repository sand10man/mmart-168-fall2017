// Steve DeNault
/* the setLanguage function determines which language will be accepted by the form.

*/
let language = 'Avaric'
let languageCode = 'av'
let jsonData

const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ak') {
        language = 'Akan'
    } else if (code === 'aa') {
        language = 'Afar'
    } else {
        language = 'Avaric'
    }
    document.getElementById('language').innerHTML = language
}
