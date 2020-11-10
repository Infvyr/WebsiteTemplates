document.addEventListener("DOMContentLoaded", initSidebar, false);

function initSidebar(){
    
    // see more button
    const seeMoreBtn = document.getElementById('see-more');
    const widgetElements = document.querySelectorAll('.widget-options .widget__element--hidden');

    if (!seeMoreBtn || !widgetElements) return;

    seeMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if(seeMoreBtn.dataset.option === 'hidden'){
            widgetElements.forEach(widgetElem => {
                widgetElem.style.display = 'block';
            });

            seeMoreBtn.textContent = 'Close options';
            seeMoreBtn.dataset.option = 'visible';

        } else {
            widgetElements.forEach(widgetElem => {
                widgetElem.style.display = 'none';
            });

            seeMoreBtn.textContent = 'See more';
            seeMoreBtn.dataset.option = 'hidden';
        }
        
    });


    // toggle sidebar filter on mobile
    document.addEventListener('click', function (event) {
        const toggleFilterBtn = document.getElementById('toggle-filter');
        const sidebar = document.querySelector('.sidebar');

        // If the click happened inside the the container, bail
        if (event.target.closest('.sidebar')) return;
    
        toggleFilterBtn.classList.toggle('is-active');
                sidebar.classList.toggle('active');
                document.querySelector('section.container').classList.toggle('active');
    
    }, false);


    // sidebar widget toggle
    const widgets = document.querySelectorAll('.form-filter .widget');

    if (!widgets) return;

    widgets.forEach(widget => {
        widget.addEventListener('click', e => {
            if(e.target.classList.contains('widget__title')){
                e.target.classList.toggle('widget__title--active');
                e.target.nextElementSibling.classList.toggle('widget__body--closed');
            }
        });
    });


    // sidebar widget location
    const locationCheckboxAny = document.getElementById('location-any');
    const locationTopCheckboxes = document.querySelectorAll('.location__checkbox:not(#location-any)');

    if (!locationCheckboxAny || !locationTopCheckboxes) return;

    locationCheckboxAny.addEventListener('change', () => {
        if(locationCheckboxAny.checked){
            locationTopCheckboxes.forEach(checkboxItem => {
                checkboxItem.checked = false;
            });
        }
    });

    locationTopCheckboxes.forEach(checkboxItem => {
        checkboxItem.addEventListener('change', () => {
            if(locationCheckboxAny.checked){
                locationCheckboxAny.checked = false;
            }
        });
    });
}