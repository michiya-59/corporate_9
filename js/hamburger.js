'use strict'

window.addEventListener('load', () => {
  const hamburger = document.getElementById('hunbargur_menu');
  const mask_menu = document.getElementById('mask_menu');
  const mask_concept = document.getElementById('mask_concept');
  const mask_service = document.getElementById('mask_service');
  const mask_work = document.getElementById('mask_work');
  const mask_contact = document.getElementById('mask_contact');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mask_menu.classList.toggle('active');
  });

  mask_menu.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_concept.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_service.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_work.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });

  mask_contact.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mask_menu.classList.remove('active');
  });
});