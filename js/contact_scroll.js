'use strict'

window.addEventListener('load', () => {
  const contact_page = document.getElementById('contact_page');
  const contact_form = document.getElementById('contact_form');

  window.addEventListener('scroll', () => {
    const contact_page_scroll = contact_page.getBoundingClientRect().top;
    const contact_form_scroll = contact_form.getBoundingClientRect().top;

    if(contact_page_scroll > contact_form_scroll - 100){
      contact_page.classList.add('active');
    }else{
      if(contact_page.classList.contains('active')){
        contact_page.classList.remove('active');
      }
    }
  });
});