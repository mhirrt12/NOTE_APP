window.onload = function(){
    fetch("http://localhost:3000/notes")
    .then(res => res.json())
    .then(data => displayinfo(data));
};
function addNote(){
    let input= document.getElementById("noteInput").value;
    if (input==="") return;
    fetch("http://localhost:3000/notes",{
        method:"POST",
    headers: {
    "Content-Type": "application/json"
},
    body:JSON.stringify({note:input})})
    .then(res=>res.json())
    .then(data=>{
        displayinfo(data);});
document.getElementById("noteInput").value = "";
}

function displayinfo(data){
    let notes=document.getElementById("notelist");
    
    notes.innerHTML="";
    data.forEach(function(note){
        let li= document.createElement("li");
        li.innerHTML =note.note;
        let btn=document.createElement("button");
        btn.innerHTML="Delete";
        let btn2=document.createElement("button");
         btn2.innerHTML="Edit";

         btn.onclick=function(e){
         e.stopPropagation();
         fetch("http://localhost:3000/notes/"+note.id,{
            method:"DELETE",
         })
         .then(res=>res.json())
         .then(newData=>displayinfo(newData));
       }
       btn2.onclick=function(){
        let newText= prompt("Edit Your Note",note.note);
        if(newText===null || newText==="") return;
        fetch("http://localhost:3000/notes/"+note.id,{
            method:"PUT",
            headers: {
    "Content-Type": "application/json"
},
body: JSON.stringify({ note: newText })
        })
        .then(res=>res.json())
        .then(updated=>displayinfo(updated));
       }
        li.appendChild(btn);
        li.appendChild(btn2);
        notes.appendChild(li);
     
    });
    
}