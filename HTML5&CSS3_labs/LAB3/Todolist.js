let AddBtn=document.getElementById("addBtn");
let arr_lists=[]
let comp_list=[]
function init()  
{
    if(localStorage.getItem("Todo")!=null)
    {
        arr_lists=JSON.parse(localStorage.getItem("Todo"));
        update_list();
    }
    if(localStorage.getItem("Completed")!=null)
    {
        comp_list=JSON.parse(localStorage.getItem("Completed"));
        update_comp_list();
    }
}
function check(e)
{
    comp_list.push(arr_lists[parseInt(e.id.slice(-1))]);
    arr_lists.splice(parseInt(e.id.slice(-1)),1);
    update_list();
    update_comp_list();
    localStorage.setItem("Todo",JSON.stringify(arr_lists));
    localStorage.setItem("Completed",JSON.stringify(comp_list));
}
function check_comp(e)  
{
    arr_lists.push(comp_list[parseInt(e.id.slice(-1))]);
    comp_list.splice(parseInt(e.id.slice(-1)),1);
    update_list();
    update_comp_list();
    localStorage.setItem("Todo",JSON.stringify(arr_lists));
    localStorage.setItem("Completed",JSON.stringify(comp_list));
}
function trash_list(e)  
{
    arr_lists.splice(parseInt(e.id.slice(-1)),1);
    update_list();
    localStorage.setItem("Todo",JSON.stringify(arr_lists));
}
function trash_comp(e) 
{
    comp_list.splice(parseInt(e.id.slice(-1)),1);
    update_comp_list();
    localStorage.setItem("Completed",JSON.stringify(comp_list));
}
function update_list()  
{
    var list=document.getElementById("u_list");
    list.innerHTML="";
    for(var i=0;i<arr_lists.length;i++)
    {
        list.innerHTML+='<li class="list" id="list'+i+'">'+arr_lists[i]+'<i id="check'+i+'"  class="fas fa-check" onclick="check(this)"></i>  <i id="trash'+i+'" class="fas fa-trash" onclick="trash_list(this)"></i></li>';
    }
}
function update_comp_list()   
{
    var list=document.getElementById("l_list");
    list.innerHTML="";
    for(var i=0;i<comp_list.length;i++)
    {
        list.innerHTML+='<li class="list" id="list'+i+'">'+comp_list[i]+'<i id="check_'+i+'"  class="fas fa-arrow-up" onclick="check_comp(this)"></i>  <i id="trash_'+i+'" class="fas fa-trash" onclick="trash_comp(this)" ></i></li>';
    }
}
function change_list(text) 
{
    var list=document.getElementById("u_list");
    list.innerHTML+='<li class="list" id="list'+arr_lists.length+'">'+text+'<i id="check'+arr_lists.length+'"  class="fas fa-check" onclick="check(this)"></i>  <i id="trash'+arr_lists.length+'" class="fas fa-trash" onclick="trash_list(this)"></i></li>';
    arr_lists.push(text);
    localStorage.setItem("Todo",JSON.stringify(arr_lists));
}
function add_to_do() 
{
    var mytask=document.getElementById("new_task");    
    if(mytask.value!="")
    {
        change_list(mytask.value);
        mytask.value="";
    }
    else
    {
        document.getElementById("para_error").innerText="Error please enter text"
    }
}
init();
AddBtn.addEventListener("click",add_to_do);