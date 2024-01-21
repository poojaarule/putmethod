let userInputE1 = document.getElementById("userInput");
let requestBodyE1 = document.getElementById("requestBody");
//let sendRequestBtnE1 = document.getElementById("sendRequestBtn");
let loadingE1 = document.getElementById("loading");
let requestStatusE1 = document.getElementById("requestStatus");
let httpResponseE1 = document.getElementById("httpResponse");


let sendRequestBtnE1 = document.getElementById("sendPutRequestBtn"); //update sendPutRequestBtn id here



//let requestBodyE1 = document.getElementById("requestBody");
//let sendPostRequestBtnE1 = document.getElementById("sendPostRequestBtn");
//let requestStatusE1 = document.getElementById("requestStatus");
//let httpResponseE1 = document.getElementById("httpResponse");
//let userInputE1 = document.getElementById("userInput");
//let loadingE1 = document.getElementById("loading");
let requestStatuse1 = document.getElementById("requestStatus");
//let loadingE1 = document.getElementById("loading");


function sendPutHTTPRequest() {
    let userId = userInputE1.value;
    let requestUrl = "https://gorest.co.in/public-api/users/" + userId

    let requestBody = requestBodyE1.value;

    let options = {
        method: "PUT", //wrote 'POST' as 'post'
        headers: {
            "Content-Type": "application/json", //wrote 'Content-Type' as 'Content Type'
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0",
        },
        body: requestBody
    };
    loadingE1.classList.remove("d-none");
    requestStatusE1.classList.remove("d-none");

    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            requestStatuse1.classList.remove("d-none");
            loadingE1.classList.add("d-none");

            let requestStatus = jsonData.code;
            let httpResponse = JSON.stringify(jsonData);
            requestStatusE1.textContent = requestStatus;
            httpResponseE1.textContent = httpResponse;

        });
}
sendRequestBtnE1.addEventListener("click", sendPutHTTPRequest);