const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const patch = `
<style id="story-sequence-patch">
  .story-seq-locked{display:none!important}
  .story-continue-wrap{display:flex;justify-content:center;align-items:center;margin:clamp(48px,7vw,92px) auto 0;padding:0 20px;text-align:center}
  .story-continue{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:.65em;min-height:56px;padding:18px 34px;border:0;border-radius:999px;cursor:pointer;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4 0%,#DC97A5 48%,#CE8A99 100%);box-shadow:0 18px 36px -16px rgba(220,151,165,.9),0 5px 14px -8px rgba(74,39,50,.25);font:500 clamp(10px,.78vw,12.5px)/1 var(--sans);letter-spacing:.24em;text-transform:uppercase;white-space:nowrap;transform:translateY(16px);opacity:0;transition:opacity .9s ease,transform .9s cubic-bezier(.2,.8,.2,1),box-shadow .45s ease}
  .story-continue-wrap.rv-in .story-continue{opacity:1;transform:translateY(0)}
  .story-continue.story-ready{opacity:1;transform:translateY(0)}
  .story-continue::after{content:"";position:absolute;inset:-5px;border-radius:inherit;border:1px solid rgba(232,198,106,.45);opacity:0;transform:scale(.94);transition:opacity .45s ease,transform .45s ease}
  .story-continue:hover{transform:translateY(-3px) scale(1.035);box-shadow:0 25px 48px -17px rgba(220,151,165,1),0 7px 16px -8px rgba(74,39,50,.28)}
  .story-continue:hover::after,.story-continue:focus-visible::after{opacity:1;transform:scale(1)}
  .story-continue:active{transform:translateY(0) scale(.97)}
  .story-continue:focus-visible{outline:2px solid #4A2732;outline-offset:6px}
  .story-continue-icon{display:inline-grid;place-items:center;width:23px;height:23px;border-radius:50%;background:rgba(255,249,246,.18);font-size:13px;letter-spacing:0}
  .story-seq-progress{display:block;margin-top:13px;font:500 9px/1 var(--sans);letter-spacing:.24em;text-transform:uppercase;color:#96505F;opacity:.65}
  .story-seq-enter{animation:storySeqEnter 1s cubic-bezier(.2,.8,.2,1) both}
  @keyframes storySeqEnter{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:600px){.story-continue{width:min(92vw,340px);padding:18px 22px;letter-spacing:.19em}.story-continue-wrap{margin-top:52px}}
  @media(prefers-reduced-motion:reduce){.story-continue{transition:none}.story-seq-enter{animation:none}}
</style>
<script>
(function(){
  function setupStorySequence(){
    const world=document.getElementById('world');
    if(!world || world.dataset.sequenceReady==='true') return false;
    const sections=[...world.children].filter(el=>el.tagName==='SECTION' && el.id!=='final');
    const final=document.getElementById('final');
    if(!sections.length || !final) return false;

    const labels=[
      ['Let’s begin our little story','💗'],
      ['There’s something waiting for you','🎁'],
      ['I have one more thing to show you','🌷'],
      ['Come a little closer','💗'],
      ['One last little surprise','✨']
    ];

    const scrollAndReveal=(current,next,index)=>{
      if(!next) return;
      next.classList.remove('story-seq-locked');
      next.classList.add('story-seq-enter');
      window.setTimeout(()=>next.classList.remove('story-seq-enter'),1100);
      window.setTimeout(()=>next.scrollIntoView({behavior:'smooth',block:'start'}),110);
      const buttons=current.querySelectorAll('.story-continue');
      buttons.forEach(b=>{b.disabled=true;b.setAttribute('aria-disabled','true');b.classList.add('story-continue-done')});
      next.dataset.sequenceUnlocked='true';
      index=Math.max(0,index);
    };

    sections.slice(1).forEach(section=>section.classList.add('story-seq-locked'));
    final.classList.add('story-seq-locked');
    const endnote=document.getElementById('endnote');
    if(endnote) endnote.classList.add('story-seq-locked');

    sections.forEach((section,index)=>{
      if(index>=labels.length) return;
      if(section.querySelector('.story-continue-wrap')) return;
      const next=index+1<sections.length ? sections[index+1] : final;
      const [text,icon]=labels[index];
      const wrap=document.createElement('div');
      wrap.className='story-continue-wrap rv rv-s';
      wrap.innerHTML='<div><button type="button" class="story-continue"><span>'+text+'</span><span class="story-continue-icon" aria-hidden="true">'+icon+'</span></button><span class="story-seq-progress">'+(index+1)+' / '+labels.length+' · tap to continue</span></div>';
      const button=wrap.querySelector('.story-continue');
      button.addEventListener('click',()=>scrollAndReveal(section,next,index));
      section.appendChild(wrap);
      requestAnimationFrame(()=>setTimeout(()=>wrap.classList.add('rv-in'),80));
    });

    world.dataset.sequenceReady='true';
    return true;
  }

  function boot(){
    if(setupStorySequence()) return;
    const observer=new MutationObserver(()=>{if(setupStorySequence())observer.disconnect()});
    observer.observe(document.documentElement,{childList:true,subtree:true});
    setTimeout(()=>observer.disconnect(),12000);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
<\/script>`;

    html = html.replace(/<\/body>\s*<\/html>\s*$/i, patch + '\n</body>\n</html>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send('Birthday page unavailable 💗');
  }
};
