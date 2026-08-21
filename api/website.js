const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-page-flow">
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-page-flow{overflow-y:auto!important}
body.my-page-flow #world>section{display:none!important}
body.my-page-flow #world>section.my-page-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:flex-start!important;justify-content:center!important;padding:28px 0 92px!important}
body.my-page-flow #world>section#hero.my-page-active{align-items:center!important;min-height:100svh!important;height:100svh!important;padding:0!important}
.my-page-inner{width:min(92vw,900px);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
.my-page-inner>*{margin-left:auto!important;margin-right:auto!important}
.my-page-back,.my-page-next{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:999px;cursor:pointer;min-height:50px;padding:14px 29px;font:500 10.5px var(--sans);letter-spacing:.22em;text-transform:uppercase;transition:transform .25s ease,box-shadow .25s ease}
.my-page-back{align-self:center!important;margin:0 0 28px!important;color:#96505F;background:rgba(255,249,246,.82);border:1px solid rgba(150,80,95,.25);box-shadow:0 10px 25px -18px rgba(74,39,50,.45)}
.my-page-next{margin-top:42px!important;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);border:0;box-shadow:0 18px 38px -16px rgba(220,151,165,.95);animation:myPagePulse 2.2s ease-in-out infinite}
.my-page-back:hover{transform:translateX(-3px)}
.my-page-next:hover{transform:translateY(-2px) scale(1.025)}
@keyframes myPagePulse{0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.95)}50%{box-shadow:0 24px 48px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}
body.my-page-flow #my-page-love .split{display:flex!important;flex-direction:column!important;align-items:center!important;gap:28px!important;width:100%!important}
body.my-page-flow #my-page-love .art-col{width:min(88vw,430px)!important;margin:0 auto!important;order:1!important}
body.my-page-flow #my-page-love .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-page-flow #my-page-love .art-frame{aspect-ratio:291/348!important;overflow:hidden!important}
body.my-page-flow #my-page-love .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:5px!important}
body.my-page-flow #my-page-love .stack{width:100%!important;max-width:760px!important;order:2!important;text-align:center!important;margin:0 auto!important}
body.my-page-flow .body-copy{font-size:clamp(16px,1.25vw,20px)!important;line-height:1.82!important;max-width:62ch!important}
body.my-page-flow #my-page-love .h-serif{font-size:clamp(30px,5.4vw,58px)!important;line-height:1.18!important}
body.my-page-flow #my-page-love .pull-quote{font-size:clamp(16px,1.35vw,21px)!important;line-height:1.7!important;border-left:0!important;border-top:2px solid var(--pink)!important;padding:20px 0 0!important;margin-top:8px!important}
body.my-page-flow #my-page-gift .wrap{width:100%!important}
body.my-page-flow #my-page-gift #giftBlock{width:100%!important;margin:0 auto!important;padding-top:12px!important}
body.my-page-flow #my-page-gift #giftStage{height:clamp(330px,48vh,500px)!important}
body.my-page-flow #my-page-gift #gift{transform:scale(1.15)!important}
body.my-page-flow #my-page-gift #memory{width:100%!important;margin-top:48px!important;padding-top:38px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-page-flow #my-page-gift .memory-wrap{width:min(90vw,520px)!important;margin:18px auto 0!important}
body.my-page-flow #my-page-gift .memory-card{width:100%!important;padding:15px 15px 22px!important}
body.my-page-flow #my-page-gift .memory-frame{width:100%!important;aspect-ratio:auto!important;overflow:hidden!important;cursor:pointer!important;touch-action:manipulation!important}
body.my-page-flow #my-page-gift #my-scratch-photo{display:block!important;width:100%!important;height:auto!important;max-height:none!important;object-fit:contain!important;border-radius:5px!important;cursor:pointer!important;pointer-events:auto!important}
body.my-page-flow #my-page-gift #proposal{width:100%!important;margin-top:48px!important;padding-top:38px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-page-flow #my-page-gift #proposal .q-script{font-size:clamp(46px,8vw,94px)!important}
body.my-page-flow #my-page-gift #proposal .arena{height:auto!important;min-height:180px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:22px!important;margin:24px auto 0!important}
body.my-page-flow #my-page-gift #proposal .slot{position:static!important;transform:none!important;margin:0!important}
body.my-page-flow #my-page-gift #proposal .btn{font-size:13px!important;padding:17px 30px!important}
body.my-page-flow #my-page-gift #proposal.my-proposal-hidden{display:none!important}
body.my-page-flow #my-page-gift #proposal.my-proposal-revealed{display:block!important;animation:giftProposalReveal .75s ease both}
@keyframes giftProposalReveal{from{opacity:0;transform:translateY(28px);filter:blur(7px)}to{opacity:1;transform:none;filter:none}}
body.my-page-flow #my-page-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;gap:28px!important}
body.my-page-flow #my-page-quote .art-col{width:min(88vw,430px)!important;margin:0 auto!important}
body.my-page-flow #my-page-quote .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-page-flow #my-page-quote .art-frame{aspect-ratio:291/348!important;overflow:hidden!important}
body.my-page-flow #my-page-quote .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:5px!important}
body.my-page-flow #my-page-quote .stack{width:100%!important;max-width:760px!important;text-align:center!important}
body.my-page-flow #my-page-quote .big-quote{font-size:clamp(34px,6vw,64px)!important;line-height:1.25!important}
body.my-page-flow #my-page-deep .h-serif{font-size:clamp(34px,6vw,64px)!important}
body.my-page-flow #my-page-deep .body-copy,body.my-page-flow #my-page-final .body-copy{font-size:clamp(16px,1.25vw,20px)!important}
body.my-page-flow #my-page-final .h-serif{font-size:clamp(40px,8vw,94px)!important}
@media(max-width:720px){
 body.my-page-flow #world>section.my-page-active{padding:26px 0 70px!important}
 body.my-page-flow #world>section#hero.my-page-active{padding:0!important}
 .my-page-inner{width:min(92vw,560px)!important}
 .my-page-back{min-height:48px;padding:13px 25px;margin-bottom:22px!important}
 .my-page-next{min-height:54px;padding:16px 34px;margin-top:34px!important}
 body.my-page-flow #my-page-love .art-col,body.my-page-flow #my-page-quote .art-col{width:min(88vw,410px)!important}
 body.my-page-flow #my-page-gift #memory,body.my-page-flow #my-page-gift #proposal{margin-top:40px!important;padding-top:30px!important}
}
</style>`;

    const script = String.raw`<script id="myyellow-page-flow-script">
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

  function makeInner(section,id){
    var old=section.querySelector(':scope > .my-page-inner');
    if(old)return old;
    var inner=document.createElement('div');
    inner.className='my-page-inner';inner.id=id;
    while(section.firstChild)inner.appendChild(section.firstChild);
    section.appendChild(inner);
    return inner;
  }

  var heroInner=makeInner(hero,'my-page-hero');
  var loveInner=makeInner(love,'my-page-love');
  var giftInner=makeInner(giftSection,'my-page-gift');
  var quoteInner=makeInner(quote,'my-page-quote');
  var deepInner=makeInner(deep,'my-page-deep');
  var finalInner=makeInner(final,'my-page-final');

  var cue=heroInner.querySelector('.scroll-cue');if(cue)cue.remove();
  var divider=heroInner.querySelector('.hero-divider');if(divider)divider.remove();

  /* FIRST memory section: keep the scratch photo here. */
  var loveFrame=loveInner.querySelector('.art-frame');
  if(loveFrame){
    loveFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
    var loveImg=loveFrame.querySelector('img');
    if(!loveImg){loveImg=document.createElement('img');loveFrame.insertBefore(loveImg,loveFrame.firstChild)}
    loveImg.src='/assets/scratch-photo.jpg';
    loveImg.alt='Our special memory';
    loveImg.draggable=false;
  }

  /* CORRECT TARGET: this is the section that comes AFTER the completed
     "Will you be my love?" / proposal sequence. */
  var quoteFrame=quoteInner.querySelector('.art-frame');
  if(quoteFrame){
    quoteFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
    var quoteImg=quoteFrame.querySelector('img');
    if(!quoteImg){quoteImg=document.createElement('img');quoteFrame.insertBefore(quoteImg,quoteFrame.firstChild)}
    quoteImg.src='/assets/her%20image.png';
    quoteImg.alt='Her beautiful photo';
    quoteImg.draggable=false;
  }

  var giftBlock=document.getElementById('giftBlock');
  var memory=document.getElementById('memory');
  var proposal=document.getElementById('proposal');
  var giftWrap=giftInner.querySelector('.wrap');
  if(giftWrap){
    if(giftBlock)giftWrap.appendChild(giftBlock);
    if(memory)giftWrap.appendChild(memory);
    if(proposal)giftWrap.appendChild(proposal);
  }

  var memoryFrame=null;
  var memoryPhoto=null;
  if(memory){
    memoryFrame=memory.querySelector('.memory-frame');
    if(memoryFrame){
      memoryFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
      memoryPhoto=memoryFrame.querySelector('#my-scratch-photo');
      if(!memoryPhoto){memoryPhoto=document.createElement('img');memoryPhoto.id='my-scratch-photo';memoryFrame.appendChild(memoryPhoto)}
      memoryPhoto.src='/assets/scratch-photo.jpg';
      memoryPhoto.alt='Our special memory';
      memoryPhoto.draggable=false;
    }
  }

  if(proposal)proposal.classList.add('my-proposal-hidden');
  var proposalShown=false;
  function revealProposal(){
    if(!proposal||proposalShown)return;
    proposalShown=true;
    proposal.classList.remove('my-proposal-hidden');
    proposal.classList.add('my-proposal-revealed');
    requestAnimationFrame(function(){proposal.scrollIntoView({behavior:'smooth',block:'center'});});
  }
  if(memoryFrame){
    memoryFrame.addEventListener('click',function(e){if(e.target.closest('button,a'))return;revealProposal();});
    memoryFrame.addEventListener('touchend',function(e){if(e.target.closest('button,a'))return;revealProposal();},{passive:true});
  }
  if(memoryPhoto){
    memoryPhoto.addEventListener('click',revealProposal);
    memoryPhoto.addEventListener('touchend',revealProposal,{passive:true});
  }

  var stages=[hero,love,giftSection,quote,deep,final];
  var inners=[heroInner,loveInner,giftInner,quoteInner,deepInner,finalInner];
  function button(cls,text,handler){
    var b=document.createElement('button');
    b.type='button';b.className=cls;b.textContent=text;b.addEventListener('click',handler);return b;
  }
  heroInner.appendChild(button('my-page-next','Continue ♡',function(){show(1)}));
  loveInner.insertBefore(button('my-page-back','← Go Back',function(){show(0)}),loveInner.firstChild);
  loveInner.appendChild(button('my-page-next','Continue ♡',function(){show(2)}));
  giftInner.insertBefore(button('my-page-back','← Go Back',function(){show(1)}),giftInner.firstChild);
  giftInner.appendChild(button('my-page-next','Continue ♡',function(){show(3)}));
  quoteInner.insertBefore(button('my-page-back','← Go Back',function(){show(2)}),quoteInner.firstChild);
  quoteInner.appendChild(button('my-page-next','Continue ♡',function(){show(4)}));
  deepInner.insertBefore(button('my-page-back','← Go Back',function(){show(3)}),deepInner.firstChild);
  deepInner.appendChild(button('my-page-next','Continue ♡',function(){show(5)}));
  finalInner.insertBefore(button('my-page-back','← Go Back',function(){show(4)}),finalInner.firstChild);

  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    stages.forEach(function(section,index){
      var active=index===i;
      section.classList.toggle('my-page-active',active);
      section.style.display=active?'flex':'none';
    });
    inners[i].querySelectorAll('.rv').forEach(function(n){n.classList.add('rv-in')});
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }

  document.body.classList.add('my-page-flow');
  show(0);
})();
</script>`;

    html=html.replace('</head>',css+'\n</head>');
    html=html.replace('</body>',script+'\n</body>');
    res.setHeader('Content-Type','text/html; charset=utf-8');
    res.setHeader('Cache-Control','no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch(err) {
    res.status(500).send('Website error');
  }
};
