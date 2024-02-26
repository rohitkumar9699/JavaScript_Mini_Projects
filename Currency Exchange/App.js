const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";

let select = document.querySelectorAll(".box select")
// console.log(select);
select.forEach((bx)=>
{
    // console.log(bx);
    for(code in countryList)
    {
        let newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;

        if(bx.name === "from" && code === "USD")
            newoption.selected = "selected";
        else if(bx.name === "to" && code === "INR")
        newoption.selected = "selected";
        bx.append(newoption); 

    }
    bx.addEventListener("change",(evt)=>{
        UpdateFlag(evt.target);
    })
})

const UpdateFlag =  (element)=>
{   
    // console.log(element);
    let val = element.value;
    let code = countryList[val];
    // console.log(code);
    let FlagApi = `https://flagsapi.com/${code}/flat/64.png`;
    console.log(FlagApi);
    let fetch_flag  = element.parentElement.querySelector("img");
    fetch_flag.src = FlagApi;
    
}

let btn = document.querySelector(".exc");
let amoutn  = document.querySelector(".amount input")

btn.addEventListener("click", async(evt)=>{

    evt.preventDefault();
    
    let amtval = amoutn.value;
    if(amtval=="" || amtval<1)
    {
        amtval=1;
        amoutn.value=amtval
    }

    // console.log(select[0].value +"  "+ select[1].value);
    let fromCurr = select[0].value
    let toCurr = select[1].value
    console.log(fromCurr+" "+ toCurr);

    const curl = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

    let c_url  = `${curl}/${fromCurr.toLowerCase()}/${toCurr.toLowerCase()}.json`;
    // console.log(c_url);
    let responce  = await fetch(c_url);
    // console.log(responce);
    let data = await responce.json();
    // console.log(data);
    let rate = data[toCurr.toLowerCase()];
    console.log(rate);

    let massge = document.querySelector(".message p");
    let mess= `${amoutn.value} ${fromCurr} to ${(amoutn.value)*rate} ${toCurr}`;
    massge.innerText = mess;

});

// for(code in countryList)
// {
//     console.log(code +"-->"+countryList[code]);
// }