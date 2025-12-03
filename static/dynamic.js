function updateHeight() {
    const sections = ["stars", "photos", "processing"];
    sections.forEach(name => { document.getElementById(name).style.height = `${(document.documentElement.clientHeight-100)}px`;  });
}

function displayDateTime() {
    const currentDateElement = document.getElementById("currentDate");

    if(currentDateElement) {
        const currentDate = new Date().toLocaleString();

        currentDateElement.innerHTML = currentDate;
    }
}

function calculateInterval(seconds) {
    return seconds * 1000; // convert to milliseconds
}

displayDateTime();
updateHeight();

setInterval(displayDateTime, calculateInterval(1));