document.addEventListener('DOMContentLoaded', () => {
    const animatedTargets = [
        '.logo',
        '.menu',
        'h1',
        '.content',
        '.btn-saiba',
        'footer',
        '.list__redes-sociais'
    ];

    animatedTargets.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.classList.add('anim');
    });
});
