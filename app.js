// method 1 (with smooth transition)
const allAccordian = document.querySelectorAll('.accordian')
allAccordian.forEach(accord =>{
    const icons =  accord.querySelector('.icons')
    const answers =  accord.querySelector('.answer')
    accord.addEventListener('click', ()=>{
        if (icons.classList.contains('active')) {
            icons.classList.remove('active')
            answers.style.maxHeight = null
        } else {
            icons.classList.add('active')
            answers.style.maxHeight = answers.scrollHeight + "px"
            
        }
    })
})


// method 2

// const allAccordian = document.querySelectorAll('.accordian')
// allAccordian.forEach(accord =>{
//     const icons =  accord.querySelector('.icons')
//     const answers =  accord.querySelector('.answer')
//     accord.addEventListener('click', ()=>{
//         icons.classList.toggle('active')
//         answers.classList.toggle('active')
        
//     })
// })

