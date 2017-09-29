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
    getData()
}

const clearData = () => {
    const element = document.getElementById("results")
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//Note: language codes here: https://www.w3schools.com/tags/ref_language_codes.asp
const getData = () => {

    const term = document.getElementById('term').value
    const baseURL = 'https://mmart168-twitter-proxy.herokuapp.com/1.1/search/tweets.json?q=' + term
    twitterURL = baseURL + '&lang=' + languageCode
    fetch(twitterURL)
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            let div
            let textNode
            let status

            // output statuses:
            console.log(json.statuses)

            // clear out existing tweets:
            clearData()

            // output the text of the first tweet:
            /*
            status = json.statuses[0]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)

            // output the text of the second tweet:
            status = json.statuses[1]
            div = document.createElement("div")
            div.className = "tweet"
            textNode = document.createTextNode(status.text)
            div.appendChild(textNode)
            document.getElementById("results").appendChild(div)
*/
            /* 1. Describe what you think this code is doing.
            What is happening is that this code is exteacting the text of
            the first two twwets only (in textrNode variables)
            and displaying them in the visible document.

            It starts with clearing old data to make way for
            the new tweets.  To get the text for later tweets we must query
            the later objects in the console (array elements 2,3,4.

            We could have gotten these additional tweets by copying the blocks
            of working code and changing the referencing to the 3rd, 4th and
            5th elements jsonData array.

            */

            // 2. output the text of the third tweet:
            /*  text  "A parte de guapo 😉 https://t.co/5eDvLcwMTj"
*/
            // 3. output the text of the fourth tweet:
            /*text "¿Puede ser que Gravity sea la mejor película de Clooney?"
*/
            // 4. output the text of the fifth tweet:
            /*text "Clooney entra a polémica Trump-NFL https://t.co/7r2XqgvaRN"
*/
            // 5. comment the code above, starting from after the clearData,
            //    and ending right before this comment. Then, un-comment the
            //    code below:
            /* After clearData we have two blocks of code, the first to extract
            the first tweet, the second to extract the second tweet. With
             the forEach function below every tweet is displayed.  The first
             two blocks that recovered the single tweets can now be
             commented out.
*/
                json.statuses.forEach(function (status) {
                div = document.createElement("div")
                div.className = "tweet"
                textNode = document.createTextNode(status.text)
                div.appendChild(textNode)
                document.getElementById("results").appendChild(div)
            })

        })
};
