// // window.onload(function(){
// //     displayinfo(data);
// // });

// let input= document.getElementById("noteInput").value;
// // console.log(input);
// if (input==="") return;
// fetch("http://localhost:3000",(req,res))
// .then(req=>req.json)
// .then(data=>displayinfo(data))
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
        li.innerHTML =note.id+", "+note.note;
        notes.appendChild(li);
    })
}