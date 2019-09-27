// Created September 26, 2019 by Sebastian Delmas

// Hides the form. The form should only be shown if the user wants
// to add an artist
document.getElementById("FormContainer").style.display="none";

// Used to give each UL a unique ID. Passed to the remove method to ensure the correct
// artist is removed from the list.
var counterID = 0;

// gets the input value from certian elements
function getInputValue(id) 
{
    return document.getElementById(id).value;
}


// Testing
function benjiBarking(bark)
{
    console.log("Benji is barking! Javascript file is connected! From " + bark);
}

benjiBarking("Main JS file");

// Finished Testing

// Show the form when the button is clicked
document.getElementById("addArtistBtn").addEventListener("click", addArtist);

function addArtist()
{
    benjiBarking("addArtist Function!");
    if(document.getElementById("FormContainer").style.display === "none")
    {
        document.getElementById("FormContainer").style.display="block";
    } else
    {
        document.getElementById("FormContainer").style.display="none";
    }
}


// Submit form
document.addEventListener('submit', e => {

    // store reference to form to make later code easier to read
    const form = e.target;

    // prevent the default form submit
    e.preventDefault();

    var ulID = counterID++;
    var artistFirstName = getInputValue('artistNameForm');
    var artistAbout = getInputValue('aboutArtistForm');
    var artistImg = getInputValue('imageURLForm');

    let nodeUL = document.createElement("UL");
    nodeUL.setAttribute("id", ulID);
    let node = document.createElement("LI");
    node.setAttribute("id", "nodeID");
    let span = document.createElement("span");
    let pName = document.createElement("p");
    let pAbout = document.createElement("p");
    let imgURL = document.createElement("img");
    let deleteBtn = document.createElement("button");
    var t = document.createTextNode("Delete");
    deleteBtn.appendChild(t);
    deleteBtn.style.backgroundColor = "Red";
    deleteBtn.style.color = "white";

    deleteBtn.addEventListener("click", function(){
        deleteArtist(ulID);
    });

    imgURL.src = artistImg;

    pName.innerHTML = artistFirstName;
    pAbout.innerHTML = artistAbout;
    //let textnode = document.createTextNode(artistFirstName);


    span.appendChild(pName);
    span.appendChild(pAbout);
    node.appendChild(deleteBtn);
    node.appendChild(imgURL);
    node.appendChild(span);
    nodeUL.appendChild(node);
    document.getElementById("listOfArtists").appendChild(nodeUL);
    document.getElementById("FormContainer").style.display="none";
    document.getElementById("artistForm").reset();
    console.log("Form should be hidden");
});

// Deletes artist from the list.
function deleteArtist(ulID)
{
    console.log("Lewis is barking from the delete artist fucntion");
    document.getElementById(ulID).remove();
    
}