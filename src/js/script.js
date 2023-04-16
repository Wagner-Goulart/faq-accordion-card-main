const question = document.querySelectorAll('li')

question.forEach((pergunta)=>{
    pergunta.addEventListener('click', ()=>{
        const itemAtivo = document.querySelector('.ativo')
        if(itemAtivo) {
            itemAtivo.classList.remove('ativo')
        }
            pergunta.classList.add('ativo')        
    })
})