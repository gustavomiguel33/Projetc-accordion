const accordionContent = document.querySelectorAll('.accordion-content').forEach(item => {
  item.style.maxHeight = 0;
})

const accordionButton = document.querySelectorAll('.accordion-button');


accordionButton.forEach(button => {
  button.addEventListener('click', () => {
    const accordion = button.nextElementSibling;

    button.classList.toggle('active');

    if(button.classList.contains('active')){
      accordion.style.maxHeight = accordion.scrollHeight + 'px';
      button.textContent = 'x';
    }else {
      accordion.style.maxHeight = 0;
      button.textContent = '+';
    }
  })
})
