let url = "http://localhost:3000/users"
fetch (url)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(element => {
        createCard(element.img,element.name,element.work)
        function createCard(img,name,work) {
            const con = document.querySelector(".container")
        
            const card = document.createElement("div")
            const cardimg = document.createElement("img")
            const cardname = document.createElement("p")
            const cardwork = document.createElement("span")
        
            cardimg.setAttribute("src",`${element.img}`)
            
            cardimg.textContent = img
            cardname.textContent = name 
            cardwork.textContent = work 
        
            card.append(cardimg, cardname , cardwork)
            con.appendChild(card)
        }
    });
})
.catch(err => console.log("error",err.message))

