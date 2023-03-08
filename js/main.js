radio_btn = document.querySelector('[data-radio-btn]')
radio_btn__options = radio_btn.querySelectorAll('[data-radio-btn-option]')
radio_btn__selected_val = ''

submit_btn = document.querySelector('[data-submit-btn]')

card_rate = document.querySelector('[data-card-rate]')
card_thank_you = document.querySelector('[data-card-thank-you]')
card__selected_rating = document.querySelector('[data-card-selected-rating]')



radio_btn.addEventListener('click', function(e) {
    if(e.target.hasAttribute('data-radio-btn-option')) {
        radio_btn__options.forEach(el => {
            el.classList.remove('my-radio-btn__option--selected')
        });
        e.target.classList.toggle('my-radio-btn__option--selected')
        radio_btn__selected_val = e.target.querySelector('[data-radio-btn-option-val]').innerHTML
    } 
})

submit_btn.addEventListener('click', function(e) {

    if(radio_btn__selected_val != '') {
        card_rate.classList.toggle('card--hide')
        card_thank_you.classList.toggle('card--hide')
        card__selected_rating.innerHTML = radio_btn__selected_val
    }
})