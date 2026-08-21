const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-flow-fix">
/* One clean screen at a time */
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-flow-fix{overflow-y:auto!important}
body.my-flow-fix #world>section{display:none!important}
body.my-flow-fix #world>section.my-fix-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:center!important;justify-content:center!important;padding:42px 0 92px!important}
.my-fix-inner{width:min(92vw,900px);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
.my-fix-inner>*{margin-left:auto!important;margin-right:auto!important}
.my-fix-back,.my-fix-next{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;cursor:pointer;min-height:50px;padding:14px 28px;font:500 10.5px var(--sans);letter-spacing:.22em;text-transform:uppercase;transition:transform .25s ease,box-shadow .25s ease}
.my-fix-back{order:0;align-self:center!important;margin:0 0 28px!important;color:#96505F;background:rgba(255,249,246,.7);border:1px solid rgba(150,80,95,.25);box-shadow:0 10px 25px -18px rgba(74,39,50,.45)}
.my-fix-back:hover{transform:translateX(-3px)}
.my-fix-next{order:99;margin-top:36px!important;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);animation:myFixPulse 2.2s ease-in-out infinite}
.my-fix-next:hover{transform:translateY(-2px) scale(1.025)}
@keyframes myFixPulse{0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.95)}50%{box-shadow:0 24px 48px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}
/* Match the reference: large centered photo first, then centered text */
body.my-flow-fix #my-fix-love .split,body.my-flow-fix #my-fix-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important;gap:28px!important}
body.my-flow-fix #my-fix-love .art-col,body.my-flow-fix #my-fix-quote .art-col{order:1!important;width:min(88vw,430px)!important;margin:0 auto!important}
body.my-flow-fix #my-fix-love .art-card,body.my-flow-fix #my-fix-quote .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-flow-fix #my-fix-love .art-frame,body.my-flow-fix #my-fix-quote .art-frame{aspect-ratio:291/348!important}
body.my-flow-fix #my-fix-love .art-frame img,body.my-flow-fix #my-fix-quote .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:4px!important}
body.my-flow-fix #my-fix-love .stack,body.my-flow-fix #my-fix-quote .stack{order:2!important;width:100%!important;max-width:760px!important;text-align:center!important;margin:0 auto!important}
body.my-flow-fix .body-copy{font-size:clamp(16px,1.25vw,20px)!important;line-height:1.82!important;max-width:62ch!important}
body.my-flow-fix #my-fix-love .h-serif{font-size:clamp(30px,5.4vw,58px)!important;line-height:1.18!important}
body.my-flow-fix #my-fix-love .script{font-size:clamp(36px,5.5vw,62px)!important}
body.my-flow-fix #my-fix-love .pull-quote{font-size:clamp(16px,1.35vw,21px)!important;line-height:1.7!important;border-left:0!important;border-top:2px solid var(--pink)!important;padding:20px 0 0!important;margin-top:8px!important}
body.my-flow-fix #my-fix-quote .big-quote{font-size:clamp(34px,6vw,64px)!important;line-height:1.25!important}
body.my-flow-fix #my-fix-deep .h-serif{font-size:clamp(34px,6vw,64px)!important}
body.my-flow-fix #my-fix-deep .body-copy,body.my-flow-fix #my-fix-final .body-copy{font-size:clamp(16px,1.25vw,20px)!important}
body.my-flow-fix #my-fix-final .h-serif{font-size:clamp(40px,8vw,94px)!important}
body.my-flow-fix #giftSection.my-fix-active{padding-top:38px!important}
body.my-flow-fix #my-fix-gift #giftStage{height:clamp(330px,45vh,480px)!important}
body.my-flow-fix #my-fix-gift #gift{transform:scale(1.12)!important}
body.my-flow-fix #my-fix-memory .memory-wrap{width:min(90vw,520px)!important;margin:20px auto 0!important}
body.my-flow-fix #my-fix-memory .memory-card{width:100%!important;padding:15px 15px 22px!important}
body.my-flow-fix #my-fix-memory .memory-frame img{width:100%!important;height:100%!important;object-fit:cover!important}
body.my-flow-fix #my-fix-proposal .q-script{font-size:clamp(46px,8vw,94px)!important}
body.my-flow-fix #my-fix-proposal .arena{height:auto!important;min-height:180px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:22px!important;margin:24px auto 0!important}
body.my-flow-fix #my-fix-proposal .slot{position:static!important;transform:none!important;margin:0!important}
body.my-flow-fix #my-fix-proposal .btn{font-size:13px!important;padding:17px 30px!important}
.my-fix-state-controls{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%!important;margin-top:26px!important}
.my-fix-state-controls .my-fix-back{margin-bottom:0!important}
.my-fix-state-controls .my-fix-next{margin-top:24px!important}
@media(max-width:720px){
 body.my-flow-fix #world>section.my-fix-active{padding:34px 0 76px!important}
 .my-fix-inner{width:min(92vw,560px)!important}
 .my-fix-back{min-height:48px;padding:13px 25px;margin-bottom:22px!important}
 .my-fix-next{min-height:54px;padding:16px 34px;margin-top:30px!important}
 body.my-flow-fix #my-fix-love .art-col,body.my-flow-fix #my-fix-quote .art-col{width:min(88vw,410px)!important}
 body.my-flow-fix #my-fix-love .split,body.my-flow-fix #my-fix-quote .split{gap:24px!important}
 body.my-flow-fix #my-fix-love .stack,body.my-flow-fix #my-fix-quote .stack{padding-inline:2px!important}
}
</style>`;

    const script = String.raw`<script id="myyellow-flow-fix-script">
(function(){
  'use strict';
  var world=document.getElementById('world');
  if(!world)return;
  var sections=[].slice.call(world.children).filter(function(el){return el.tagName==='SECTION';});
  var hero=document.getElementById('hero');
  var giftSection=document.getElementById('giftSection');
  var deep=document.getElementById('deep');
  var final=document.getElementById('final');
  var love=sections.find(function(s){return !s.id&&s.querySelector('.pull-quote')&&s.querySelector('.art-card');});
  var quote=sections.find(function(s){return !s.id&&s.querySelector('.big-quote');});
  if(!hero||!giftSection||!deep||!final||!love||!quote)return;

  var stages=[
    {section:hero,key:'hero'},
    {section:love,key:'love'},
    {section:giftSection,key:'gift'},
    {section:giftSection,key:'memory'},
    {section:giftSection,key:'proposal'},
    {section:quote,key:'quote'},
    {section:deep,key:'deep'},
    {section:final,key:'final'}
  ];
  var unique=[hero,love,giftSection,quote,deep,final];

  function makeInner(section,id){
    var old=section.querySelector(':scope > .my-fix-inner');
    if(old)return old;
    var inner=document.createElement('div');
    inner.className='my-fix-inner';inner.id=id;
    while(section.firstChild)inner.appendChild(section.firstChild);
    section.appendChild(inner);
    return inner;
  }
  var heroInner=makeInner(hero,'my-fix-hero');
  var loveInner=makeInner(love,'my-fix-love');
  var giftInner=makeInner(giftSection,'my-fix-gift');
  var quoteInner=makeInner(quote,'my-fix-quote');
  var deepInner=makeInner(deep,'my-fix-deep');
  var finalInner=makeInner(final,'my-fix-final');

  var cue=heroInner.querySelector('.scroll-cue');if(cue)cue.remove();
  var divider=heroInner.querySelector('.hero-divider');if(divider)divider.remove();

  /* Restore the exact couple photo shown in the user's reference screenshot. */
  var PHOTO='data:image/jpeg;base64,IMAGE_DATA_PLACEHOLDER';
  var loveFrame=loveInner.querySelector('.art-frame');
  if(loveFrame){
    var oldGlare=loveFrame.querySelector('.glare');
    loveFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
    var img=loveFrame.querySelector('img');
    if(!img){img=document.createElement('img');loveFrame.insertBefore(img,loveFrame.firstChild);}
    img.src=PHOTO;img.alt='My favorite person';img.draggable=false;
  }

  var giftBlock=document.getElementById('giftBlock');
  var memory=document.getElementById('memory');
  var proposal=document.getElementById('proposal');
  function setGiftState(key){
    if(giftBlock)giftBlock.style.display=key==='gift'?'block':'none';
    if(memory){memory.style.display=key==='memory'?'block':'none';memory.style.opacity='1';memory.style.filter='none';memory.style.transform='none';}
    if(proposal){proposal.style.display=key==='proposal'?'block':'none';proposal.style.opacity='1';proposal.style.filter='none';proposal.style.transform='none';}
  }

  function addBack(inner,index){
    var b=document.createElement('button');b.type='button';b.className='my-fix-back';b.textContent='← Go Back';
    b.addEventListener('click',function(){show(index-1)});
    inner.insertBefore(b,inner.firstChild);
  }
  function addNext(inner,index){
    var b=document.createElement('button');b.type='button';b.className='my-fix-next';b.textContent='Continue ♡';
    b.addEventListener('click',function(){show(index+1)});
    inner.appendChild(b);
  }

  /* Exactly one Back + one Continue per visual part. */
  addNext(heroInner,0);
  addBack(loveInner,1);addNext(loveInner,1);
  addBack(quoteInner,5);addNext(quoteInner,5);
  addBack(deepInner,6);addNext(deepInner,6);
  addBack(finalInner,7);

  var giftControls={};
  function addGiftControls(key,index){
    if(giftControls[key])return;
    var block=key==='gift'?giftBlock:key==='memory'?memory:proposal;
    if(!block)return;
    var holder=document.createElement('div');holder.className='my-fix-state-controls';
    var back=document.createElement('button');back.type='button';back.className='my-fix-back';back.textContent='← Go Back';
    back.addEventListener('click',function(){show(index-1)});holder.appendChild(back);
    if(index<stages.length-1){
      var next=document.createElement('button');next.type='button';next.className='my-fix-next';next.textContent='Continue ♡';
      next.addEventListener('click',function(){show(index+1)});holder.appendChild(next);
    }
    block.appendChild(holder);giftControls[key]=holder;
  }
  addGiftControls('gift',2);addGiftControls('memory',3);addGiftControls('proposal',4);

  function stateInner(i){var s=stages[i].section;return s===hero?heroInner:s===love?loveInner:s===giftSection?giftInner:s===quote?quoteInner:s===deep?deepInner:finalInner;}
  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    var active=stages[i].section;
    unique.forEach(function(s){var on=s===active;s.classList.toggle('my-fix-active',on);s.style.display=on?'flex':'none';});
    setGiftState(stages[i].key);
    var inner=stateInner(i);
    inner.querySelectorAll('.rv').forEach(function(n){n.classList.add('rv-in')});
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }

  document.body.classList.add('my-flow-fix');
  show(0);
})();
</script>`;

    const photo = `data:image/jpeg;base64,IMAGE_DATA_PLACEHOLDER`;
    const fixedScript = script.replace('data:image/jpeg;base64,IMAGE_DATA_PLACEHOLDER', photo);
    html = html.replace('</head>', css + '\n</head>');
    html = html.replace('</body>', fixedScript + '\n</body>');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('Website error');
  }
};
