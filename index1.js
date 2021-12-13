// console.log("hiiiii")
let r=fetch("https://meme-api.herokuapp.com/gimme");
 let s=r.then (function (response){
    return response.json()

});
s.then(function(a){
    display(a);
    console.log(a);
});




function display(a){
    let tasks=[];
    let h2=document.createElement("h2");
    h2.innerText= `Author: ${a.author}`;
    let h3=document.createElement("h3");
    h3.innerText= `Id: ${a.nsfw}`;
    let h4=document.createElement("h4");
     h4.innerText= `Link: ${a.postLink}`;
     let img = document.createElement("img");
    img.src = "https://preview.redd.it/hmhzk166p4581.jpg?width=108&crop=smart&auto=webp&s=c756aee7636e194c23b1e1afc182d7734e9a36e0";
    img.width = 200;
    img.height = 200;
    img.alt = "objimg";
    


     
    

    let div=document.getElementById('div1');
    div.appendChild(h2);
     div.appendChild(h3);
     div.appendChild(h4);
     div.appendChild(img);
    

}