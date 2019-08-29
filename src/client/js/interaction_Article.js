console.log("I exist still, I am the  Article");

function handleSubmitArticle(event) {
    event.preventDefault()
    var url = document.querySelectorAll('input[name=test_url]')

    let varUrl = JSON.parse(JSON.stringify(url[0].value))
    if (Client.verifyUrl(varUrl)) {
        console.log("BUILDING REQUEST");
        //console.log(JSON.stringify(url[0].value));
        fetch('http://localhost:3000/article', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({url: url[0].value})
        })
            .then(res => res.json())
            .then(function (res) {
                document.querySelector('section.url-results #polarity').innerHTML = res.polarity
                document.querySelector('section.url-results #subjectivity').innerHTML = res.subjectivity
                document.querySelector('section.url-results #polarity_confidence').innerHTML = res.polarity_confidence
                document.querySelector('section.url-results #subjectivity_confidence').innerHTML = res.subjectivity_confidence
                document.querySelector('section.url-results #excerpt').innerHTML = res.text
            })
    } else {
        var url_check = document.querySelector('section.url_check');
        var wrong = document.querySelector('section.url_check #wrong');
        wrong.innerHTML = "The URL you entered:\"" + JSON.stringify(url[0].value) + "\" is not correct. Please check your URL"
        url_check.style.display = "block";

    }
}
export {handleSubmitArticle}