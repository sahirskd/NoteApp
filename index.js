showNotes();
console.log('This website is made by Sahir Khan')

// event listener is added for adding note
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function (e) {

    let addtext = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);

    };

    notesObj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtext.value = "";
    // console.log(notesObj);
    showNotes();
});

// function for showing note as it is added
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    };

    let html = "";
    notesObj.forEach(function (elements, index) {
        html += `<div class="card">
        <div class="card-body">
          <h4 class="card-title">Notes ${index + 1}</h4>
          <p class="card-text">${elements}</p>
          <button id="${index}" onclick="deleteNotes(this.id)" class="btn-small paper-btn btn-danger-outline">Delete Note</button>
        </div>
      </div>`;
    });

    



    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `<input class="alert-state" id="alert-2" type="checkbox">
        <div class="alert alert-secondary dismissible">
        Nothing to show! Use "Add Note" section above to add notes.
          <label class="btn-close" for="alert-2">X</label>
        </div>`;  
    }
};


// function for deleting note
function deleteNotes(index) {
    // console.log('hi im deleteing', index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
};

// function for searching a note
        let search = document.getElementById('searchtxt')
        search.addEventListener("input", function () {
        let inputValue = search.value.toLowerCase();
        console.log('something is searched', inputValue);
        let noteCard = document.getElementsByClassName('card');
        Array.from(noteCard).forEach(function (elements) {
        let cardtxt = elements.getElementsByTagName('p')[0].innerText;
        if (cardtxt.includes(inputValue)) {
            elements.style.display = "block"
        } else {
            elements.style.display = "none"

        };
    });

    
});




if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/sw.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
// import 'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate';

// const el = document.createElement('pwa-update');
// document.body.appendChild(el);


// Some features will be added soon
// 1. like adding custom titles
// 2. mark important 