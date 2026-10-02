// Hailey Home Studio — site JS (vanilla, no dependencies)
(function(){
  var doc=document.documentElement;
  doc.classList.remove('no-js');doc.classList.add('js');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // sticky header border
  var header=document.querySelector('.site-header');
  var onScroll=function(){if(header)header.classList.toggle('scrolled',window.scrollY>8);};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // mobile nav
  var toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('site-nav');
  if(toggle&&nav){
    var setOpen=function(open){
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
      nav.classList.toggle('open',open);document.body.classList.toggle('nav-open',open);
    };
    toggle.addEventListener('click',function(){setOpen(toggle.getAttribute('aria-expanded')!=='true');});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&nav.classList.contains('open')){setOpen(false);toggle.focus();}});
    nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setOpen(false);});});
    window.addEventListener('resize',function(){if(window.innerWidth>940&&nav.classList.contains('open'))setOpen(false);});
  }

  // reveal on scroll
  var els=document.querySelectorAll('.reveal,.reveal-img');
  if(!reduce&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:0.01});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}

  // lightbox: any <a data-lightbox href="images/x.jpg"> inside a [data-gallery]
  var links=[].slice.call(document.querySelectorAll('a[data-lightbox]'));
  if(links.length&&typeof HTMLDialogElement==='function'){
    var dlg=document.createElement('dialog');dlg.className='lb';dlg.setAttribute('aria-label','Project image viewer');
    dlg.innerHTML='<div class="lb-bar"><span class="lb-count" aria-live="polite"></span><button type="button" class="lb-close" aria-label="Close">&times;</button></div>'+
      '<div class="lb-stage"><img alt=""></div><p class="lb-cap"></p>'+
      '<button type="button" class="lb-prev" aria-label="Previous image">&larr;</button><button type="button" class="lb-next" aria-label="Next image">&rarr;</button>';
    document.body.appendChild(dlg);
    var img=dlg.querySelector('img'),cap=dlg.querySelector('.lb-cap'),cnt=dlg.querySelector('.lb-count'),cur=0,opener=null;
    var show=function(i){
      cur=(i+links.length)%links.length;var a=links[cur],t=a.querySelector('img');
      img.src=a.getAttribute('href');img.alt=t?t.alt:'';
      cap.textContent=a.getAttribute('data-caption')||'';
      cnt.textContent=String(cur+1).padStart(2,'0')+' / '+String(links.length).padStart(2,'0');
    };
    links.forEach(function(a,i){a.addEventListener('click',function(e){e.preventDefault();opener=a;show(i);dlg.showModal();});});
    dlg.querySelector('.lb-close').addEventListener('click',function(){dlg.close();});
    dlg.querySelector('.lb-prev').addEventListener('click',function(){show(cur-1);});
    dlg.querySelector('.lb-next').addEventListener('click',function(){show(cur+1);});
    dlg.addEventListener('click',function(e){if(e.target===dlg||e.target.classList.contains('lb-stage'))dlg.close();});
    dlg.addEventListener('keydown',function(e){if(e.key==='ArrowLeft')show(cur-1);if(e.key==='ArrowRight')show(cur+1);});
    dlg.addEventListener('close',function(){document.body.style.overflow='';if(opener)opener.focus();});
    dlg.addEventListener('cancel',function(){});
    var _open=dlg.showModal.bind(dlg);dlg.showModal=function(){document.body.style.overflow='hidden';_open();};
  }

  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
