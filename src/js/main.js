var buttonlist = document.querySelector('.header-icon i');
var headerlist = document.querySelector('.header-list');
buttonlist.addEventListener('click', () =>{
  headerlist.classList.toggle('active');
})