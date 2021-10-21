const fetchBtn = document.querySelector(".fetch-btn")
const buttons = document.querySelector(".btn")
const fetchContent = document.querySelector(".fetch-content")
const fetchPost = document.querySelector(".fetch-post")
const title = document.querySelector("header")

function fetchStuff() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(res => res.json())
  .then(data => {
   // console.log(data)
    getContent.textContent = data.value
    fetchBtn.classList.toggle('active')
  })

  
}
//.then(data => console.log(data))

fetchBtn.addEventListener("click", () => {
  fetchStuff()
  getContent.textContent = 'Loading awesome fact...'
  fetchBtn.classList.toggle('active')
}) 

// https://official-joke-api.appspot.com/random_joke

// https://regres.in/api/users