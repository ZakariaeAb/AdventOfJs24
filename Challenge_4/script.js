document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const divider = document.querySelector('.divider');
    const bottomDivider = document.querySelector('.bottom-divider');
    const topPanel = document.querySelector('.panel-top');
    const leftPanel = document.querySelector('.panel-bottom-left');
    let isDragging = false;
    let currentDivider = null;

    divider.addEventListener('mousedown', function () {
        isDragging = true;
        currentDivider = 'horizontal';
    });

    bottomDivider.addEventListener('mousedown', function () {
        isDragging = true;
        currentDivider = 'vertical';
    })

    document.addEventListener('mouseup', function () {
        isDragging = false;
        currentDivider = null;
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;

        //Dimensions du container
        const containerRect = container.getBoundingClientRect();

        if (currentDivider === 'horizontal') {
            //Position verticale de la souris par rapport au haut de la fenetre
            const mouseY = e.clientY;

            // Calculer le pourcentage de la hauteur
            const topHeight = ((mouseY - containerRect.top) / containerRect.height) * 100;

            // Limiter entre 10% et 90%
            const clampedHeight = Math.max(10, Math.min(90, topHeight));

            // Appliquer la nouvelle hauteur
            topPanel.style.height = clampedHeight + '%';
        } else if (currentDivider === 'vertical') {
            const mouseX = e.clientX;
            const leftWidth = ((mouseX - containerRect.left) / containerRect.width) * 100;
            const clampedWidth = Math.max(10, Math.min(90, leftWidth));
            leftPanel.style.width = clampedWidth + '%';
        }
    });
});