document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.3335 8H12.6668" stroke="white" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M8 3.3335V12.6668" stroke="white" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        const minusIcon = `
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.0139 8.01367L14.6136 14.6133" stroke="white" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M14.6135 8.01367L8.01385 14.6133" stroke="white" stroke-opacity="0.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});