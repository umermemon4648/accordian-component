const allAccordian = document.querySelectorAll('.accordian')
allAccordian.forEach(accord =>{
    const icons =  accord.querySelector('.icons')
    const answers =  accord.querySelector('.answer')
    accord.addEventListener('click', ()=>{
        icons.classList.toggle('active')
        answers.classList.toggle('active')
    })
})


