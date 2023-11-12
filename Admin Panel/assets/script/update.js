let url = "http://localhost:3000/users"

let input_name = document.querySelector("#name")
let input_img = document.querySelector("#img")
let input_job = document.querySelector("#job")
let input_button = document.querySelector(".addbutton")
let form = document.querySelector("form")

hash = window.location.hash.substring(1)

form.addEventListener("submit",function (){

    fetch(`${url}/${hash}`,{


        method: "PUT",
        body: JSON.stringify({
            name: input_name.value,
            work: input_job.value,
            img: input_img.value,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
        }

    }, )

})