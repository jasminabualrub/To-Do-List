
alert('Welcome Jasmin here your To-Do-List')
let addtaskform=document.querySelector('.tasks');
//console.log(addtaskform)
addtaskform.onsubmit=function(e){
    let tasklist='';
    e.preventDefault();
    let input=document.querySelector('.task').value;
    tasklist+=`<li><input type='checkbox' class='check'>
    <span class='span'>${input}</span></li>
    `;
    //console.log(tasklist)
    document.querySelector('.list').innerHTML+=tasklist;
 
    check();     
} 
function check(){
    let check= document.querySelectorAll('.check');//عشان ترجع اريه من التشيك ليست
    //console.log(check);
    let span=document.querySelectorAll('.span');//عشان ترجع اريه من اسبان مش بس اول واحد 
    //console.log(span);
for(let i=0;i<check.length;i++){
    check[i].onclick=function(){
        if(check[i].checked){
            span[i].style.textDecoration='line-through';
        
           }
           else{
            span[i].style.textDecoration='none'
           }
    }
}
    
}
