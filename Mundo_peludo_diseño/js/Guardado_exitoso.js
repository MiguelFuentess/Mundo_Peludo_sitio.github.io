const saveButton = document.getElementById('btn-guardar');
    const modal = document.getElementById('success-modal');
    const acceptButton = document.getElementById('btn-aceptar');

    // mostrar al hacer clic en Guardar
    saveButton.addEventListener('click', () => {
        modal.classList.add('visible');
        });

    // ocultar al hacer clic en Aceptar
    acceptButton.addEventListener('click', () => {
        modal.classList.remove('visible');
        });


    modal.addEventListener('click', (e) => {
        if (e.target.id === 'success-modal') {
            modal.classList.remove('visible');
        }
    });