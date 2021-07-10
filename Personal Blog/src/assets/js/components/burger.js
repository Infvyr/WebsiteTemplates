const burger = document.getElementById('sidebarToggle');
const page= document.getElementById('page');
const body = document.body;

burger.addEventListener('click', event => {
    if (!body.classList.contains('is-sidebar-on')) {
        showSidebar();
    } else {
        closeSidebar();
    }
});

function showSidebar(){
    const mask = document.createElement('div');
    mask.classList.add('page__mask');
    mask.addEventListener('click', closeSidebar);
    page.appendChild(mask);

    body.classList.add('is-sidebar-on');
}

function closeSidebar(){
    body.classList.remove('is-sidebar-on');
    document.querySelector('.page__mask').remove();
}