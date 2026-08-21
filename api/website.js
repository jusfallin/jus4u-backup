const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-flow-fix">
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-flow-fix{overflow-y:auto!important}
body.my-flow-fix #world>section{display:none!important}
body.my-flow-fix #world>section.my-fix-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:flex-start!important;justify-content:center!important;padding:30px 0 90px!important}
.my-fix-inner{width:min(92vw,900px);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
.my-fix-inner>*{margin-left:auto!important;margin-right:auto!important}
.my-fix-back,.my-fix-next{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;cursor:pointer;min-height:50px;padding:14px 28px;font:500 10.5px var(--sans);letter-spacing:.22em;text-transform:uppercase;transition:transform .25s ease,box-shadow .25s ease}
.my-fix-back{order:0;align-self:center!important;margin:0 0 30px!important;color:#96505F;background:rgba(255,249,246,.78);border:1px solid rgba(150,80,95,.25);box-shadow:0 10px 25px -18px rgba(74,39,50,.45)}
.my-fix-back:hover{transform:translateX(-3px)}
.my-fix-next{order:99;margin-top:46px!important;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);animation:myFixPulse 2.2s ease-in-out infinite}
@keyframes myFixPulse{0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.95)}50%{box-shadow:0 24px 48px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}

/* The first love story, giftbox, revealed image and proposal are ONE part. */
body.my-flow-fix #my-fix-love .split{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;width:100%!important;gap:28px!important}
body.my-flow-fix #my-fix-love .art-col{order:1!important;width:min(88vw,430px)!important;margin:0 auto!important}
body.my-flow-fix #my-fix-love .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-flow-fix #my-fix-love .art-frame{aspect-ratio:291/348!important}
body.my-flow-fix #my-fix-love .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:4px!important}
body.my-flow-fix #my-fix-love .stack{order:2!important;width:100%!important;max-width:760px!important;text-align:center!important;margin:0 auto!important}
body.my-flow-fix .body-copy{font-size:clamp(16px,1.25vw,20px)!important;line-height:1.82!important;max-width:62ch!important}
body.my-flow-fix #my-fix-love .h-serif{font-size:clamp(30px,5.4vw,58px)!important;line-height:1.18!important}
body.my-flow-fix #my-fix-love .pull-quote{font-size:clamp(16px,1.35vw,21px)!important;line-height:1.7!important;border-left:0!important;border-top:2px solid var(--pink)!important;padding:20px 0 0!important;margin-top:8px!important}

/* Giftbox comes immediately after the love message. */
body.my-flow-fix #my-fix-love #giftBlock{width:100%!important;margin-top:76px!important;padding-top:48px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-love #giftStage{height:clamp(330px,45vh,480px)!important}
body.my-flow-fix #my-fix-love #gift{transform:scale(1.12)!important}

/* After the gift is opened, the repository image appears in the same part. */
body.my-flow-fix #my-fix-love #memory{width:100%!important;margin-top:76px!important;padding-top:48px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-love .memory-wrap{width:min(90vw,520px)!important;margin:20px auto 0!important}
body.my-flow-fix #my-fix-love .memory-card{width:100%!important;padding:15px 15px 22px!important}
body.my-flow-fix #my-fix-love .memory-frame{width:100%!important;aspect-ratio:auto!important;overflow:hidden!important}
body.my-flow-fix #my-fix-love #my-scratch-photo{display:block!important;width:100%!important;height:auto!important;max-height:none!important;object-fit:contain!important;border-radius:5px!important}

/* Then the do-you-love-me question continues directly below it. */
body.my-flow-fix #my-fix-love #proposal{width:100%!important;margin-top:76px!important;padding-top:48px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-love #proposal .q-script{font-size:clamp(46px,8vw,94px)!important}
body.my-flow-fix #my-fix-love #proposal .arena{height:auto!important;min-height:180px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:22px!important;margin:24px auto 0!important}
body.my-flow-fix #my-fix-love #proposal .slot{position:static!important;transform:none!important;margin:0!important}
body.my-flow-fix #my-fix-love #proposal .btn{font-size:13px!important;padding:17px 30px!important}

/* Remove all old per-subpart navigation; only the combined part has controls. */
body.my-flow-fix #my-fix-love .my-fix-state-controls{display:none!important}
body.my-flow-fix #my-fix-gift{display:none!important}

/* Quote / deep / final screens remain separate. */
body.my-flow-fix #my-fix-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;gap:28px!important}
body.my-flow-fix #my-fix-quote .art-col{width:min(88vw,430px)!important;margin:0 auto!important}
body.my-flow-fix #my-fix-quote .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-flow-fix #my-fix-quote .art-frame{aspect-ratio:291/348!important}
body.my-flow-fix #my-fix-quote .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:4px!important}
body.my-flow-fix #my-fix-quote .stack{width:100%!important;max-width:760px!important;text-align:center!important}
body.my-flow-fix #my-fix-quote .big-quote{font-size:clamp(34px,6vw,64px)!important;line-height:1.25!important}
body.my-flow-fix #my-fix-deep .h-serif{font-size:clamp(34px,6vw,64px)!important}
body.my-flow-fix #my-fix-deep .body-copy,body.my-flow-fix #my-fix-final .body-copy{font-size:clamp(16px,1.25vw,20px)!important}
body.my-flow-fix #my-fix-final .h-serif{font-size:clamp(40px,8vw,94px)!important}

@media(max-width:720px){
 body.my-flow-fix #world>section.my-fix-active{padding:28px 0 70px!important}
 .my-fix-inner{width:min(92vw,560px)!important}
 .my-fix-back{min-height:48px;padding:13px 25px;margin-bottom:22px!important}
 .my-fix-next{min-height:54px;padding:16px 34px;margin-top:38px!important}
 body.my-flow-fix #my-fix-love .art-col{width:min(88vw,410px)!important}
 body.my-flow-fix #my-fix-love #giftBlock,body.my-flow-fix #my-fix-love #memory,body.my-flow-fix #my-fix-love #proposal{margin-top:58px!important;padding-top:34px!important}
}
</style>`;

    const script = String.raw`<script id="myyellow-flow-fix-script">
(function(){
  'use strict';
  var world=document.getElementById('world');
  if(!world)return;
  var sections=[].slice.call(world.children).filter(function(el){return el.tagName==='SECTION';});
  var hero=document.getElementById('hero'),giftSection=document.getElementById('giftSection'),deep=document.getElementById('deep'),final=document.getElementById('final');
  var love=sections.find(function(s){return !s.id&&s.querySelector('.pull-quote')&&s.querySelector('.art-card');});
  var quote=sections.find(function(s){return !s.id&&s.querySelector('.big-quote');});
  if(!hero||!giftSection||!deep||!final||!love||!quote)return;

  /* Move the gift content INSIDE the love section. This makes the whole
     love -> gift -> image -> proposal experience literally one part. */
  var giftBlock=document.getElementById('giftBlock');
  var memory=document.getElementById('memory');
  var proposal=document.getElementById('proposal');
  var giftWrap=giftSection.querySelector('.wrap');
  var loveWrap=love.querySelector('.wrap');
  if(giftWrap&&loveWrap){
    if(giftBlock)loveWrap.appendChild(giftBlock);
    if(memory)loveWrap.appendChild(memory);
    if(proposal)loveWrap.appendChild(proposal);
    giftSection.style.display='none';
  }

  function makeInner(section,id){
    var old=section.querySelector(':scope > .my-fix-inner');
    if(old)return old;
    var inner=document.createElement('div');inner.className='my-fix-inner';inner.id=id;
    while(section.firstChild)inner.appendChild(section.firstChild);
    section.appendChild(inner);return inner;
  }
  var heroInner=makeInner(hero,'my-fix-hero');
  var loveInner=makeInner(love,'my-fix-love');
  var quoteInner=makeInner(quote,'my-fix-quote');
  var deepInner=makeInner(deep,'my-fix-deep');
  var finalInner=makeInner(final,'my-fix-final');

  var cue=heroInner.querySelector('.scroll-cue');if(cue)cue.remove();
  var divider=heroInner.querySelector('.hero-divider');if(divider)divider.remove();

  /* Keep the original couple photo from the repository. */
  var loveFrame=loveInner.querySelector('.art-frame');
  if(loveFrame){
    loveFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
    var img=loveFrame.querySelector('img');
    if(!img){img=document.createElement('img');loveFrame.insertBefore(img,loveFrame.firstChild)}
    img.src='/assets/couple-photo.svg';img.alt='My favorite person';img.draggable=false;
  }

  /* Replace the old illustrated memory with the repository scratch-card photo. */
  if(memory){
    var frame=memory.querySelector('.memory-frame');
    if(frame){
      frame.querySelectorAll('svg').forEach(function(n){n.remove()});
      var scratch=document.createElement('img');
      scratch.id='my-scratch-photo';scratch.src='/assets/scratch-photo.jpg';
      scratch.alt='Our special memory';scratch.draggable=false;frame.appendChild(scratch);
    }
  }

  /* Only ONE navigation pair for this entire combined part. */
  function addBack(){
    var b=document.createElement('button');b.type='button';b.className='my-fix-back';b.textContent='← Go Back';
    b.addEventListener('click',function(){show(0)});loveInner.insertBefore(b,loveInner.firstChild);
  }
  function addNext(){
    var b=document.createElement('button');b.type='button';b.className='my-fix-next';b.textContent='Continue ♡';
    b.addEventListener('click',function(){show(2)});loveInner.appendChild(b);
  }
  addBack();addNext();

  var stages=[{section:hero},{section:love},{section:quote},{section:deep},{section:final}];
  var unique=[hero,love,quote,deep,final];
  function innerFor(i){return i===0?heroInner:i===1?loveInner:i===2?quoteInner:i===3?deepInner:finalInner}
  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    var active=stages[i].section;
    unique.forEach(function(s){
      var on=s===active;s.classList.toggle('my-fix-active',on);s.style.display=on?'flex':'none';
    });
    innerFor(i).querySelectorAll('.rv').forEach(function(n){n.classList.add('rv-in')});
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }
  document.body.classList.add('my-flow-fix');show(0);
})();
</script>`;

    html = html.replace('</head>', css + '\n</head>');
    html = html.replace('</body>', script + '\n</body>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (err) { res.status(500).send('Website error'); }
};
