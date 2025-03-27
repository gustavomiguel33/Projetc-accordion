const accordionContent = document.querySelectorAll('.accordion-content').forEach(item => {
  item.style.maxHeight = 0;
})

const accordionButton = document.querySelectorAll('.accordion-button');
const accordionTitle = document.querySelectorAll('.accordion-title');

accordionButton.forEach(button => {
  button.addEventListener('click', () => {
    const accordion = button.nextElementSibling;

    button.classList.toggle('active');

    if(button.classList.contains('active')){
      accordion.
      
    }
  })
})
