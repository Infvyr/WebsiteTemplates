document.addEventListener("DOMContentLoaded", initSidebar, false);

function initSidebar(){
    const seeMoreButton = document.getElementById('see-more');

    seeMoreButton.addEventListener('click', () => {
       const widgetElement = Array.from(document.querySelectorAll('.widget-options .hidden'));

       if (!widgetElement) return;

       for (const elem of widgetElement) {
           if (elem.classList.contains('hidden')) {
               elem.classList.remove('hidden');
            }

            if(!elem.classList.contains('hidden')){
                seeMoreButton.remove();
            }
       }
    });
}