
let a=document.querySelector(".lists");
let listItem=document.querySelector(".listItem");
function addAnime(){
    let x=document.createElement("li");
    let myanime=document.getElementById("addtxt");
    
    if(myanime.value==="")
        alert("Enter a anime name");
    else{
        let val=myanime.value;
        
        let li=document.createElement("li");
        li.innerHTML=`<div>${val}</div>`;
        a.firstElementChild.append(li);
        
        
        let sp=document.createElement("span");
        li.append(sp);
        let div=document.createElement("div");
        div.innerHTML=`<img class="note" src='color-pencil.png'>`;
        li.append(div);
        myanime.value='';
        saveData();
     }
}

let list=document.querySelector(".lists");
list.firstElementChild.addEventListener("click",(e)=>{
 
  if(e.target.tagName==='LI'){
    e.target.classList.toggle("checked");
    saveData();

  }else if(e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    saveData();
  }
  else if(e.target.tagName==='IMG'){
    let inpfield= document.getElementById("inpfield");
    let btnid=document.getElementById("bttnid");
    if(btnid){
      btnid.parentElement.remove();
      saveData();
    }
    if(inpfield){
      inpfield.parentElement.remove();
      saveData();
    }
    else{
      let inp=document.createElement("div");
      
      let lis=e.target.parentElement;
      let newInputField=document.createElement("input");
      newInputField.type="text";
      newInputField.placeholder="   Share your thoughts...";
      newInputField.classList.add("innerInput")
      newInputField.id="inpfield";
      inp.append(newInputField);
      let btn=document.createElement("div");

      let newbutton=document.createElement("button");
      newbutton.innerHTML="Note";
      newbutton.id="bttnid";
      lis.append(inp);
      btn.append(newbutton);
      lis.append(btn);

      saveData();
      newbutton.addEventListener("click",(e)=>{
          let mytxt=newInputField.value;
          if(mytxt===""){
            alert("Write something to add as Note")
          }
          else{
            newbutton.parentElement.remove();
            newInputField.parentElement.remove();
          let noteEle=document.createElement("div");
          noteEle.classList.add("noteClass");
          noteEle.innerHTML=mytxt;
          let cross=document.createElement("span");
          cross.classList.add("cross");
          cross.innerHTML="";
          noteEle.append(cross)
          lis.append(noteEle);
          
          }
         
        saveData();
      })
    }
     
  }
  saveData();
})

function saveData(){
    localStorage.setItem("data",listItem.innerHTML);
}
function showData(){
    listItem.innerHTML=localStorage.getItem("data");
}
showData();


