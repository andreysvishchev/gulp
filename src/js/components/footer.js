const titleBtn = document.querySelectorAll('.footer__title')

titleBtn.forEach(item => {
  item.addEventListener('click', () => {
    const parent = item.parentNode;
    console.log(parent);
    if (parent.classList.contains('active')) {
      parent.classList.remove('active')
    } else {
      document.querySelectorAll('.footer__column').forEach((child) => child.classList.remove('active'))
      parent.classList.add('active')
    }
  })
});
