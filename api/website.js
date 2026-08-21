const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-page-polish">
/* MyYellow 10-change layout polish */
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-flow-mode{overflow-y:auto!important}
body.my-flow-mode #world{min-height:100svh}
body.my-flow-mode #world>section{display:none!important}
body.my-flow-mode #world>section.my-flow-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:center!important;justify-content:center!important;margin:0!important;padding:70px 0 116px!important}
body.my-flow-mode #world>#giftSection.my-flow-active{padding:72px 0 116px!important}
body.my-flow-mode #world>#deep.my-flow-active{background:#4A2732!important;padding:70px 0 116px!important}
body.my-flow-mode #world>#final.my-flow-active{padding-bottom:72px!important}
body.my-flow-mode #backdrop{position:fixed!important;inset:0!important}
body.my-flow-mode #world #endnote{display:none!important}
#my-flow-continue{display:inline-flex;align-items:center;justify-content:center;min-height:58px;padding:18px 42px;margin:30px auto 0;border:0;border-radius:999px;color:var(--cream);background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);font:500 11px var(--sans);letter-spacing:.24em;text-transform:uppercase;cursor:pointer;animation:myFlowPulse 2.2s ease-in-out infinite;transition:transform .3s ease}
#my-flow-continue:active{transform:scale(.96)}
@keyframes myFlowPulse{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px);box-shadow:0 24px 44px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}
.my-flow-content{width:min(92vw,820px);margin:0 auto;text-align:center}
.my-flow-content>*{margin-left:auto;margin-right:auto}
.my-flow-reveal{opacity:0;transform:translateY(24px) scale(.985);filter:blur(8px)}
.my-flow-reveal.my-flow-in{opacity:1;transform:none;filter:none;transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1),filter .75s ease}
#hero .hero-divider,#hero .scroll-cue{display:none!important}
#hero .hero-name{margin-bottom:24px}
#hero .heart-badge{margin-bottom:28px}
#hero .my-flow-content{display:flex;flex-direction:column;align-items:center}
#hero .my-flow-content .body-copy{text-align:center!important;max-width:44ch}
#hero .my-flow-content .sig{text-align:center!important}
#my-flow-love .art-card,#my-flow-quote .art-card{width:min(84vw,430px);margin:0 auto;padding:12px 12px 18px;background:#FFF9F6;border-radius:14px;box-shadow:0 30px 70px -34px rgba(74,39,50,.45)}
#my-flow-love .art-card .art-frame,#my-flow-quote .art-card .art-frame{aspect-ratio:4/5}
#my-flow-love .art-card svg,#my-flow-quote .art-card svg{width:100%;height:100%}
#my-flow-love .art-cap,#my-flow-quote .art-cap{font-size:28px;margin-top:12px}
#my-flow-love .stack,#my-flow-quote .stack{max-width:720px;margin:28px auto 0;text-align:center}
#my-flow-love .stack>*{margin-left:auto;margin-right:auto}
#my-flow-love .pull-quote{max-width:62ch;text-align:center;border-left:0;border-top:2px solid var(--pink);padding:18px 0 0}
#my-flow-love .my-flow-content,#my-flow-quote .my-flow-content{display:flex;flex-direction:column;align-items:center}
#my-flow-gift #giftStage{height:clamp(350px,48vh,510px);display:flex;align-items:center;justify-content:center;margin-top:-8px}
#my-flow-gift #gift{transform:scale(1.22);transform-origin:center}
#my-flow-gift #giftFloat{transform-origin:center}
#my-flow-gift #giftCap{margin-top:-4px}
#my-flow-gift #my-flow-continue{margin-top:18px}
#my-flow-memory #memory{display:block!important;opacity:1!important;filter:none!important;transform:none!important}
#my-flow-memory #memory .eyebrow{margin-bottom:18px}
#my-flow-memory .memory-wrap{width:min(88vw,500px);margin:0 auto}
#my-flow-memory .memory-card{width:100%;padding:14px 14px 20px;background:#FFF9F6;border:0;border-radius:16px;box-shadow:0 34px 76px -36px rgba(74,39,50,.48);transform:rotate(1.2deg)}
#my-flow-memory .memory-frame{aspect-ratio:4/5}
#my-flow-memory .memory-frame img{width:100%;height:100%;object-fit:cover}
#my-flow-memory .memory-card .art-cap{font-size:29px;margin-top:12px}
#my-flow-memory #memoryCard{cursor:default}
#my-flow-memory #my-flow-continue{margin-top:24px}
#my-flow-proposal .q-script{font-size:clamp(42px,8vw,92px);margin-bottom:18px}
#my-flow-proposal .arena{height:auto;min-height:190px;display:flex;align-items:center;justify-content:center;gap:28px;margin:18px auto 0}
#my-flow-proposal .slot{position:static!important;transform:none!important;margin:0!important}
#my-flow-proposal .proposal-message{display:none!important}
#my-flow-proposal #my-yes-result{display:none;margin:30px auto 0}
#my-flow-proposal .my-result-card{width:min(92vw,560px);margin:0 auto;padding:24px 24px 28px;border-radius:26px;background:rgba(255,249,246,.95);border:1px solid rgba(220,151,165,.45);box-shadow:0 28px 60px -30px rgba(74,39,50,.5)}
#my-flow-proposal .my-result-card h3{font-family:var(--script);font-weight:400;font-size:clamp(46px,8vw,82px);color:var(--pink);margin:0}
#my-flow-proposal .my-result-card p{margin:7px 0 0;color:rgba(74,39,50,.82);font-size:14px}
#my-flow-proposal .my-result-cat{display:block;width:132px;margin:0 auto -8px;animation:myCatPop .75s cubic-bezier(.2,.9,.2,1) both}
@keyframes myCatPop{0%{opacity:0;transform:translateY(24px) scale(.6)}70%{opacity:1;transform:translateY(-5px) scale(1.06)}100%{opacity:1;transform:none}}
#my-flow-quote .art-card{transform:rotate(1.4deg)}
#my-flow-quote .stack{max-width:720px}
#my-flow-quote .big-quote{font-size:clamp(30px,5vw,52px)}
#my-flow-deep{background:#4A2732!important;color:#FADED2!important;min-height:100svh!important}
#my-flow-deep .deep-layout{width:min(92vw,900px);margin:0 auto;text-align:center}
#my-flow-deep .deep-grid{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:18px;max-width:700px;margin:0 auto 34px}
#my-flow-deep .deep-polaroid{background:#FFF9F6;padding:9px 9px 14px;border-radius:7px;box-shadow:0 22px 45px -28px rgba(0,0,0,.55)}
#my-flow-deep .deep-polaroid:nth-child(1){transform:rotate(-4deg)}
#my-flow-deep .deep-polaroid:nth-child(2){transform:rotate(3deg)}
#my-flow-deep .deep-polaroid:nth-child(3){transform:rotate(2.5deg)}
#my-flow-deep .deep-polaroid:nth-child(4){transform:rotate(-3deg)}
#my-flow-deep .deep-polaroid img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:3px}
#my-flow-deep .deep-polaroid span{display:block;font-family:var(--script);font-size:18px;color:#96505F;padding-top:7px;line-height:1}
#my-flow-deep .deep-copy{max-width:720px;margin:0 auto}
#my-flow-deep .deep-copy .h-serif{color:#FADED2!important;font-size:clamp(32px,6vw,58px)}
#my-flow-deep .deep-copy .body-copy{color:rgba(250,222,210,.95)!important;max-width:58ch;margin-left:auto;margin-right:auto}
#my-flow-deep .deep-copy .gold-script{color:#E8C66A!important}
#my-flow-deep #my-flow-continue{margin-top:34px}
#my-flow-final .final-wrap{width:min(92vw,820px);margin:0 auto;text-align:center}
#my-flow-final #btnCelebrate{margin-top:34px}
@media(max-width:720px){
  body.my-flow-mode #world>section.my-flow-active{padding:62px 0 108px!important}
  #my-flow-love .art-card,#my-flow-quote .art-card{width:min(86vw,390px)}
  #my-flow-gift #giftStage{height:360px}
  #my-flow-gift #gift{transform:scale(1.12)}
  #my-flow-memory .memory-wrap{width:min(88vw,430px)}
  #my-flow-proposal .arena{gap:18px;min-height:170px}
  #my-flow-deep .deep-grid{gap:14px;max-width:92vw}
  #my-flow-deep .deep-polaroid{padding:7px 7px 11px}
  #my-flow-deep .deep-polaroid span{font-size:15px}
  #my-flow-continue{min-height:54px;padding:16px 34px}
}
@media(prefers-reduced-motion:reduce){#my-flow-continue{animation:none!important}.my-flow-reveal{opacity:1!important;transform:none!important;filter:none!important}}
</style>`;

    const script = String.raw`<script id="myyellow-flow-script">
(function(){
  'use strict';
  var root=document.getElementById('world');
  if(!root)return;
  var sections=[].slice.call(root.children).filter(function(el){return el.tagName==='SECTION';});
  var hero=document.getElementById('hero');
  var love=sections.find(function(s){return !s.id&&s.querySelector('.split')&&s.querySelector('.pull-quote')&&s.querySelector('.art-card');});
  var gift=document.getElementById('giftSection');
  var quote=sections.find(function(s){return !s.id&&s.querySelector('.big-quote');});
  var deep=document.getElementById('deep');
  var final=document.getElementById('final');
  if(!hero||!love||!gift||!quote||!deep||!final)return;

  var stages=[{el:hero,id:'hero'},{el:love,id:'love'},{el:gift,id:'gift'},{el:gift,id:'memory'},{el:gift,id:'proposal'},{el:quote,id:'quote'},{el:deep,id:'deep'},{el:final,id:'final'}];
  var current=0;
  var sharedNext=document.createElement('button');
  sharedNext.id='my-flow-continue';
  sharedNext.type='button';
  sharedNext.textContent='Continue ♡';

  function inner(id){var d=document.createElement('div');d.id=id;d.className='my-flow-content';return d}
  function reveal(container){var nodes=container.querySelectorAll('.my-flow-reveal');Array.prototype.forEach.call(nodes,function(n,i){n.classList.remove('my-flow-in');setTimeout(function(){n.classList.add('my-flow-in')},Math.min(i*80,360))})}
  function hideOriginalControls(){['giftBlock','memory','proposal'].forEach(function(id){var el=document.getElementById(id);if(el)el.style.display='none'});var old=document.getElementById('my-flow-continue');if(old&&old.parentNode)old.parentNode.removeChild(old)}
  hideOriginalControls();

  /* 1 — opening: centered, no scroll cue, one shared Continue. */
  hero.id='my-flow-hero';
  var hc=inner('hero-flow-inner');
  while(hero.firstChild)hc.appendChild(hero.firstChild);
  hero.appendChild(hc);
  var scrollCue=hc.querySelector('.scroll-cue');if(scrollCue)scrollCue.remove();
  var divider=hc.querySelector('.hero-divider');if(divider)divider.remove();
  hc.appendChild(sharedNext);

  /* 2 — photo/text section: scratch-photo first, text second, Continue third. */
  love.id='my-flow-love';
  var lc=inner('love-flow-inner');
  while(love.firstChild)lc.appendChild(love.firstChild);
  love.appendChild(lc);
  var loveSplit=lc.querySelector('.split');
  if(loveSplit){var art=loveSplit.querySelector('.art-col');var stack=loveSplit.querySelector('.stack');if(art)lc.appendChild(art);if(stack)lc.appendChild(stack)}
  var loveImg=lc.querySelector('.art-frame');
  if(loveImg){var img=document.createElement('img');img.src='/assets/scratch-photo.jpg';img.alt='A favorite memory';img.loading='eager';img.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:5px';loveImg.innerHTML='';loveImg.appendChild(img)}
  lc.appendChild(sharedNext);

  /* 3 — gift: larger, centered, Continue slightly higher. */
  gift.id='my-flow-gift';
  var giftStage=document.getElementById('giftStage');
  var giftBlock=document.getElementById('giftBlock');
  var giftCap=document.getElementById('giftCap');
  var giftBtn=document.getElementById('gift');
  var giftInner=inner('gift-flow-inner');
  if(giftBlock){giftBlock.style.display='block';giftInner.appendChild(giftBlock)}
  gift.appendChild(giftInner);
  giftInner.appendChild(sharedNext);

  /* 4 — memory: exact repository asset, larger and centered. */
  var memory=document.getElementById('memory');
  var memoryCard=document.getElementById('memoryCard');
  var memoryInner=inner('memory-flow-inner');
  if(memory){memory.style.display='block';memoryInner.appendChild(memory)}
  gift.appendChild(memoryInner);
  var memoryFrame=memory&&memory.querySelector('.memory-frame');
  if(memoryFrame){var mimg=document.createElement('img');mimg.src='/assets/file_000000004ab482088a7d776c072c4951.png';mimg.alt='My favorite memory';mimg.loading='eager';mimg.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:5px';memoryFrame.innerHTML='';memoryFrame.appendChild(mimg)}
  memoryInner.appendChild(sharedNext);

  /* 5 — proposal: centered, with one shared Continue. */
  var proposal=document.getElementById('proposal');
  var proposalInner=inner('proposal-flow-inner');
  if(proposal){proposal.style.display='block';proposalInner.appendChild(proposal)}
  gift.appendChild(proposalInner);
  var arena=document.getElementById('arena');if(arena)arena.style.display='flex';
  var oldYesCard=document.getElementById('yesCard');if(oldYesCard)oldYesCard.style.display='none';

  /* 6 — YES result: cat above Forever it is, one combined outcome. */
  var result=document.createElement('div');
  result.id='my-yes-result';
  result.innerHTML='<div class="my-result-card"><div class="my-result-cat" aria-hidden="true">🐈‍⬛</div><h3>Forever it is.</h3><p>You just made me the happiest person alive, Bhavanika.</p></div>';
  proposalInner.appendChild(result);
  proposalInner.appendChild(sharedNext);

  /* 7 — quote/photo: same centered image → text → Continue treatment as change #2. */
  quote.id='my-flow-quote';
  var qc=inner('quote-flow-inner');
  while(quote.firstChild)qc.appendChild(quote.firstChild);
  quote.appendChild(qc);
  var qsplit=qc.querySelector('.split');
  if(qsplit){var qart=qsplit.querySelector('.art-col');var qstack=qsplit.querySelector('.stack');if(qart)qc.appendChild(qart);if(qstack)qc.appendChild(qstack)}
  var qframe=qc.querySelector('.art-frame');
  if(qframe){var qimg=document.createElement('img');qimg.src='/assets/scratch-photo.jpg';qimg.alt='Just because';qimg.loading='eager';qimg.style.cssText='width:100%;height:100%;object-fit:cover;border-radius:5px';qframe.innerHTML='';qframe.appendChild(qimg)}
  qc.appendChild(sharedNext);

  /* 8 — deep: four real images as Polaroids, never over the text, full maroon background. */
  deep.id='my-flow-deep';
  var dc=inner('deep-flow-inner');
  while(deep.firstChild)dc.appendChild(deep.firstChild);
  deep.appendChild(dc);
  var originalDeepChildren=[].slice.call(dc.children);
  var deepLayout=document.createElement('div');deepLayout.className='deep-layout';
  var grid=document.createElement('div');grid.className='deep-grid';
  ['/assets/03.jpg','/assets/07.jpg','/assets/08.jpg','/assets/her%20image.png'].forEach(function(src){var p=document.createElement('figure');p.className='deep-polaroid';p.innerHTML='<img src="'+src+'" alt="A favorite memory"><span>♡</span>';grid.appendChild(p)});
  var deepCopy=document.createElement('div');deepCopy.className='deep-copy';
  originalDeepChildren.forEach(function(ch){deepCopy.appendChild(ch)});
  deepLayout.appendChild(grid);deepLayout.appendChild(deepCopy);dc.appendChild(deepLayout);dc.appendChild(sharedNext);

  /* 9 — final: preserve the existing final navigation into Kathal Kaditham; do not add/move another Continue. */
  final.id='my-flow-final';
  var fc=inner('final-flow-inner');while(final.firstChild)fc.appendChild(final.firstChild);final.appendChild(fc);fc.classList.add('final-wrap');
  var finalButton=document.getElementById('btnCelebrate');

  function placeNext(i){if(i===7){sharedNext.remove();return}var target=stages[i].el.querySelector('.my-flow-content');if(target)target.appendChild(sharedNext);sharedNext.style.display='inline-flex'}
  function stageSetup(i){
    if(i<7){sharedNext.onclick=function(){show(i+1)};placeNext(i)}else{sharedNext.remove()}
    if(i===4&&window.NoButton&&typeof window.NoButton.init==='function')window.NoButton.init();
  }
  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));current=i;
    stages.forEach(function(s,j){s.el.classList.toggle('my-flow-active',j===i);s.el.style.display=j===i?'flex':'none'});
    if(i===2){if(giftBlock)giftBlock.style.display='block';if(memory)memory.style.display='none';if(proposal)proposal.style.display='none'}
    if(i===3){if(giftBlock)giftBlock.style.display='none';if(memory)memory.style.display='block';if(proposal)proposal.style.display='none'}
    if(i===4){if(giftBlock)giftBlock.style.display='none';if(memory)memory.style.display='none';if(proposal)proposal.style.display='block'}
    stageSetup(i);window.scrollTo(0,0);reveal(stages[i].el.querySelector('.my-flow-content')||stages[i].el);
  }

  /* Gift stays tappable; the existing gift animation is replaced by a lightweight local animation so page flow is not duplicated. */
  if(giftBtn){giftBtn.addEventListener('click',function(e){e.stopImmediatePropagation();if(giftBtn.dataset.myUnwrapped)return;giftBtn.dataset.myUnwrapped='1';giftBtn.animate([{transform:'scale(1.12)'},{transform:'scale(1.25)'},{transform:'scale(1.16)'}],{duration:900,easing:'cubic-bezier(.2,.9,.2,1)'});var bow=giftBtn.querySelector('#giftBow');if(bow)bow.animate([{transform:'rotate(0deg)'},{transform:'rotate(-10deg)'},{transform:'rotate(10deg)'},{transform:'rotate(0deg)'}],{duration:900,easing:'ease-in-out'})},true)}
  if(memoryCard){memoryCard.addEventListener('click',function(e){e.stopImmediatePropagation();memoryCard.animate([{transform:'rotate(1.2deg) scale(1)'},{transform:'rotate(-1deg) scale(1.035)'},{transform:'rotate(1.2deg) scale(1)'}],{duration:700,easing:'cubic-bezier(.2,.8,.2,1)'})},true)}

  /* YES outcome: both elements animate into the same center composition and settle within about 4–6 seconds. */
  var yes=document.getElementById('btnYes'),no=document.getElementById('btnNo'),yesLocked=false;
  if(yes){yes.addEventListener('click',function(e){e.stopImmediatePropagation();if(yesLocked)return;yesLocked=true;if(no)no.disabled=true;yes.disabled=true;if(result)result.style.display='block';var card=result.querySelector('.my-result-card'),cat=result.querySelector('.my-result-cat');if(card){card.style.opacity='0';card.style.transform='translateY(18px) scale(.94)'}if(cat){cat.style.opacity='0';cat.style.transform='translateY(22px) scale(.62)';setTimeout(function(){cat.animate([{opacity:0,transform:'translateY(22px) scale(.62)'},{opacity:1,transform:'translateY(-4px) scale(1.06)'},{opacity:1,transform:'none'}],{duration:850,easing:'cubic-bezier(.2,.9,.2,1)',fill:'forwards'})},300)}setTimeout(function(){if(card)card.animate([{opacity:0,transform:'translateY(18px) scale(.94)'},{opacity:1,transform:'none'}],{duration:900,easing:'cubic-bezier(.2,.9,.2,1)',fill:'forwards'})},650);if(window.Confetti&&Confetti.burst)setTimeout(function(){Confetti.burst({x:innerWidth/2,y:innerHeight*.42,count:110,spread:360,startVelocity:13,ticks:240,shapes:['heart','circle','rect']})},1150);setTimeout(function(){if(card)card.animate([{transform:'scale(1)'},{transform:'scale(1.025)'},{transform:'scale(1)'}],{duration:900,easing:'ease-in-out'})},3200);setTimeout(function(){sharedNext.style.display='inline-flex'},4500)},true)}
  var originalProposalMessage=document.querySelector('#proposal .proposal-message');if(originalProposalMessage)originalProposalMessage.style.display='none';

  document.body.classList.add('my-flow-mode');
  show(0);
})();
</script>`;

    html = html.replace('</head>', css + '</head>');
    html = html.replace('</body>', script + '</body>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Birthday page unavailable 💗');
  }
};
