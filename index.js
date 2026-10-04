
const btn = document.getElementById("genPass")
const newPass = document.getElementById("newPass")
const slider = document.getElementById("range")
const rangeVal = document.getElementById("rangeVal")

const upperCase  = document.getElementById("caplet");
const lowerCase  = document.getElementById("smalet");
const number  = document.getElementById("number");
const symbol  = document.getElementById("symbol");
const copy = document.getElementById('copy');
rangeVal.innerText = slider.value

slider.addEventListener('input', ()=>
{
    rangeVal.innerText = slider.value
})

btn.addEventListener('click', ()=>
{

    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let smallLetter = 'abcdefghijklmnopqrstuvwxyz';
    let numberStr = "0123456789";
    let symbolStr = "^`~@*%_#(~$!@^&)";
    let finalStr = '';
    if(upperCase.checked)
    {
        finalStr += capitalLetter;
    }
    if(lowerCase.checked)
    {
        finalStr += smallLetter
    }
    if(number.checked)
    {
        finalStr += numberStr
    }
    if(symbol.checked)
    {
        finalStr += symbolStr
    }
    if(finalStr==='')
    {
        alert("Please select atleast one option");
        return;
    }

    let latestPass = '';

    for ( let i=0; i<slider.value; i++)
    {
        let randNum = Math.floor(Math.random() * finalStr.length);
        latestPass += finalStr[ randNum ];

    }
    newPass.innerText = `${latestPass}`
    

})