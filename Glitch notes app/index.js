console.log("My Note build");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e){
    let addTxt =document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
    }
    notesArr.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTxt.value ="";
    console.log(notesArr);
});

function display(){
    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesArr = [];
    }
    else
    {
        notesArr = JSON.parse(notes);
    }
    let allNotes ="";
    notesArr.forEach(function(element, index){ 
        allNotes = '
       <div class="notesSection">
        <div class="Card">
            <h5>Title ${index+1}</h5>
                <hr>
                <p>${element}</p>
        </div>
    </div>'    
    });
    let
}