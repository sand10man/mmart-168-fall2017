// Steve DeNault

let language = 'English'
let languageCode = 'en'
let jsonData


const setLanguage = (code) => {
    //Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
    languageCode = code
    if (code === 'ru') {
        language = 'Russian'
    } else if (code === 'es') {
        language = 'Spanish'
    } else {
        language = 'English'
    }
    document.getElementById('language').innerHTML = language

    //clear form:
    document.querySelector("pre").innerHTML = ''
}
/*the getData forma a URL from 2 parts: a base twiiter URL plus a language code modifier
(a json object).
The search term is added to these two components to complete the twitterURL.

In the console window you would access the first element with jsonData.statuses[0].
To reference the name property, which is inside of the user property for the second
status in the jsonData.statuses list: jsonData.statuses[1].text
*/

const getData = () => {
    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            jsonData = json
            let formattedJSON = syntaxHighlight(JSON.stringify(json, null, "    "))
            document.querySelector("pre").innerHTML = formattedJSON
        })
}








/**********************************************************************/
/* IGNORE THE CODE BELOW: JUST A WAY TO ADD COLOR TO THE JSON RESULTS */
/**********************************************************************/
const syntaxHighlight = (json) => {
    // This is just a convenience function to add color to the JSON response:
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number'
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key'
            } else {
                cls = 'string'
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean'
        } else if (/null/.test(match)) {
            cls = 'null'
        }
        return '<span class="' + cls + '">' + match + '</span>'
    })
}
