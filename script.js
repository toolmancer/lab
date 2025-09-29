document.addEventListener('DOMContentLoaded', ()=>{
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('menuBtn');
  const links = document.querySelectorAll('.sidebar a');
  menuBtn.addEventListener('click', ()=> sidebar.classList.toggle('show'));

  links.forEach(link=>{
    link.addEventListener('click', (e)=>{
      links.forEach(l=>l.classList.remove('active'));
      link.classList.add('active');
      if(window.innerWidth < 900) sidebar.classList.remove('show');
    });
  });

  // if links inside iframe want to set active state, listen to messages
  window.addEventListener('message', (ev)=>{
    if(!ev.data || !ev.data.type) return;
    if(ev.data.type === 'activate' && ev.data.href){
      links.forEach(l=>l.classList.remove('active'));
      const match = Array.from(links).find(a=>a.getAttribute('href') === ev.data.href);
      if(match) match.classList.add('active');
    }
  });
});