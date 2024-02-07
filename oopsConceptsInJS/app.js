const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => 
{
    console.log("Getting Response.....");
    let response = await fetch(URL);
    console.log(response);
    let parsedData = await response.json();
    console.log(parsedData[1].text);
    factPara.innerText = parsedData[1].text;
};

btn.addEventListener("click", getFacts);