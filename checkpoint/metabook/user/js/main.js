const uploadbaner = document.getElementById("upload-baner")
const body = document.getElementById("body")
const closed = document.getElementById("closed")
const wellaperbanner = document.getElementById("wellaper-banner")
const closewellaperbanner = document.getElementById("close-banner")

uploadbaner.addEventListener("copy", (upload) => {
  uploadbaner.innerHTML = `Why You Copy This? 😡`
  uploadbaner.style.userSelect = "none"
  wellaperbanner.classList.toggle("wellaper-banner")
})

const h1change = document.getElementById("h1-change")
const uploading = document.getElementById("uploading")

uploadbaner.addEventListener("click", (upload) => {
  wellaperbanner.classList.add("wellaper-banner")
  h1change.classList.add("h1-change")
  h1change.style.display = "inline-block"
  uploadbaner.innerHTML = "Upload Banner"
  closewellaperbanner.classList.add("close-banner")
  closewellaperbanner.style.display = "inline-block"
})

closewellaperbanner.addEventListener("click", (upload) => {
  wellaperbanner.classList.remove("wellaper-banner")
  closewellaperbanner.classList.remove("close-banner")
  h1change.classList.remove("h1-change")
  h1change.style.display = "none"
  closewellaperbanner.style.display = "none"
})

const uploadpost = document.getElementById("upload-post")
const wellaperpost = document.getElementById("wellaper-post")

uploadpost.addEventListener("click", (post) => {
  wellaperpost.classList.toggle("wellaper-post")
})