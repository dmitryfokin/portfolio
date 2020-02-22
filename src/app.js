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


  // tpggle menu
  const menuToggle = document.getElementById('menu-toggle')
  const mobileNavContainer = document.getElementById('mobile-nav')
  const mobileOverlay = document.getElementById('mobile-nav-overlay')
  const body = document.querySelector('body')

  menuToggle.addEventListener('click', e => {
    toggleMobileMenu()
  })

  mobileNavContainer.addEventListener('click', e => {
    if (e.target.tagName === 'A' || e.target.tagName === 'I') {
      toggleMobileMenu()
    }
  })

  function toggleMobileMenu() {
    menuToggle.classList.toggle('menu-icon-active')
    mobileNavContainer.classList.toggle('mobile-nav--active')
    mobileOverlay.classList.toggle('mobile-nav-overlay--active')
    body.classList.toggle('no-scroll')
  }

})
