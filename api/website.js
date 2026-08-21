const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-flow-fix">
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-flow-mode{overflow-y:auto!important}
body.my-flow-mode #world{min-height:100svh}
body.my-flow-mode #world>section{display:none!important}
body.my-flow-mode #world>section.my-flow-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:center!important;justify-content:center!important;margin:0!important;padding:64px 0 112px!important}
body.my-flow-mode #world>#giftSection.my-flow-active{padding:58px 0 108px!important}
body.my-flow-mode #world>#deep.my-flow-active{background:#4A2732!important;color:#FADED2!important;padding:64px 0 112px!important}
body.my-flow-mode #world>#final.my-flow-active{padding-bottom:72px!important}
body.my-flow-mode #backdrop{position:fixed!important;inset:0!important}
body.my-flow-mode #world #endnote{display:none!important}
.my-flow-content{width:min(92vw,820px);margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center}
.my-flow-content>*{margin-left:auto;margin-right:auto}
#my-flow-continue{display:inline-flex;align-items:center;justify-content:center;min-height:54px;padding:16px 36px;margin:28px auto 0;border:0;border-radius:999px;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);font:500 11px var(--sans);letter-spacing:.24em;text-transform:uppercase;cursor:pointer;animation:myFlowPulse 2.2s ease-in-out infinite;transition:transform .25s ease}
#my-flow-continue:active{transform:scale(.96)}
@keyframes myFlowPulse{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px);box-shadow:0 24px 44px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}
#my-flow-hero .hero-divider,#my-flow-hero .scroll-cue{display:none!important}
#my-flow-hero .hero-name{margin-bottom:24px}
#my-flow-hero .heart-badge{margin-bottom:28px}
#my-flow-hero .body-copy,#my-flow-hero .sig{text-align:center!important}
#my-flow-love .split,#my-flow-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%;gap:18px!important}
#my-flow-love .art-col,#my-flow-quote .art-col{width:min(86vw,430px)!important;margin:0 auto!important;order:1!important}
#my-flow-love .stack,#my-flow-quote .stack{width:100%;max-width:720px;margin:10px auto 0!important;text-align:center!important;order:2!important}
#my-flow-love .stack>*{margin-left:auto!important;margin-right:auto!important}
#my-flow-love .art-card,#my-flow-quote .art-card{width:100%;padding:12px 12px 18px;background:#FFF9F6;border-radius:14px;box-shadow:0 30px 70px -34px rgba(74,39,50,.45)}
#my-flow-love .art-frame,#my-flow-quote .art-frame{aspect-ratio:4/5!important}
#my-flow-love .art-frame img,#my-flow-quote .art-frame img{width:100%;height:100%;object-fit:cover;border-radius:5px}
#my-flow-love .pull-quote{max-width:62ch;text-align:center;border-left:0;border-top:2px solid var(--pink);padding:18px 0 0}
#my-flow-gift #giftBlock,#my-flow-memory #memory,#my-flow-proposal #proposal{width:100%;text-align:center}
#my-flow-gift #giftStage{height:clamp(330px,45vh,470px);display:flex;align-items:center;justify-content:center;margin-top:-8px}
#my-flow-gift #gift{transform:scale(1.12);transform-origin:center}
#my-flow-gift #giftCap{margin-top:-2px}
#my-flow-memory #memory{display:block!important;opacity:1!important;filter:none!important;transform:none!important}
#my-flow-memory .memory-wrap{width:min(88vw,470px);margin:18px auto 0}
#my-flow-memory .memory-card{width:100%;padding:14px 14px 20px;background:#FFF9F6;border:0;border-radius:16px;box-shadow:0 34px 76px -36px rgba(74,39,50,.48);transform:rotate(1.2deg)}
#my-flow-memory .memory-frame{aspect-ratio:4/5!important}
#my-flow-memory .memory-frame img{width:100%;height:100%;object-fit:cover;border-radius:5px}
#my-flow-proposal .arena{height:auto;min-height:190px;display:flex;align-items:center;justify-content:center;gap:28px;margin:18px auto 0}
#my-flow-proposal .slot{position:static!important;transform:none!important;margin:0!important}
#my-flow-proposal .proposal-message{display:none!important}
#my-flow-proposal #my-flow-result{display:none;width:min(92vw,560px);margin:28px auto 0;padding:24px;border-radius:26px;background:rgba(255,249,246,.96);border:1px solid rgba(220,151,165,.45);box-shadow:0 28px 60px -30px rgba(74,39,50,.5)}
#my-flow-proposal #my-flow-result h3{font-family:var(--script);font-weight:400;font-size:clamp(46px,8vw,82px);color:var(--pink);margin:0}
#my-flow-proposal #my-flow-result p{margin:7px 0 0;color:rgba(74,39,50,.82);font-size:14px}
#my-flow-proposal #my-flow-result .cat{font-size:72px;line-height:1;margin-bottom:-4px}
#my-flow-quote .big-quote{font-size:clamp(30px,5vw,52px)}
#my-flow-deep{background:#4A2732!important;color:#FADED2!important}
#my-flow-deep .deep-flow-inner{width:100%}
#my-flow-deep .deep-grid{display:grid;grid-template-columns:repeat(2,minmax(120px,1fr));gap:14px;width:min(92vw,700px);margin:0 auto 30px}
#my-flow-deep .deep-polaroid{background:#FFF9F6;padding:8px 8px 13px;border-radius:7px;box-shadow:0 22px 45px -28px rgba(0,0,0,.55)}
#my-flow-deep .deep-polaroid:nth-child(1){transform:rotate(-4deg)}
#my-flow-deep .deep-polaroid:nth-child(2){transform:rotate(3deg)}
#my-flow-deep .deep-polaroid:nth-child(3){transform:rotate(2.5deg)}
#my-flow-deep .deep-polaroid:nth-child(4){transform:rotate(-3deg)}
#my-flow-deep .deep-polaroid img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:3px}
#my-flow-deep .deep-polaroid span{display:block;font-family:var(--script);font-size:18px;color:#96505F;padding-top:7px;line-height:1}
#my-flow-deep .deep-copy{width:min(92vw,720px);margin:0 auto;text-align:center}
#my-flow-deep .deep-copy .h-serif{color:#FADED2!important;font-size:clamp(32px,6vw,58px)}
#my-flow-deep .deep-copy .body-copy{color:rgba(250,222,210,.95)!important;max-width:58ch;margin-left:auto;margin-right:auto}
#my-flow-deep .deep-copy .gold-script{color:#E8C66A!important}
#my-flow-final .final-wrap{width:min(92vw,820px);margin:0 auto;text-align:center}
#my-flow-final #btnCelebrate{margin-top:34px}
@media(max-width:720px){
  body.my-flow-mode #world>section.my-flow-active{padding:58px 0 100px!important}
  #my-flow-love .art-col,#my-flow-quote .art-col{width:min(88vw,390px)!important}
  #my-flow-gift #giftStage{height:350px}
  #my-flow-gift #gift{transform:scale(1.06)}
  #my-flow-proposal .arena{gap:18px;min-height:170px}
  #my-flow-deep .deep-grid{gap:12px}
  #my-flow-continue{min-height:52px;padding:15px 32px}
}
</style>`;

    const script = String.raw`<script id="myyellow-flow-fix-script">
(function(){
  'use strict';
  var root=document.getElementById('world');
  if(!root)return;
  var hero=document.getElementById('hero');
  var gift=document.getElementById('giftSection');
  var deep=document.getElementById('deep');
  var final=document.getElementById('final');
  var sections=[].slice.call(root.children).filter(function(el){return el.tagName==='SECTION';});
  var love=sections.find(function(s){return !s.id&&s.querySelector('.split')&&s.querySelector('.pull-quote')&&s.querySelector('.art-card');});
  var quote=sections.find(function(s){return !s.id&&s.querySelector('.big-quote');});
  if(!hero||!love||!gift||!quote||!deep||!final)return;

  var stages=[
    {el:hero,key:'hero'},
    {el:love,key:'love'},
    {el:gift,key:'gift'},
    {el:gift,key:'memory'},
    {el:gift,key:'proposal'},
    {el:quote,key:'quote'},
    {el:deep,key:'deep'},
    {el:final,key:'final'}
  ];
  var uniqueSections=[hero,love,gift,quote,deep,final];
  var next=document.createElement('button');
  next.id='my-flow-continue';next.type='button';next.textContent='Continue ♡';

  function content(id){var d=document.createElement('div');d.id=id;d.className='my-flow-content';return d}
  function addImg(frame,src,alt){
    if(!frame)return;
    var img=document.createElement('img');img.src=src;img.alt=alt||'';img.loading='eager';
    img.onerror=function(){img.remove()};
    frame.innerHTML='';frame.appendChild(img);
  }
  function resetReveals(scope){if(!scope)return;Array.prototype.forEach.call(scope.querySelectorAll('.rv'),function(n){n.classList.add('rv-in')})}
  function mountSection(sec,id){var c=content(id);while(sec.firstChild)c.appendChild(sec.firstChild);sec.appendChild(c);return c}

  document.body.classList.add('my-flow-mode');
  uniqueSections.forEach(function(s){s.classList.remove('my-flow-active');s.style.display='none'});

  hero.id='my-flow-hero';
  var hc=mountSection(hero,'hero-flow-inner');
  var cue=hc.querySelector('.scroll-cue');if(cue)cue.remove();
  var div=hc.querySelector('.hero-divider');if(div)div.remove();
  hc.appendChild(next);

  love.id='my-flow-love';
  var lc=mountSection(love,'love-flow-inner');
  var ls=lc.querySelector('.split');
  if(ls){var la=ls.querySelector('.art-col'),lt=ls.querySelector('.stack');if(la)lc.appendChild(la);if(lt)lc.appendChild(lt)}
  addImg(lc.querySelector('.art-frame'),'/assets/scratch-photo.jpg','A favorite memory');
  lc.appendChild(next);

  gift.id='my-flow-gift';
  var giftInner=content('gift-flow-inner');
  var giftBlock=document.getElementById('giftBlock'),memory=document.getElementById('memory'),proposal=document.getElementById('proposal');
  if(giftBlock)giftInner.appendChild(giftBlock);
  if(memory)giftInner.appendChild(memory);
  if(proposal)giftInner.appendChild(proposal);
  gift.innerHTML='';gift.appendChild(giftInner);
  var result=document.createElement('div');result.id='my-flow-result';result.innerHTML='<div class="cat">🐈‍⬛</div><h3>Forever it is.</h3><p>You just made me the happiest person alive, Bhavanika.</p>';
  if(proposal)proposal.appendChild(result);

  var giftBtn=document.getElementById('gift'),memoryCard=document.getElementById('memoryCard');
  var memoryFrame=document.querySelector('#memory .memory-frame');
  addImg(memoryFrame,'/assets/file_000000004ab482088a7d776c072c4951.png','My favorite memory');

  quote.id='my-flow-quote';
  var qc=mountSection(quote,'quote-flow-inner');
  var qs=qc.querySelector('.split');
  if(qs){var qa=qs.querySelector('.art-col'),qt=qs.querySelector('.stack');if(qa)qc.appendChild(qa);if(qt)qc.appendChild(qt)}
  addImg(qc.querySelector('.art-frame'),'/assets/scratch-photo.jpg','Just because');
  qc.appendChild(next);

  deep.id='my-flow-deep';
  var dc=mountSection(deep,'deep-flow-inner');
  var originalDeep=[].slice.call(dc.children);
  var layout=document.createElement('div');layout.className='deep-layout';
  var grid=document.createElement('div');grid.className='deep-grid';
  ['/assets/03.jpg','/assets/07.jpg','/assets/08.jpg','/assets/her%20image.png'].forEach(function(src){var p=document.createElement('figure');p.className='deep-polaroid';p.innerHTML='<img src="'+src+'" alt="A favorite memory"><span>♡</span>';grid.appendChild(p)});
  var copy=document.createElement('div');copy.className='deep-copy';
  originalDeep.forEach(function(ch){copy.appendChild(ch)});
  layout.appendChild(grid);layout.appendChild(copy);dc.appendChild(layout);dc.appendChild(next);

  final.id='my-flow-final';
  var fc=mountSection(final,'final-flow-inner');fc.classList.add('final-wrap');

  function giftOnly(key){
    if(giftBlock)giftBlock.style.display=key==='gift'?'block':'none';
    if(memory)memory.style.display=key==='memory'?'block':'none';
    if(proposal)proposal.style.display=key==='proposal'?'block':'none';
  }
  function stageContent(i){var sec=stages[i].el;if(sec===gift){giftOnly(stages[i].key);return giftInner}return sec.querySelector('.my-flow-content')||sec}
  function placeNext(i){
    if(i===7){if(next.parentNode)next.parentNode.removeChild(next);return}
    var host=stageContent(i);if(host)host.appendChild(next);
    next.style.display='inline-flex';next.onclick=function(){show(i+1)};
  }
  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    var active=stages[i].el;
    uniqueSections.forEach(function(s){s.classList.toggle('my-flow-active',s===active);s.style.display=s===active?'flex':'none'});
    giftOnly(stages[i].key);placeNext(i);resetReveals(stageContent(i));window.scrollTo(0,0);
  }

  function captureOnce(el,fn){if(!el)return;el.addEventListener('click',function(e){e.stopImmediatePropagation();fn(e)},true)}
  if(giftBtn)captureOnce(giftBtn,function(){
    giftBtn.animate([{transform:'scale(1)'},{transform:'scale(1.13)'},{transform:'scale(1.06)'}],{duration:800,easing:'cubic-bezier(.2,.9,.2,1)'});
    var bow=document.getElementById('giftBow');if(bow)bow.animate([{transform:'rotate(0deg)'},{transform:'rotate(-9deg)'},{transform:'rotate(9deg)'},{transform:'rotate(0deg)'}],{duration:850,easing:'ease-in-out'});
  });
  if(memoryCard)captureOnce(memoryCard,function(){memoryCard.animate([{transform:'rotate(1.2deg) scale(1)'},{transform:'rotate(-1deg) scale(1.035)'},{transform:'rotate(1.2deg) scale(1)'}],{duration:650,easing:'cubic-bezier(.2,.8,.2,1)'})});

  var yes=document.getElementById('btnYes');
  if(yes)captureOnce(yes,function(){
    yes.disabled=true;var no=document.getElementById('btnNo');if(no)no.disabled=true;
    result.style.display='block';result.style.opacity='1';
    result.animate([{opacity:0,transform:'translateY(20px) scale(.94)'},{opacity:1,transform:'translateY(0) scale(1)'},{opacity:1,transform:'translateY(0) scale(1.02)'},{opacity:1,transform:'translateY(0) scale(1)'}],{duration:1200,easing:'cubic-bezier(.2,.9,.2,1)',fill:'forwards'});
    if(window.Confetti&&window.Confetti.burst){try{window.Confetti.burst({x:innerWidth/2,y:innerHeight*.42,count:110,spread:360,startVelocity:13,ticks:240,shapes:['heart','circle','rect']})}catch(e){}}
  });

  show(0);
})();
</script>`;

    html = html.replace('</head>', css + '</head>');
    html = html.replace('</body>', script + '</body>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).send('Website unavailable.');
  }
};
