const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    const textAreaHeight = item.offsetHeight;
    
    item.addEventListener('input', event => {
        let $current = event.currentTarget;

        $current.style.height = `${textAreaHeight}px`;
        $current.style.height = $current.scrollHeight + 'px';
    });
});