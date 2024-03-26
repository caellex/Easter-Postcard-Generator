updateStartView();
function updateStartView(){
    html = /*HTML*/`
            <div id="startpage-wrap">
            <h2 id="welcome-text">Welcome to the Easter Postcard Generator</h2>
            <button id="create-card" onclick="createPostCardView()">Create your own</button><button id="my-postcards" onclick="myPostCardView()">My Postcards</button>
            <div id="blur-background"></div>
    <div id="image-background"></div>
    
    
    </div>
    `
    app.innerHTML = html;


}

function createPostCardView(){
    postCardSide = `            
    <div id="card-preview">
    <p id="reciever-previewT">Dear, <span id="reciever-preview">${updateDyn(previewCard.reciever)}</span></p>
    <p id="content-previewT"><span id="content-preview">${updateDyn(previewCard.content)}</span></p>
    <p id="sender-previewT">From,<br><span id="sender-preview">${updateDyn(previewCard.sender)}</span></p>
    <input type="text" id="reciever-input" placeholder="Their Name" oninput="updateValues(id, this.value); document.getElementById('reciever-preview').textContent = updateDyn(previewCard.reciever)"></input>
    <input type="text" id="content-input" placeholder="Your Message" oninput="updateValues(id, this.value); document.getElementById('content-preview').textContent = updateDyn(previewCard.content)"></input>
    <input type="text" id="sender-input" placeholder="Your Name" oninput="updateValues(id, this.value); document.getElementById('sender-preview').textContent = updateDyn(previewCard.sender)"></input>
    <input type="text" id="image-input" placeholder="Postcard Image URL" oninput="updateValues(id, this.value)"></input>
    </div>
`;
    
    html = /*HTML*/` 
    <button id="return-to-mainview" onclick="updateStartView()">Return to Main</button>
    ${postCardSide}
    <div id="createbutton-wrap">
    <button id="flip-card-button" onclick="flipPostcard()">Flip Card</button>
        <button id="append-card-button" onclick="addToCollection()">Add Card To Collection</button>
    </div>
    `;
    app.innerHTML = html;
}

function myPostCardView(){
    
    html = /*HTML*/` 
    <button id="return-to-mainview" onclick="updateStartView()">Return to Main</button>
    <div id="my-postcard-contents">
    
    </div>
    `
    app.innerHTML = html;
    loadMyPostcards();
}