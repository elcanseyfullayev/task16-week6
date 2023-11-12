let url = "http://localhost:3000/users"
fetch (url)
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(element => {
        createCard(element.id,element.img,element.name,element.work)
        function createCard(id,img,name,work) {
            const con = document.querySelector(".container")
        
            const cardid = document.createElement("div")
            const cardimg = document.createElement("img")
            const cardname = document.createElement("div")
            const cardwork = document.createElement("div")
            const cardupdate = document.createElement("button")
            const carddelete = document.createElement("button")

            const table = document.createElement("div")
            const tableid = document.createElement("div")
            const tablephoto = document.createElement("div")
            const tablename = document.createElement("div")
            const tablejob = document.createElement("div")
            const tableupdate = document.createElement("div")
            const tabledelete = document.createElement("div")
        
            cardimg.setAttribute("src",`${element.img}`)
            
            cardid.textContent = id
            cardimg.textContent = img
            cardname.textContent = name 
            cardwork.textContent = work 
            cardupdate.innerHTML = `<a href ='update.html#${element.id}'><button>Update</button></a>`
            carddelete.textContent = "Delete"

            table.append(tableid,tablephoto,tablename,tablejob,tableupdate,tabledelete)
        
            tableid.append(cardid)
            tablephoto.append(cardimg)
            tablename.append(cardname)
            tablejob.append(cardwork)
            tableupdate.append(cardupdate)
            tabledelete.append(carddelete)

            table.classList.add("table")
            tableid.classList.add("id")
            tablephoto.classList.add("photo")
            tablename.classList.add("name")
            tablejob.classList.add("job")
            tableupdate.classList.add("update")
            tabledelete.classList.add("delete")

            con.appendChild(table)

            carddelete.addEventListener("click", function () {
                fetch(`${url}/${element.id}`,{method:"Delete"})
                .then(res => res.json())
            })
        }
    });
})
.catch(err => console.log("error",err.message))