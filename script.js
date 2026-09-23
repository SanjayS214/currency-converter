const apiKey = "YOUR_API_KEY";
const base_url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const toInput = document.getElementById("input");
const msg = document.querySelector(".secondMsg");

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let atmVal = amount.value;
    if (atmVal === "" || atmVal < 1) {
        atmVal = 1;
        amount.value = 1;
    }

    const URL = `${base_url}${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.conversion_rates[toCurr.value];
    let finalAmount = (atmVal * rate).toFixed(2);
    msg.innerText = (`${atmVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`)
    toInput.value = (`${finalAmount}`);
});
