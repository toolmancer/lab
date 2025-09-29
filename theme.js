(function(){
  const toggle = document.getElementById('themeToggle');
  function applyTheme(t){
    if(t === 'dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('tm_theme', t);
  }
  const saved = localStorage.getItem('tm_theme') || 'dark';
  applyTheme(saved);
  toggle.addEventListener('click', ()=>{
    const current = localStorage.getItem('tm_theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
  });
})();
