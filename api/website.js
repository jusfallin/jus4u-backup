const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const patch = `
<style id="myyellow-page-fix-v3">
html,body{height:100%;overflow:hidden}
#viewStory,#viewLetters{height:100svh;overflow:auto}
#world{height:100svh!important}
#world>section.page-hidden{display:none!important}
#world>section.page-active{display:block!important;position:relative;height:100svh!important;min-height:100svh!important;overflow-y:auto!important;overflow-x:hidden!important;padding-bottom:132px!important;animation:myPageIn .65s cubic-bezier(.22,.8,.2,1) both}
@keyframes myPageIn{from{opacity:0;transform:translateY(18px) scale(.99);filter:blur(7px)}to{opacity:1;transform:none;filter:none}}
#world>section.page-active>.wrap{min-height:calc(100svh - 40px)}
.my-page-nav{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:9998;display:inline-flex;align-items:center;justify-content:center;min-width:220px;min-height:68px;padding:19px 38px;border:0;border-radius:999px;color:#fff;background:linear-gradient(135deg,#e7a8b4,#c97d8d);box-shadow:0 20px 46px rgba(166,93,112,.34),0 0 0 1px rgba(255,255,255,.16) inset;font:500 12px/1 Inter,system-ui,sans-serif;letter-spacing:.20em;text-transform:uppercase;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease}
.my-page-nav:hover{transform:translateX(-50%) translateY(-3px) scale(1.035);box-shadow:0 26px 54px rgba(166,93,112,.42)}
.my-page-nav:active{transform:translateX(-50%) scale(.96)}
.my-page-back{position:fixed;top:14px;left:14px;z-index:9999;min-height:48px;padding:12px 18px;border:1px solid rgba(167,108,120,.28);border-radius:999px;color:#5a3540;background:rgba(255,250,247,.90);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 10px 28px rgba(99,59,71,.14);font:500 11px/1 Inter,system-ui,sans-serif;letter-spacing:.12em;cursor:pointer}
.my-photo-frame{position:relative;overflow:hidden;width:100%;height:100%;border-radius:4px;background:#f5ddd7}
.my-photo-frame img{display:block;width:100%;height:100%;object-fit:cover}
.my-photo-polaroid{position:absolute;width:clamp(145px,18vw,215px);z-index:4;pointer-events:none}
.my-photo-polaroid img{display:block;width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 18px 30px rgba(0,0,0,.22))}
#deep .deep-photos{position:absolute;inset:0;pointer-events:none;z-index:3}
#deep .deep-photos .p1{left:.5%;top:12%;transform:rotate(-7deg)}
#deep .deep-photos .p2{right:.5%;top:12%;transform:rotate(7deg)}
#deep .deep-photos .p3{left:.5%;bottom:11%;transform:rotate(7deg)}
#deep .deep-photos .p4{right:.5%;bottom:10%;transform:rotate(-7deg)}
@media(max-width:760px){.my-page-nav{bottom:16px;min-width:220px;min-height:68px;padding:19px 36px;font-size:11px}.my-page-back{top:10px;left:10px;min-height:46px;padding:11px 15px;font-size:10px}#deep .deep-photos .my-photo-polaroid{width:92px}#deep .deep-photos .p1{left:-2%;top:6%}#deep .deep-photos .p2{right:-2%;top:6%}#deep .deep-photos .p3{left:-2%;bottom:6%}#deep .deep-photos .p4{right:-2%;bottom:6%}}
@media(max-width:520px){#deep .deep-photos .my-photo-polaroid{width:76px}}
</style>
<script>
(function(){
  function restoreOldPhotos(){
    var frames=document.querySelectorAll('#world .art-frame');
    if(frames[0])frames[0].innerHTML='<div class="my-photo-frame"><img src="/assets/03.jpg" alt="A favorite memory"></div>';
    if(frames[1])frames[1].innerHTML='<div class="my-photo-frame"><img src="/assets/her%20image.png" alt="A favorite portrait"></div>';
    var deep=document.getElementById('deep');
    if(deep && !deep.querySelector('.deep-photos')){
      var photos=document.createElement('div');photos.className='deep-photos';
      photos.innerHTML='<figure class="my-photo-polaroid p1"><img src="/assets/03.jpg" alt="Memory"></figure><figure class="my-photo-polaroid p2"><img src="/assets/07.jpg" alt="Memory"></figure><figure class="my-photo-polaroid p3"><img src="/assets/08.jpg" alt="Memory"></figure><figure class="my-photo-polaroid p4"><img src="/assets/IMG_20260730_235824.png" alt="Memory"></figure>';
      deep.appendChild(photos);
    }
  }

  function setup(){
    var world=document.getElementById('world');
    if(!world || world.dataset.myPageRouter==='ready')return false;
    restoreOldPhotos();
    var pages=Array.prototype.slice.call(world.children).filter(function(el){return el.tagName==='SECTION';});
    if(!pages.length)return false;
    pages.forEach(function(p,i){if(!p.id)p.id='page-'+i;p.classList.add('page-hidden');});
    var current=0;
    function indexOfKey(key){var found=pages.findIndex(function(p){return p.id===key;});if(found>=0)return found;var n=parseInt(key,10);return Number.isFinite(n)&&n>=0&&n<pages.length?n:0;}
    function cleanup(){document.querySelectorAll('.my-page-nav,.my-page-back').forEach(function(el){el.remove();});}
    function showPage(index,push){
      current=Math.max(0,Math.min(index,pages.length-1));
      pages.forEach(function(page,i){var active=i===current;page.classList.toggle('page-active',active);page.classList.toggle('page-hidden',!active);if(active){page.scrollTop=0;if(page.scrollTo)page.scrollTo(0,0);}});
      cleanup();
      if(current>0){var back=document.createElement('button');back.type='button';back.className='my-page-back';back.textContent='← Go back';back.onclick=function(){showPage(current-1,true);};document.body.appendChild(back);}
      if(current<pages.length-1){var next=document.createElement('button');next.type='button';next.className='my-page-nav';next.innerHTML='Continue <span aria-hidden="true">♡</span>';next.onclick=function(){showPage(current+1,true);};pages[current].appendChild(next);}
      if(push)history.pushState({page:current},'',location.pathname+'#'+pages[current].id);window.scrollTo(0,0);
    }
    window.addEventListener('popstate',function(){var key=location.hash.replace(/^#/,'').trim();showPage(key?indexOfKey(key):0,false);});
    document.addEventListener('click',function(e){var oldNext=e.target.closest('.page-next');if(oldNext){e.preventDefault();e.stopImmediatePropagation();}},true);
    var observer=new MutationObserver(function(){var letters=document.getElementById('viewLetters');if(letters && !letters.hidden){document.querySelectorAll('.my-page-nav').forEach(function(el){el.remove();});document.querySelectorAll('.my-page-back').forEach(function(el){el.textContent='← Go back';el.onclick=function(){if(typeof window.setView==='function')window.setView('story');else location.hash='';};});}});
    observer.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['hidden']});
    document.addEventListener('click',function(e){var replay=e.target.closest('.replay');if(replay){e.preventDefault();e.stopImmediatePropagation();showPage(0,true);}},true);
    showPage(location.hash?indexOfKey(location.hash.replace(/^#/,'').trim()):0,false);world.dataset.myPageRouter='ready';return true;
  }
  var tries=0;var timer=setInterval(function(){tries++;if(setup()||tries>100)clearInterval(timer);},80);
})();
</script>`;

    const bodyClose = html.toLowerCase().indexOf('</body>');
    const htmlClose = html.toLowerCase().indexOf('</html>');
    if(bodyClose >= 0) html = html.slice(0,bodyClose) + patch + '\n' + html.slice(bodyClose);
    else if(htmlClose >= 0) html = html.slice(0,htmlClose) + patch + '\n' + html.slice(htmlClose);
    else html += patch;

    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch(error) {
    console.error(error);
    res.status(500).send('Birthday page unavailable 💗');
  }
};
