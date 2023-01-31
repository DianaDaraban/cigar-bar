const greeting = document.querySelector('h1')

greeting.addEventListener('mouseover', () => {
  setTimeout(() => {
    greeting.innerText = 'Hello to you, too!'
  }, 2000)
})
