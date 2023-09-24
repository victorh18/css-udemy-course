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
}

planButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
});


noButton?.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
btnMenu.addEventListener('click', () => { mobileModal.classList.add('open'); backdrop.classList.add('open')})
