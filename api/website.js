const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const patch = `
<style id="page-by-page-patch">
html,body{height:100%;overflow:hidden}
#viewStory,#viewLetters{height:100svh;overflow:auto}
#world{height:100svh!important}
#world>section.page-hidden{display:none!important}
#world>section.page-active{min-height:100svh;height:100svh;overflow:auto;animation:pageEnter .72s cubic-bezier(.22,.8,.2,1) both}
@keyframes pageEnter{from{opacity:0;transform:translateY(18px) scale(.985);filter:blur(8px)}to{opacity:1;transform:none;filter:blur(0)}}
.page-back,.page-next{position:fixed;z-index:99990;border:0;border-radius:999px;cursor:pointer;font-family:Inter,system-ui,sans-serif;font-size:10px;letter-spacing:.15em;text-transform:uppercase;transition:transform .35s cubic-bezier(.2,.8,.2,1),box-shadow .35s ease;backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px)}
.page-back{top:14px;left:14px;padding:11px 17px;color:#5a3540;background:rgba(255,250,247,.88);border:1px solid rgba(167,108,120,.28);box-shadow:0 10px 28px rgba(99,59,71,.13);animation:navEnter .5s ease both}
.page-next{left:50%;bottom:16px;transform:translateX(-50%);padding:14px 22px;color:#fff;background:linear-gradient(135deg,#e5a1af,#c97d8d);box-shadow:0 16px 35px rgba(166,93,112,.28);animation:navEnter .6s .08s ease both,buttonPulse 2.5s 1s ease-in-out infinite}
.page-back:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(99,59,71,.2)}
.page-next:hover{transform:translateX(-50%) translateY(-3px) scale(1.035);box-shadow:0 22px 44px rgba(166,93,112,.36)}
.page-back:active{transform:scale(.96)}.page-next:active{transform:translateX(-50%) scale(.96)}
.page-next::after{content:"";position:absolute;inset:0;border-radius:inherit;background:linear-gradient(110deg,transparent 25%,rgba(255,255,255,.3) 50%,transparent 75%);transform:translateX(-130%);pointer-events:none}.page-next:hover::after{animation:buttonShimmer .9s ease forwards}
@keyframes navEnter{from{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:none}}
@keyframes buttonPulse{0%,100%{box-shadow:0 16px 35px rgba(166,93,112,.28)}50%{box-shadow:0 20px 42px rgba(166,93,112,.38),0 0 0 8px rgba(220,151,165,.08)}}
@keyframes buttonShimmer{from{transform:translateX(-130%)}to{transform:translateX(130%)}}
@media(max-width:600px){.page-back{top:10px;left:10px;padding:10px 14px;font-size:9px}.page-next{bottom:12px;padding:13px 19px;font-size:9px;letter-spacing:.12em}}
@media(prefers-reduced-motion:reduce){.page-active,.page-back,.page-next{animation:none!important;transition:none!important}}
</style>
<script>
(function(){
  function setupPageRouter(){
    var world=document.getElementById('world');
    if(!world || world.dataset.pageRouter==='ready') return false;
    var pages=Array.prototype.slice.call(world.children).filter(function(el){return el.tagName==='SECTION';});
    if(!pages.length) return false;
    pages.forEach(function(page,index){if(!page.id) page.id='page-'+index;page.classList.add('page-hidden');});
    var current=0;
    function findPage(key){
      var found=pages.findIndex(function(page){return page.id===key;});
      if(found>=0)return found;
      var number=parseInt(key,10);
      return Number.isFinite(number)&&number>=0&&number<pages.length?number:0;
    }
    function removeNav(){document.querySelectorAll('.page-back,.page-next').forEach(function(el){el.remove();});}
    function buildNav(){
      removeNav();
      if(current>0){
        var back=document.createElement('button');back.type='button';back.className='page-back';back.textContent='← Go back';
        back.setAttribute('aria-label','Go back to the previous section');
        back.addEventListener('click',function(){
          if(history.length>1&&history.state&&typeof history.state.page==='number') history.back();
          else showPage(current-1,true);
        });
        document.body.appendChild(back);
      }
      if(current<pages.length-1){
        var next=document.createElement('button');next.type='button';next.className='page-next';next.innerHTML='Continue <span aria-hidden="true">♡</span>';
        next.setAttribute('aria-label','Continue to the next section');next.addEventListener('click',function(){showPage(current+1,true);});
        document.body.appendChild(next);
      }
    }
    function showPage(index,push){
      current=Math.max(0,Math.min(index,pages.length-1));
      pages.forEach(function(page,i){
        if(i===current){page.classList.remove('page-hidden');page.classList.add('page-active');page.scrollTop=0;if(typeof page.scrollTo==='function')page.scrollTo(0,0);}
        else{page.classList.remove('page-active');page.classList.add('page-hidden');}
      });
      buildNav();
      if(push)history.pushState({page:current},'',location.pathname+'#'+pages[current].id);
      window.scrollTo(0,0);
    }
    window.go=function(id){showPage(findPage(id),true);};
    window.addEventListener('popstate',function(){var key=location.hash.replace(/^#/,'');showPage(key?findPage(key):0,false);});
    document.addEventListener('click',function(event){
      var replay=event.target.closest('.replay');
      if(replay){event.preventDefault();event.stopImmediatePropagation();showPage(0,true);}
    },true);
    showPage(location.hash?findPage(location.hash.replace(/^#/,'').trim()):0,false);
    world.dataset.pageRouter='ready';
    return true;
  }
  function boot(){var attempts=0;var timer=setInterval(function(){attempts++;if(setupPageRouter()||attempts>80)clearInterval(timer);},100);}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
</script>`;

    const bodyClose = html.toLowerCase().indexOf('</body>');
    const htmlClose = html.toLowerCase().indexOf('</html>');
    if(bodyClose>=0){
      html=html.slice(0,bodyClose)+patch+'\n'+html.slice(bodyClose);
    }else if(htmlClose>=0){
      html=html.slice(0,htmlClose)+patch+'\n'+html.slice(htmlClose);
    }else{
      html+=patch;
    }

    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch(error) {
    console.error(error);
    res.status(500).send('Birthday page unavailable 💗');
  }
};
