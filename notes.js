const updateLs = () => {
    const textdata = document.querySelectorAll('.txt-note');
    const notes = [];
    console.log('1');
    textdata.forEach((note) => {
        if (note.value != '') {
            console.log(note.value)
            notes.push(note.value);
        }
    })
    console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
}
function alert_1()
{
    var c=document.getElementById('text3').value;
    if (c == '') {
        alert("You alert nothing !!!!!!   \
        pls add something");
    }
    else {
        alert(c);
    }

}

function check_and_add_note() {
    var a = document.getElementById('text1').value;
    if (a == '') {
        alert("Note is Empty!!!!");
    }
    else {
        addNewNote(a);
        var b = document.getElementById('text2').value;
        document.getElementById("notehead").innerHTML= b;
        updateLs();
    }
}

const addNewNote = (text) => {
    document.getElementById("text1").value = "";
    //document.getElementById("text2").value = "";
    document.getElementById('myModal').style.display = "none";
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `
    <div class="operation">
        <p id="notehead"></p>
        <button class="save"><i class="fa-solid fa-check" id="save-txt"></i></button>
        <button class="edit"><i class="fas fa-edit" id="edit-txt"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="txt-note ${text ? "hidden" : ""}"></textarea> `;
    note.insertAdjacentHTML('afterbegin', htmlData);
    const editbtn = note.querySelector('.edit');
    const delbtn = note.querySelector('.delete');
    const savebtn = note.querySelector('.save');
    const mainD = note.querySelector('.main');
    const textArea = note.querySelector('textarea');
    delbtn.addEventListener('click', () => {
        console.log(note.value)
        note.remove();
        updateLs();
    })
    textArea.value = text;
    mainD.innerHTML = text;
    editbtn.addEventListener('click', () => {
        document.getElementById('edit-txt').style.display = "none";
        document.getElementById('save-txt').style.display = "block";
        mainD.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        updateLs();
    })
    savebtn.addEventListener('click', () => {       
        document.getElementById('save-txt').style.display = "none";
        document.getElementById('edit-txt').style.display = "block";
        mainD.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        updateLs();
    })
    textArea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainD.innerHTML = value;
    })
    document.body.appendChild(note);
}

const notes = JSON.parse(localStorage.getItem('notes'));
console.log(notes)
if (notes) { notes.forEach((note) => addNewNote(note)) };
var modal = document.getElementById("myModal");
console.log(modal)
// Get the button that opens the modal
var btn = document.getElementById("add");
console.log(btn)
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var alert_modal = document.getElementById("myModal_1");
// Get the button that opens the modal
var alert_btn = document.getElementById("alert");
// Get the <span> element that closes the modal
var alert_span = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
alert_btn.onclick = function () {
    alert_modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
alert_span.onclick = function () {
    alert_modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == alert_modal) {
        alert_modal.style.display = "none";
    }
}
