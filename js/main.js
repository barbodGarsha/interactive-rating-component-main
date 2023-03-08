radio_btn = document.querySelector('[data-radio-btn]')
radio_btn__options = radio_btn.querySelectorAll('[data-radio-btn-option]')
radio_btn__selected_val = ""

radio_btn.addEventListener('click', function(e) {
    if(e.target.hasAttribute('data-radio-btn-option')) {
        radio_btn__options.forEach(el => {
            el.classList.remove('my-radio-btn__option--selected')
        });
        e.target.classList.toggle('my-radio-btn__option--selected')
        radio_btn__selected_val = e.target.querySelector('[data-radio-btn-option-val]').innerHTML
    } 
})