(function(){
  document.addEventListener('DOMContentLoaded',function(){
    const body=document.body, toggle=document.querySelector('.nav-toggle'), backdrop=document.querySelector('.nav-backdrop');
    const links=document.querySelectorAll('.main-nav a');
    if(!toggle)return;
    function setOpen(open){body.classList.toggle('nav-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu');}
    toggle.addEventListener('click',()=>setOpen(!body.classList.contains('nav-open')));
    if(backdrop)backdrop.addEventListener('click',()=>setOpen(false));
    links.forEach(a=>a.addEventListener('click',()=>setOpen(false)));
    document.addEventListener('keydown',e=>{if(e.key==='Escape')setOpen(false)});
    window.addEventListener('resize',()=>{if(window.innerWidth>980)setOpen(false)});
  });
})();