const modalLinks = document.querySelectorAll('[data-modal-link]');
const modalWindows = document.querySelectorAll('[data-modal]');

modalLinks.forEach(function (item) {
    item.addEventListener('click', function () {
        constId = this.dataset.modalLink;
        const modal = document.querySelector('#' + this.dataset.modalLink);
        modal.classList.remove('hidden');

        modal.querySelector('.modal_window').addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
});

modalWindows.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    });
});