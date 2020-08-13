import { evaluate } from "./evaluateInput";
import swal from 'sweetalert';


// Function callback for event listener
async function handleSubmit(event) {
    event.preventDefault()

     // User input
    const formValue = document.getElementById('value').value

    if(Client.evaluate(formValue)) {
        const response = await fetch("http://localhost:8081/post", {
            method: "POST",
            credentials: "same-origin",
            mode: "cors",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                input: {
                    url: formValue}
                }),
        }).then(data => data.json())
        .then(function(data) {
            console.log(data);
            document.querySelector('.score').innerHTML = "Polarity: " + polarity(data.score_tag);
            document.querySelector('.agreement').innerHTML = "Sentiments: " + data.agreement;
            document.querySelector('.subjectivity').innerHTML = "Subjectivity: " + data.subjectivity;
            document.querySelector('.irony').innerHTML = "Irony: " + data.irony;
            document.querySelector('.confidence').innerHTML = "Confidence: " + data.confidence + "%";
        }).catch((error) => {
            console.log('error', error);
        });
    } else {
        // Sweetalert for a modal pop up
        swal("ERROR", "Invalid URL");
    }
};

function polarity(score) {
    let check;
    switch(score) {
        case "P+":
        check = "Strongly Positive";
        break;
        case "P":
        check = "Positive";
        break;
        case "NEUTRAL":
        check = "Neutral";
        break;
        case "N":
        check = "Negative";
        break;
        case "N+":
        check = "Strongly Negative";
        break;
        default:
        check = "Without Sentiment";
    }
    return check;
}

export { handleSubmit,
polarity}