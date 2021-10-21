const ajaxBtn = document.querySelector(".ajax-btn")
const input = document.querySelector("#post-input")
const ajaxContent = document.querySelector(".ajax-content")
const ajaxPost = document.querySelector(".ajax-post")
const getContent = document.querySelector(".get-content")

  const xhr = new XMLHttpRequest()

  
xhr.onload = function () {
    if(xhr.status == 200) {
    let fact = this.responseText
    getContent.textContent = JSON.parse(fact).value
    ajaxBtn.classList.toggle('active')
  }else{
      console.log("Request failed!")
    }
    
  }
  
function ajaxStuff() {
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)
    
    xhr.send()
}

ajaxBtn.addEventListener("click", () => {
    ajaxStuff()
    
    getContent.textContent = 'Loading awesome fact...'
    ajaxBtn.classList.toggle('active')
}) 

