export default function initModals(){
    openModals();
    closeModals();
    initCloseModals();
}

// open modal
function openModals(){
    const modalBtn = document.querySelectorAll('[data-modal]');
    const body = document.body;

    modalBtn.forEach(item => {
        item.addEventListener('click', event => {
            let $target = event.currentTarget;
            let modalId = $target.getAttribute('data-modal');
            let modal = document.getElementById(modalId);
            let modalContent = modal.querySelector('.modal__content');

            // do not close modal when click over it
            modalContent.addEventListener('click', event => event.stopPropagation());

            modal.classList.add('show');
            body.classList.add('no-scroll');

            setTimeout(function () {
                modalContent.style.transform = 'none';
                modalContent.style.opacity = +'1';
            }, 1);
        });
    });
}

// close modal
function closeModals(){
    const modalClose = document.querySelectorAll('.modal__close');

    modalClose.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget.closest('.modal');
            closeModal(currentModal);
        });
    });
}

function initCloseModals(){
    const modal = document.querySelectorAll('.modal');

    modal.forEach(item => {
        item.addEventListener('click', event => {
            let currentModal = event.currentTarget;
            closeModal(currentModal);
        });
    });
}

function closeModal(currentModal){
    currentModal.querySelector('.modal__content').removeAttribute('style');
    const body = document.body;

    setTimeout(() => {
        if (currentModal.classList.contains('show')) {
            currentModal.classList.remove('show');
        }

        if (body.classList.contains('no-scroll')) {
            body.classList.remove('no-scroll');
        }
    }, 300);
}

initModals();