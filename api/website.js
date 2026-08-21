const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-flow-v2-css">
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-flow-v2{overflow-y:auto!important}
body.my-flow-v2 #world>section{display:none!important}
body.my-flow-v2 #world>section.my-v2-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:center!important;justify-content:center!important;margin:0!important;padding:58px 0 112px!important}
body.my-flow-v2 #world>#giftSection.my-v2-active{padding:46px 0 104px!important}
body.my-flow-v2 #world>#deep.my-v2-active{background:#4A2732!important;color:#FADED2!important;padding:54px 0 104px!important}
body.my-flow-v2 #world>#final.my-v2-active{padding-bottom:74px!important}
.my-v2-inner{width:min(92vw,900px);margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center}
.my-v2-inner>*{margin-left:auto!important;margin-right:auto!important}
.my-v2-back,.my-v2-next{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;cursor:pointer;min-height:52px;padding:15px 30px;font:500 11px var(--sans);letter-spacing:.22em;text-transform:uppercase;transition:transform .25s ease,box-shadow .25s ease}
.my-v2-back{align-self:flex-start!important;margin:0 0 22px!important;color:#96505F;background:rgba(255,249,246,.52);border:1px solid rgba(150,80,95,.28);box-shadow:0 10px 24px -18px rgba(74,39,50,.4)}
.my-v2-back:hover{transform:translateX(-3px)}
.my-v2-next{margin-top:34px!important;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);animation:myV2Pulse 2.2s ease-in-out infinite}
.my-v2-next:hover{transform:translateY(-2px) scale(1.025)}
.my-v2-next:active,.my-v2-back:active{transform:scale(.97)}
@keyframes myV2Pulse{0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.95)}50%{box-shadow:0 24px 48px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}
body.my-flow-v2 #my-v2-love .art-col,body.my-flow-v2 #my-v2-quote .art-col{width:min(92vw,520px)!important}
body.my-flow-v2 #my-v2-love .art-card,body.my-flow-v2 #my-v2-quote .art-card{width:100%!important;padding:14px 14px 20px!important}
body.my-flow-v2 #my-v2-love .art-frame,body.my-flow-v2 #my-v2-quote .art-frame{aspect-ratio:4/5!important}
body.my-flow-v2 #my-v2-love .art-frame img,body.my-flow-v2 #my-v2-quote .art-frame img{width:100%!important;height:100%!important;object-fit:cover!important;border-radius:6px}
body.my-flow-v2 .body-copy{font-size:clamp(17px,1.35vw,21px)!important;line-height:1.82!important;max-width:60ch!important}
body.my-flow-v2 #my-v2-love .h-serif{font-size:clamp(30px,5vw,58px)!important;line-height:1.2!important}
body.my-flow-v2 #my-v2-love .script{font-size:clamp(36px,5vw,62px)!important}
body.my-flow-v2 #my-v2-love .stack{width:100%;max-width:820px!important;margin-top:20px!important}
body.my-flow-v2 #my-v2-love .pull-quote{font-size:clamp(17px,1.45vw,22px)!important;line-height:1.7!important}
body.my-flow-v2 #my-v2-quote .big-quote{font-size:clamp(34px,5.8vw,62px)!important;line-height:1.28!important}
body.my-flow-v2 #my-v2-deep .h-serif{font-size:clamp(34px,5.8vw,64px)!important}
body.my-flow-v2 #my-v2-deep .body-copy{font-size:clamp(17px,1.35vw,21px)!important}
body.my-flow-v2 #my-v2-final .h-serif{font-size:clamp(40px,7.6vw,92px)!important}
body.my-flow-v2 #my-v2-final .body-copy{font-size:clamp(17px,1.35vw,21px)!important}
body.my-flow-v2 #giftSection .my-v2-inner{width:min(92vw,900px)}
body.my-flow-v2 #my-v2-gift #giftStage{height:clamp(330px,45vh,480px)!important;margin-top:0!important}
body.my-flow-v2 #my-v2-gift #gift{transform:scale(1.18)!important}
body.my-flow-v2 #my-v2-gift #giftCap{font-size:clamp(14px,1.2vw,17px)!important;margin-top:2px!important}
body.my-flow-v2 #my-v2-memory .memory-wrap{width:min(92vw,520px)!important;margin:20px auto 0!important}
body.my-flow-v2 #my-v2-memory .memory-card{width:100%!important;padding:15px 15px 22px!important}
body.my-flow-v2 #my-v2-memory .memory-frame img{width:100%!important;height:100%!important;object-fit:cover!important}
body.my-flow-v2 #my-v2-proposal .q-script{font-size:clamp(46px,7.8vw,92px)!important}
body.my-flow-v2 #my-v2-proposal .arena{height:auto!important;min-height:190px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:28px!important;margin:22px auto 0!important}
body.my-flow-v2 #my-v2-proposal .slot{position:static!important;transform:none!important;margin:0!important}
body.my-flow-v2 #my-v2-proposal .btn{font-size:13px!important;padding:17px 34px!important}
body.my-flow-v2 #my-v2-love .split,body.my-flow-v2 #my-v2-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%!important;gap:24px!important}
body.my-flow-v2 #my-v2-love .art-col,body.my-flow-v2 #my-v2-quote .art-col{order:1!important;margin:0 auto!important}
body.my-flow-v2 #my-v2-love .stack,body.my-flow-v2 #my-v2-quote .stack{order:2!important;text-align:center!important}
body.my-flow-v2 #my-v2-love .pull-quote{border-left:0!important;border-top:2px solid var(--pink);padding:20px 0 0!important}
@media(min-width:900px){
 body.my-flow-v2 #my-v2-love .split,body.my-flow-v2 #my-v2-quote .split{display:grid!important;grid-template-columns:minmax(380px,520px) minmax(0,1fr)!important;gap:64px!important;align-items:center!important}
 body.my-flow-v2 #my-v2-love .art-col,body.my-flow-v2 #my-v2-quote .art-col{width:100%!important}
 body.my-flow-v2 #my-v2-love .stack,body.my-flow-v2 #my-v2-quote .stack{text-align:left!important;margin-top:0!important}
 body.my-flow-v2 #my-v2-love .pull-quote{border-left:2px solid var(--pink)!important;border-top:0!important;padding:0 0 0 24px!important}
}
@media(max-width:720px){
 body.my-flow-v2 #world>section.my-v2-active{padding:54px 0 96px!important}
 .my-v2-back{align-self:center!important;margin-bottom:18px!important}
 .my-v2-next{min-height:54px;padding:16px 34px;margin-top:30px!important}
 body.my-flow-v2 #my-v2-love .art-col,body.my-flow-v2 #my-v2-quote .art-col{width:min(92vw,430px)!important}
 body.my-flow-v2 #my-v2-love .art-card,body.my-flow-v2 #my-v2-quote .art-card{padding:11px 11px 17px!important}
 body.my-flow-v2 #my-v2-gift #gift{transform:scale(1.08)!important}
 body.my-flow-v2 #my-v2-proposal .arena{gap:18px!important;min-height:175px!important}
 body.my-flow-v2 #my-v2-proposal .btn{padding:16px 25px!important}
}
</style>`;

    const script = String.raw`<script id="myyellow-flow-v2-script">
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
    var existing=section.querySelector(':scope > .my-v2-inner');
    if(existing)return existing;
    var inner=document.createElement('div');inner.className='my-v2-inner';inner.id=id;
    while(section.firstChild)inner.appendChild(section.firstChild);
    section.appendChild(inner);
    return inner;
  }
  function stateInner(i){
    var s=stages[i].section;
    return s===hero?heroInner:s===love?loveInner:s===giftSection?giftInner:s===quote?quoteInner:s===deep?deepInner:finalInner;
  }
  function addBack(inner,i){
    var b=document.createElement('button');b.type='button';b.className='my-v2-back';b.textContent='← Go Back';
    b.addEventListener('click',function(){if(i>0)show(i-1)});
    inner.insertBefore(b,inner.firstChild);
  }
  function addNext(inner,i){
    if(i>=stages.length-1)return;
    var b=document.createElement('button');b.type='button';b.className='my-v2-next';b.textContent='Continue ♡';
    b.addEventListener('click',function(){show(i+1)});
    inner.appendChild(b);
  }
  function resetVisuals(inner){inner.querySelectorAll('.rv').forEach(function(n){n.classList.add('rv-in')});}

  document.body.classList.add('my-flow-v2');
  unique.forEach(function(s){s.classList.remove('my-v2-active');s.style.display='none'});

  var heroInner=makeInner(hero,'my-v2-hero');
  var loveInner=makeInner(love,'my-v2-love');
  var giftInner=makeInner(giftSection,'my-v2-gift');
  var quoteInner=makeInner(quote,'my-v2-quote');
  var deepInner=makeInner(deep,'my-v2-deep');
  var finalInner=makeInner(final,'my-v2-final');

  var cue=heroInner.querySelector('.scroll-cue');if(cue)cue.remove();
  var divider=heroInner.querySelector('.hero-divider');if(divider)divider.remove();

  var giftBlock=document.getElementById('giftBlock');
  var memory=document.getElementById('memory');
  var proposal=document.getElementById('proposal');
  function setGiftState(key){
    if(giftBlock)giftBlock.style.display=key==='gift'?'block':'none';
    if(memory){memory.style.display=key==='memory'?'block':'none';if(key==='memory'){memory.style.opacity='1';memory.style.filter='none';memory.style.transform='none';}}
    if(proposal){proposal.style.display=key==='proposal'?'block':'none';if(key==='proposal'){proposal.style.opacity='1';proposal.style.filter='none';proposal.style.transform='none';}}
  }

  var heroNext=document.createElement('button');heroNext.type='button';heroNext.className='my-v2-next';heroNext.textContent='Continue ♡';heroNext.addEventListener('click',function(){show(1)});heroInner.appendChild(heroNext);

  function addSectionControls(inner,index){
    if(index>0)addBack(inner,index);
    if(index<stages.length-1)addNext(inner,index);
  }
  addSectionControls(loveInner,1);
  addSectionControls(quoteInner,5);
  addSectionControls(deepInner,6);
  addSectionControls(finalInner,7);

  var giftControls={};
  function ensureGiftControls(key,index){
    if(giftControls[key])return;
    var block=key==='gift'?giftBlock:key==='memory'?memory:proposal;
    if(!block)return;
    var holder=document.createElement('div');holder.className='my-v2-state-controls';holder.style.display='flex';holder.style.flexDirection='column';holder.style.alignItems='center';holder.style.width='100%';holder.style.marginTop='14px';
    var back=document.createElement('button');back.type='button';back.className='my-v2-back';back.textContent='← Go Back';back.addEventListener('click',function(){show(index-1)});holder.appendChild(back);
    if(index<stages.length-1){var next=document.createElement('button');next.type='button';next.className='my-v2-next';next.textContent='Continue ♡';next.addEventListener('click',function(){show(index+1)});holder.appendChild(next);}
    block.appendChild(holder);giftControls[key]=holder;
  }
  ensureGiftControls('gift',2);ensureGiftControls('memory',3);ensureGiftControls('proposal',4);

  [loveInner,quoteInner].forEach(function(inner){
    var split=inner.querySelector('.split');
    if(split){var art=split.querySelector('.art-col');var stack=split.querySelector('.stack');if(art)split.appendChild(art);if(stack)split.appendChild(stack);}
    inner.querySelectorAll('.art-frame img').forEach(function(img){img.style.width='100%';img.style.height='100%';img.style.objectFit='cover';});
  });

  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    var active=stages[i].section;
    unique.forEach(function(s){var on=s===active;s.classList.toggle('my-v2-active',on);s.style.display=on?'flex':'none';});
    setGiftState(stages[i].key);
    resetVisuals(stateInner(i));
    window.scrollTo(0,0);
  }
  show(0);
})();
</script>`;

    html = html.replace('</head>', css + '\n</head>');
    html = html.replace('</body>', script + '\n</body>');

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (err) {
    res.status(500).send('Website error');
  }
};
