let url = "http://localhost:3000/users"

let input_name = document.querySelector("#name")
let input_img = document.querySelector("#img")
let input_job = document.querySelector("#job")
let input_button = document.querySelector(".addbutton")
let form = document.querySelector("form")

form.addEventListener("submit", function () {
    fetch(url,{


        method: "POST",
        body: JSON.stringify({
          name: input_name.value,
          work: input_job.value,
          img: input_img.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    
    } )
})
