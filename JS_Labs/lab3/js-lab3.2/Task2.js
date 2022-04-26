
var form = document.getElementById("firstform")

var text = document.getElementById("element_1")
var textError = document.getElementById("name-error")

var email = document.getElementById("element_2")
var emailError = document.getElementById("email-error")

var password = document.getElementById("element_3")
var passwordError = document.getElementById("password-error")

var male = document.getElementById("element_4_1")
var female = document.getElementById("element_4_2")
var radioError = document.getElementById("radio-error")

var check1 = document.getElementById("element_5_1")
var check2 = document.getElementById("element_5_2")
var check3 = document.getElementById("element_5_3")
var check4 = document.getElementById("element_5_4")
var check5 = document.getElementById("element_5_5")
var checkError = document.getElementById("checked-error")
var checkCounter=0;

var selector = document.getElementById("element_6")
var selectorError = document.getElementById("selector-error")

var cb =function(e){
  e.preventDefault();

  if (text.value.length==0) {
    textError.textContent="please insert name"
  }else {
    textError.textContent=""
  }
  if (email.value.length==0) {
    emailError.textContent="please insert email"
  }else {
    emailError.textContent=""
  }
  if (password.value.length<8) {
    passwordError.textContent="please insert min password of 8 digits"
  }else {
    passwordError.textContent=""
  }
  if (!male.checked&&!female.checked) {
    radioError.textContent="please check gender"
  }else {
    radioError.textContent=""
  }
  if (check1.checked) {
    checkCounter++;
  }
  if (check2.checked) {
    checkCounter++;
  }
  if (check3.checked) {
    checkCounter++;
  }
  if (check4.checked) {
    checkCounter++;
  }
  if (check5.checked) {
    checkCounter++;
  }
  if (checkCounter<2) {
    checkError.textContent="please select two min sports"
  }else {
    checkError.textContent=""
  }
  if (selector.value=="") {
    selectorError.textContent="select country"
  }else {
    selectorError.textContent=""
  }
}
form.addEventListener("submit",cb);
