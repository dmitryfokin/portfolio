import './main.scss'

document.addEventListener('DOMContentLoaded', () => {
    // form callback
    const formCallbackInput = document.querySelectorAll('.form-callback__input, .form-callback__textarea')

    formCallbackInput.forEach($el => {
      $el.addEventListener('click', e => {
        e.preventDefault()
        $el.parentElement.querySelector('.fake-placeholder').classList.add('form-callback__fake-placeholder-active')
      })

      $el.addEventListener('blur', e => {
        e.preventDefault()
        if ($el.value.trim() === '') {
          $el.parentElement.querySelector('.fake-placeholder').classList.remove('form-callback__fake-placeholder-active')
        }
      })
    })

    const formCallbackSubmit = document.getElementById('form-callback__submit')
    formCallbackSubmit.addEventListener('click', e => {
      e.preventDefault()
    })
  }
)
