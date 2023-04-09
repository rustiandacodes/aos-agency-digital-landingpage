const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('.show')
    } else {
      entry.target.classList.remove('.show')
    }
  })
})
const hiddenElement = document.querySelectorAll('.hidden')
hiddenElement.forEach((el) => observer.observe(el))
