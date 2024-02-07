let btn1 = document.querySelector("#btn1");
let flag = true;
let body = document.querySelector("body");
btn1.onclick = () =>
{
    if(flag === true)
    {
        body.classList.add("dark");
        body.classList.remove("light");
        flag = false;
    }
    else
    {
        body.classList.add("light");
        body.classList.remove("dark");
        flag = true;
    } 
}