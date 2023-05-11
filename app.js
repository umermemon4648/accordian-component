const allAccordian = document.querySelectorAll('.accordian')
allAccordian.forEach((accord)=>{
    const icons =  document.querySelector('.icons')
    const answers =  document.querySelector('.answer')
    accord.addEventListener('click', ()=>{
        icons.classList.toggle('active')
        answers.classList.toggle('active')
    })
    
})