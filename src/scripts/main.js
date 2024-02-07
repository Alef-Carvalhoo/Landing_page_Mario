document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const botaoAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${botaoAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('characters__description--is-active');
            removeBotao();
            botao.target.classList.add('characters__tabs__button--is-active');
        })
    }
});

function removeBotao () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('characters__tabs__button--is-active');
    }
}

function escondeTodasAbas () {
    const tabContainer = document.querySelectorAll('[data-tab-id]');

    for(let i = 0; i < tabContainer.length; i++) {
        tabContainer[i].classList.remove('characters__description--is-active');
    } 
}