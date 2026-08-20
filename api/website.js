const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const patch = `
<style id="story-sequence-patch">
  /* Sequential story: keep everything after the current chapter truly hidden. */
  .story-seq-locked{display:none!important}

  /* Never let the original scroll-reveal system leave the first chapter invisible. */
  #world .story-seq-visible .rv,
  #world .story-seq-visible .rv.rv-in{
    opacity:1!important;
    transform:translate3d(0,0,0) scale(1)!important;
    filter:blur(0)!important;
    visibility:visible!important;
  }

  .story-continue-wrap{
    display:flex;justify-content:center;align-items:center;
    margin:clamp(44px,7vw,86px) auto 0;padding:0 20px;
    text-align:center;position:relative;z-index:5;
    opacity:0;transform:translateY(24px) scale(.96);
    transition:opacity .9s cubic-bezier(.22,.72,.24,1),transform 1s cubic-bezier(.19,.78,.22,1);
  }
  .story-continue-wrap.story-ready{opacity:1;transform:translateY(0) scale(1)}

  .story-continue{
    position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.7em;
    min-height:58px;padding:18px 32px;border:0;border-radius:999px;cursor:pointer;
    color:#FFF9F6;
    background:linear-gradient(140deg,#E7A9B4 0%,#DC97A5 48%,#CE8A99 100%);
    box-shadow:0 18px 38px -16px rgba(220,151,165,.92),0 5px 14px -8px rgba(74,39,50,.25);
    font:500 clamp(10px,.78vw,12.5px)/1 var(--sans);
    letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;
    transform:translateZ(0);will-change:transform,box-shadow;
    transition:transform .45s cubic-bezier(.2,.8,.24,1),box-shadow .45s ease,filter .45s ease;
  }
  .story-continue::before{
    content:"";position:absolute;inset:-7px;border-radius:inherit;
    border:1px solid rgba(232,198,106,.42);opacity:0;transform:scale(.94);
    transition:opacity .45s ease,transform .45s ease;pointer-events:none;
  }
  .story-continue::after{
    content:"";position:absolute;inset:0;border-radius:inherit;
    background:linear-gradient(110deg,transparent 25%,rgba(255,255,255,.30) 50%,transparent 75%);
    transform:translateX(-130%);pointer-events:none;
  }
  .story-continue:hover{transform:translateY(-3px) scale(1.035);filter:saturate(1.05);box-shadow:0 25px 48px -17px rgba(220,151,165,1),0 7px 16px -8px rgba(74,39,50,.28)}
  .story-continue:hover::before,.story-continue:focus-visible::before{opacity:1;transform:scale(1)}
  .story-continue:hover::after{animation:storyButtonShimmer 1s ease forwards}
  .story-continue:active{transform:translateY(1px) scale(.965)}
  .story-continue:focus-visible{outline:2px solid #4A2732;outline-offset:6px}
  .story-continue-icon{
    display:inline-grid;place-items:center;width:24px;height:24px;border-radius:50%;
    background:rgba(255,249,246,.18);font-size:13px;letter-spacing:0;
    transition:transform .45s cubic-bezier(.2,.8,.24,1),background .45s ease;
  }
  .story-continue:hover .story-continue-icon{transform:translateX(3px) rotate(8deg);background:rgba(255,249,246,.28)}
  .story-seq-progress{
    display:block;margin-top:13px;font:500 9px/1 var(--sans);
    letter-spacing:.24em;text-transform:uppercase;color:#96505F;opacity:.68;
  }
  .story-continue.story-pulse{animation:storyButtonPulse 2.2s cubic-bezier(.4,0,.2,1) 1.2s infinite}
  .story-continue.story-done{pointer-events:none;opacity:.55;animation:none}

  .story-seq-enter{animation:storySeqEnter 1.05s cubic-bezier(.2,.8,.2,1) both}
  @keyframes storySeqEnter{
    from{opacity:0;transform:translate3d(0,34px,0);filter:blur(10px)}
    to{opacity:1;transform:translate3d(0,0,0);filter:blur(0)}
  }
  @keyframes storyButtonPulse{
    0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.92),0 5px 14px -8px rgba(74,39,50,.25)}
    50%{box-shadow:0 23px 48px -16px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.10)}
  }
  @keyframes storyButtonShimmer{from{transform:translateX(-130%)}to{transform:translateX(130%)}}

  @media(max-width:600px){
    .story-continue{width:min(92vw,350px);padding:18px 20px;letter-spacing:.18em}
    .story-continue-wrap{margin-top:48px}
  }
  @media(prefers-reduced-motion:reduce){
    .story-continue-wrap,.story-continue{transition:none!important;animation:none!important}
    .story-seq-enter{animation:none!important}
  }
</style>
<script>
(function(){
  function setupStorySequence(){
    var world=document.getElementById('world');
    if(!world || world.dataset.sequenceReady==='true') return false;

    var sections=Array.prototype.slice.call(world.children).filter(function(el){
      return el.tagName==='SECTION';
    });
    var finalSection=document.getElementById('final');
    if(!sections.length || !finalSection) return false;

    /* Only use actual story sections. Never modify the final section's contents. */
    var storySections=sections.filter(function(section){ return section.id!=='final'; });
    if(!storySections.length) return false;

    /* The page currently has five hidden chapters before the final celebration. */
    var labels=[
      ['Let’s begin our little story','💗'],
      ['There’s something waiting for you','🎁'],
      ['I have one more thing to show you','🌷'],
      ['Come a little closer','💗'],
      ['One last little surprise','✨'],
      ['Keep going, my love','💛'],
      ['A little more for you','🌸']
    ];

    /* Start from the first real section and force its original reveal elements visible. */
    storySections.forEach(function(section,index){
      section.classList.remove('story-seq-visible','story-seq-enter');
      if(index===0) section.classList.add('story-seq-visible');
      else section.classList.add('story-seq-locked');
    });

    /* Final section remains hidden until the last story button, but its markup and
       existing “Let’s celebrate” button are not touched. */
    finalSection.classList.add('story-seq-locked');

    function reveal(current,next,button){
      if(!next || button.dataset.clicked==='true') return;
      button.dataset.clicked='true';
      button.classList.remove('story-pulse');
      button.classList.add('story-done');
      button.disabled=true;
      button.setAttribute('aria-disabled','true');

      next.classList.remove('story-seq-locked');
      next.classList.add('story-seq-visible','story-seq-enter');

      /* Let the browser paint the chapter before scrolling, which makes the transition
         feel intentional instead of jumping into an empty frame. */
      requestAnimationFrame(function(){
        requestAnimationFrame(function(){
          next.scrollIntoView({behavior:'smooth',block:'start'});
        });
      });

      window.setTimeout(function(){next.classList.remove('story-seq-enter')},1100);
      window.setTimeout(function(){
        var nextButton=next.querySelector('.story-continue');
        if(nextButton) nextButton.classList.add('story-pulse');
      },850);
    }

    storySections.forEach(function(section,index){
      var next=(index+1<storySections.length) ? storySections[index+1] : finalSection;
      var pair=labels[index] || ['Open the next little surprise','💗'];

      /* Never duplicate a button if this script is initialized twice. */
      if(section.querySelector(':scope > .story-continue-wrap')) return;

      var wrap=document.createElement('div');
      wrap.className='story-continue-wrap';
      wrap.innerHTML='<div><button type="button" class="story-continue story-pulse"><span>'+pair[0]+'</span><span class="story-continue-icon" aria-hidden="true">'+pair[1]+'</span></button><span class="story-seq-progress">'+(index+1)+' / '+storySections.length+' · tap to continue</span></div>';

      var button=wrap.querySelector('.story-continue');
      button.addEventListener('click',function(){reveal(section,next,button)});
      section.appendChild(wrap);

      /* Give the current chapter a calm entrance, then reveal the button a beat later. */
      window.setTimeout(function(){wrap.classList.add('story-ready')},index===0?900:500);
    });

    /* Make sure the first chapter is immediately readable even if the original
       IntersectionObserver hasn't fired yet. */
    var first=storySections[0];
    first.classList.add('story-seq-visible');
    Array.prototype.forEach.call(first.querySelectorAll('.rv'),function(el){
      el.classList.add('rv-in');
    });

    world.dataset.sequenceReady='true';
    return true;
  }

  function boot(){
    if(setupStorySequence()) return;
    var tries=0;
    var timer=setInterval(function(){
      tries++;
      if(setupStorySequence() || tries>60) clearInterval(timer);
    },200);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
</script>`;

    /* Inject safely before the closing body tag. Do not escape </script> here: this
       file is server-side JavaScript, and the browser needs a real closing tag. */
    if(/<\/body>/i.test(html)){
      html=html.replace(/<\/body>/i,patch+'\n</body>');
    }else if(/<\/html>/i.test(html)){
      html=html.replace(/<\/html>/i,patch+'\n</html>');
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
