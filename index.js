//fix the naming
function random_function()
{
 var a=document.getElementById("input").value;
 if(a==="INDIA")
 {
 var arr=["Select State","Maharashtra","Delhi","Andhra Pradesh","Bihar"];
 }
 else if(a==="USA")
 {
 var arr=["Select State","Washington","Texas","New York"];
 }
 
 var string="";
 
 for(i=0;i<arr.length;i++)
 {
 string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
 }
 document.getElementById("output").innerHTML=string;
}


function clearErrors(){

 errors = document.getElementsByClassName('formerror');
 for(let item of errors)
 {
 item.innerHTML = "";
 }


}
function seterror(id, error){
 //sets error inside tag of id 
 element = document.getElementById(id);
 element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
 var returnval = true;
 clearErrors();

 //perform validation and if validation fails, set the value of returnval to false
 var name = document.forms['myForm']["fname"].value;
 if (name.length<5){
 seterror("name", "*Length of name is too short");
 returnval = false;
 }
//give proper information to the user
 if (name.length == 0){
 seterror("name", "*Length of name cannot be zero!");
 returnval = false;
 }

 var email = document.forms['myForm']["femail"].value;
 if (email.length>15){
 seterror("email", "*Email length is too long");
 returnval = false;
 }

 var phone = document.forms['myForm']["fphone"].value;
 if (phone.length != 10){
 seterror("phone", "*Phone number should be of 10 digits!");
 returnval = false;
 }

 var password = document.forms['myForm']["fpass"].value;
 if (password.length < 6){

 
 seterror("pass", "*Password should be atleast 6 characters long!");
 returnval = false;
 }

 var cpassword = document.forms['myForm']["fcpass"].value;
 if (cpassword != password){
 seterror("cpass", "*Password and Confirm password should match!");
 returnval = false;
 }

 return returnval;

 // document.getElementById('log').innerHTML = '';
 // var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
 // var string2 = removeSpaces(document.getElementById('txtInput').value);
 // if (string1 != string2 || string2 == ""){
 // Captcha();
 // document.getElementById('log').innerHTML += '<span style="font-size:16px; padding: 25px;">Entered Invalid Captcha</span> ';
 // return false;
 // }
}


// function Captcha(){
// var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0');
// var i;
// for (i=0;i<6;i++){
// var a = alpha[Math.floor(Math.random() * alpha.length)];
// var b = alpha[Math.floor(Math.random() * alpha.length)];
// var c = alpha[Math.floor(Math.random() * alpha.length)];
// var d = alpha[Math.floor(Math.random() * alpha.length)];
// var e = alpha[Math.floor(Math.random() * alpha.length)];
// var f = alpha[Math.floor(Math.random() * alpha.length)];
// var g = alpha[Math.floor(Math.random() * alpha.length)];
// }
// var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
// document.getElementById("mainCaptcha").value = code
// var colors = ["#B40404", "#beb1dd", "#b200ff", "#faff00", "#0000FF", "#FE2E9A", "#FF0080", "#2EFE2E", ];
// var rand = Math.floor(Math.random() * colors.length);
// $('#mainCaptcha').css("background-color", colors[rand]);
// }
// function removeSpaces(string){
// return string.split(' ').join('');
// }