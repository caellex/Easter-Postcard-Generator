function updateValues(id, value){
    console.log(id)
    console.log(value)

    if(id === 'reciever-input'){
        previewCard.reciever = value;
    }
    if(id === 'content-input'){
        previewCard.content = value;
    }
    if(id === 'image-input'){
        previewCard.image = value;
    }
    if(id === 'sender-input'){
        previewCard.sender = value;
    }
    document.getElementById(id).value = value;

}

function updateDyn(maybe){
 return maybe;
    
}

function addToCollection(){
    if(previewCard.content && previewCard.sender && previewCard.reciever && previewCard.image != ""){
        myPostCards.push({
        reciever: previewCard.reciever,
        content: previewCard.content,
        sender: previewCard.sender,
        image: previewCard.image
        })
    } else {
        window.alert("Please fill out every field to create a valid postcard.");
        return
    }



    document.getElementById('reciever-input').value = "";
    document.getElementById('content-input').value = "";
    document.getElementById('sender-input').value = "";
    document.getElementById('image-input').value = "";
    previewCard.reciever = '';
    previewCard.content = '';
    previewCard.sender = '';
    previewCard.image = '';
    document.getElementById('reciever-preview').textContent = updateDyn(previewCard.reciever);
    document.getElementById('content-preview').textContent = updateDyn(previewCard.content);
    document.getElementById('sender-preview').textContent = updateDyn(previewCard.sender);
    document.getElementById('image-preview').textContent = updateDyn(previewCard.image);
    loadMyPostcards();
}



function flipPostcard(){
    
    postCardFront = !postCardFront
    let postcardContainer = document.getElementById('card-preview');

    if(!postCardFront){
    postcardContainer.style.backgroundImage = "url('/Assets/createView/card.png')";
    postcardContainer.innerHTML = /*HTML*/`
        <p id="reciever-previewT">Dear, <span id="reciever-preview">${updateDyn(previewCard.reciever)}</span></p>
        <p id="content-previewT"><span id="content-preview">${updateDyn(previewCard.content)}</span></p>
        <p id="sender-previewT">From,<br><span id="sender-preview">${updateDyn(previewCard.sender)}</span></p>
        <input type="text" id="reciever-input" placeholder="Their Name" oninput="updateValues(id, this.value); document.getElementById('reciever-preview').textContent = updateDyn(previewCard.reciever)"></input>
        <input type="text" id="content-input" placeholder="Your Message" oninput="updateValues(id, this.value); document.getElementById('content-preview').textContent = updateDyn(previewCard.content)"></input>
        <input type="text" id="sender-input" placeholder="Your Name" oninput="updateValues(id, this.value); document.getElementById('sender-preview').textContent = updateDyn(previewCard.sender)"></input>
        <input type="text" id="image-input" placeholder="Postcard Image URL" oninput="updateValues(id, this.value)"></input>
     `
    } else {
        postcardContainer.style.backgroundImage =`url(${previewCard.image})`;
        postcardContainer.innerHTML = /*HTML*/`
        
        `
    }
}

function randomIndex(){
i = Math.floor(Math.random() * myPostCards.length)
return i;

}

function loadMyPostcards(){
let container = document.getElementById('my-postcard-contents')
container.innerHTML = "";

for(let index = 0; index < myPostCards.length; index++){
    let myDiv = document.createElement('div')
    myDiv.id = 'my-card-preview';
    myDiv.setAttribute("onclick", `openPostcard(${index})`)
    myDiv.classList.add('my-card-preview')
    myDiv.style.backgroundImage = `url(${myPostCards[index].image})`;
    container.appendChild(myDiv);
}
    

}

function openPostcard(index){
console.log(myPostCards[index])

}