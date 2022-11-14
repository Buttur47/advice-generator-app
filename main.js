async function Click() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json();
    return data;
}

Click().then(response => {
    document.querySelector(".advice_number_container").innerHTML = "<span class='advice_number_text'>A D V I C E #" + response.slip.id + "</span>";
    document.querySelector(".advice_container").innerHTML = "<span class='advice_text'>" + response.slip.advice + "</span>";
    console.log(response)
})

    .catch(error => console.log(error));


