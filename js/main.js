// Hailey Home Studio — minimal site JS (no dependencies)
(function(){
  document.documentElement.classList.remove('no-js');
  var header=document.querySelector('.site-header');
  var toggle=document.querySelector('.menu-toggle');
  var nav=document.getElementById('site-nav');
  if(toggle&&nav){
    toggle.addEventListener('click',function(){
      var open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      toggle.setAttribute('aria-label',open?'Open menu':'Close menu');
      nav.classList.toggle('open',!open);
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'&&nav.classList.contains('open')){toggle.click();toggle.focus();}
    });
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){if(nav.classList.contains('open'))toggle.click();});});
  }
  var onScroll=function(){if(header)header.classList.toggle('scrolled',window.scrollY>8);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  // reveal on scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el);});
  } else { els.forEach(function(el){el.classList.add('in');}); }
  // FormSubmit: send visitors back to this site's thank-you page on whatever host it's deployed to
  var next=document.querySelector('input[name="_next"]');
  if(next&&/^https?:/.test(location.protocol)){next.value=location.origin+'/thank-you.html';}
  var y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
})();
