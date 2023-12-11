var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');

var planButtons = document.querySelectorAll('.plan button');
var noButton = document.querySelector('.modal__action--negative');

var mobileModal = document.querySelector('.mobile-nav');
var btnMenu = document.querySelector('.toggle-button');

function closeModal() {
    

    modal?.classList?.remove('open');
        backdrop.classList.remove('open');
        mobileModal.classList.remove('open');

    setTimeout(() => {
        backdrop.style.display = 'none';
    modal.style.display = 'none';
    mobileModal.style.display = 'none';
    }, 210)
    
}

planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        
        setTimeout(() => {
            modal.classList.add('open');
            backdrop.classList.add('open');
        }, 10)
    })
});

noButton?.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

btnMenu.addEventListener('click', () => { 
    backdrop.style.display = 'block';
    mobileModal.style.display = 'block';

    setTimeout(() => {
        mobileModal.classList.add('open'); 
        backdrop.classList.add('open');
    }, 10)

})
