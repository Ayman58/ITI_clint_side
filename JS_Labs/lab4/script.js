let txtName = document.getElementById('txtName');
let nameError = document.getElementById('nameError');

let txtEmail = document.getElementById('txtEmail');
let emailError = document.getElementById('emailError');

let txtPhone = document.getElementById('txtPhone');
let phoneError = document.getElementById('phoneError');

let submit = document.getElementById('myForm');
let contact_table_body = document.getElementById('contact_table_body');

let obj;
let globalVar;
let editMode=false;
var delelement;

class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.counter=0;

  }
  submit() {
    let row = document.createElement("tr");
    contact_table_body.appendChild(row);


    let data = document.createElement("td");
    row.appendChild(data);
    data.textContent = this.name;

    let data2 = document.createElement("td");
    row.appendChild(data2);
    data2.textContent = this.email
    let data3 = document.createElement("td");
    row.appendChild(data3);
    data3.textContent = this.phone
    

    let ed=document.createElement("img");
    ed.setAttribute("class", "ed");
    ed.src="edit.png";
    row.appendChild(ed);

    let del=document.createElement("img");
    del.setAttribute("class", "del");
    del.src="del.png";
    row.appendChild(del);

    resetFields();
  }
  insert(s) {
    s.getElementsByTagName('td')[0].textContent=txtName.value;
    s.getElementsByTagName('td')[1].textContent=txtEmail.value;
    s.getElementsByTagName('td')[2].textContent=txtPhone.value;
    resetFields();
    editMode=false;
  }
  edit(el) {
    resetFields();
  
    txtName.value=el.getElementsByTagName('td')[0].textContent;
    txtEmail.value=el.getElementsByTagName('td')[1].textContent;
    txtPhone.value=el.getElementsByTagName('td')[2].textContent;
    editMode=true;

  }

}

submit.addEventListener('submit', () => {
  validate();
});


function validate() {
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  phoneError.style.display = 'none';

  if (txtName.value.length == 0) {
    nameError.style.display = 'inline';
  }
  if (txtEmail.value.length == 0) {
    emailError.style.display = 'inline';
  }
  if (txtPhone.value.length == 0) {
    phoneError.style.display = 'inline';
  }
  if (txtName.value.length != 0 && txtEmail.value.length != 0 && txtPhone.value.length != 0) {
    if(editMode){
      obj.insert(globalVar);
    }else{
      obj = new Contact(txtName.value, txtEmail.value, txtPhone.value);
      obj.submit();
    }
  } 
}

document.addEventListener('click',e=>{
  var el=e.target;
  
  
  if(el.classList.contains('del')){
    var result = confirm( "Do you want delete item?" );
    if(result){
       contact_table_body.removeChild(el.parentElement);
    }
    
  }else if(el.classList.contains('ed')){

    obj.edit(el.parentElement);
    globalVar=el.parentElement;
  }
});

function resetFields() {
  txtName.value = '';
  txtEmail.value = '';
  txtPhone.value = '';
}
