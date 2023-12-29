
const myGenre = document.getElementById("idGenre");
const myTime = document.getElementById("idTime");
const myTitle = document.getElementById("titleText");
const myPremise = document.getElementById("premise");
const myButton = document.getElementById("myButton");
const listContainer = document.getElementById("ideas");
// const container = document.getElementById("containerId");


function attachEventListeners(li, title) {
    let deleteButton = li.querySelector(".deleteButton");
    deleteButton.addEventListener("click", function () {
        listContainer.removeChild(li);
        saveData();
    });

    let highlightButton = li.querySelector(".highlightButton");
    highlightButton.addEventListener("click", function () {
        title.classList.toggle("highlighted");
        saveData();
    });
}



myButton.onclick = addFilm;

function addFilm(){
    if(myPremise.value === ""){
        alert("You must write a premise");
    }
    else{
        
        //Title
        let li = document.createElement("li");
        let title = document.createElement("h2");
        title.innerHTML = `"` + myTitle.value + `"`;
        title.setAttribute("class", "title");

        //Div
        let bracket = document.createElement("div");
        bracket.setAttribute("class", "innerDiv");
        
        //items

        //item1
        let item1 = document.createElement("div");
        item1.classList.add("innerItem", "innerItem-1");
        

        let labelGenre = document.createElement("label");
        labelGenre.innerHTML = "Genre:";
        labelGenre.setAttribute("id", "theLabel");

    
        let infoGenre = document.createElement("label");
        infoGenre.innerText = myGenre.options[myGenre.selectedIndex].text;
        infoGenre.classList.add("innerLabel", "innerLabel1");

        item1.appendChild(labelGenre);
        item1.appendChild(infoGenre);     
        bracket.appendChild(item1);

        //item2
        let item2 = document.createElement("div");
        item2.classList.add("innerItem", "innerItem-2");
        
        let labelTime = document.createElement("label");
        labelTime.innerHTML = "Time:";
        labelTime.setAttribute("id", "theLabel");

        let infoTime = document.createElement("label");
        infoTime.innerText = myTime.options[myTime.selectedIndex].text;
        infoTime.classList.add("innerLabel", "innerLabel2");
       
        item2.appendChild(labelTime);
        item2.appendChild(infoTime);
        bracket.appendChild(item2);

        //item3
        let item3 = document.createElement("div");
        item3.classList.add("innerItem", "innerItem-3");
        
        let labelPremise = document.createElement("label");
        labelPremise.innerHTML = "Premise:";
        labelPremise.setAttribute("id", "theLabel");

        let premiseText = document.createElement("label");
        premiseText.innerHTML = myPremise.value;
        premiseText.classList.add("innerLabel", "innerLabel3");

        item3.appendChild(labelPremise);
        item3.appendChild(premiseText);
        bracket.appendChild(item3);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "delete";
        deleteButton.setAttribute("class", "deleteButton");
        // deleteButton.addEventListener("click", function () {
        //     listContainer.removeChild(li);
        //     saveData();
        // });

        let highlightButton = document.createElement("button");
        highlightButton.innerText = "highlight";
        highlightButton.setAttribute("class", "highlightButton");
        // highlightButton.addEventListener("click", function () {
        //     title.classList.toggle("highlighted");
        //     saveData();
        // });
        

        li.appendChild(title);
        li.appendChild(bracket);
        li.appendChild(highlightButton);
        li.appendChild(deleteButton);
        listContainer.appendChild(li);

        attachEventListeners(li, title);

        saveData();
        
    }
    myGenre.value = "";
    myTime.value = "";
    myTitle.value = "";
    myPremise.value = "";
    
    
}

function saveData(){
    localStorage.setItem("listContainer", listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("listContainer");

    let loadedIdeas = listContainer.querySelectorAll("li");
    loadedIdeas.forEach(li => {
        let title = li.querySelector("h2");
        attachEventListeners(li, title);
    });
} 
showList();