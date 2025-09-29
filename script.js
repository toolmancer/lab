
document.addEventListener('DOMContentLoaded',()=>{
  const links = document.querySelectorAll('.topnav .nav-item');
  links.forEach(l=> l.addEventListener('click', ()=>{ links.forEach(x=>x.classList.remove('active')); l.classList.add('active'); }));
  // allow iframe pages to notify parent to set active link
  window.addEventListener('message',(e)=>{
    if(e.data && e.data.type==='activate' && e.data.href){
      const a = Array.from(document.querySelectorAll('.topnav .nav-item')).find(x=>x.getAttribute('href')===e.data.href);
      if(a){ document.querySelectorAll('.topnav .nav-item').forEach(x=>x.classList.remove('active')); a.classList.add('active'); }
    }
  });
});
