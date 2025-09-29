document.addEventListener('DOMContentLoaded', ()=>{
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelectorAll('.sidebar a');
  menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('show'));

  links.forEach(link=>{
    link.addEventListener('click', ()=>{
      links.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      if(window.innerWidth < 900) sidebar.classList.remove('show');
    });
  });
});