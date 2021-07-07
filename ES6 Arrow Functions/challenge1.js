var c=0;
const buttonClick = () =>{
    console.log("Button is clicked...!");
    document.getElementById("counter").innerHTML="Button clicked "+ ++c+" times";
}