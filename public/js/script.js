document.getElementById('run-script-btn').addEventListener('click', function (event) {
    event.preventDefault();
    text = document.getElementById("textarea").value;
    const data = {"text": text}
    fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').innerText = "";
        if (data.includes("Positive")) {
            document.getElementById('output').style["color"] = "green";
        }
        else if (data.includes("Negative")) {
            document.getElementById('output').style["color"] = "red";
        }
        else {
            document.getElementById('output').style["color"] = "black";
        }
        document.getElementById('output').innerText = data;        
    })
    .catch(error => console.error('Error:', error));
});