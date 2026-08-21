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
body.my-flow-fix #world>section.my-fix-active{display:flex!important;min-height:100svh!important;height:auto!important;align-items:flex-start!important;justify-content:center!important;padding:34px 0 92px!important}
.my-fix-inner{width:min(92vw,900px);margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center}
.my-fix-inner>*{margin-left:auto!important;margin-right:auto!important}
.my-fix-back,.my-fix-next{display:inline-flex;align-items:center;justify-content:center;border:0;border-radius:999px;cursor:pointer;min-height:50px;padding:14px 28px;font:500 10.5px var(--sans);letter-spacing:.22em;text-transform:uppercase;transition:transform .25s ease,box-shadow .25s ease}
.my-fix-back{order:0;align-self:center!important;margin:0 0 30px!important;color:#96505F;background:rgba(255,249,246,.78);border:1px solid rgba(150,80,95,.25);box-shadow:0 10px 25px -18px rgba(74,39,50,.45)}
.my-fix-back:hover{transform:translateX(-3px)}
.my-fix-next{order:99;margin-top:42px!important;color:#FFF9F6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);animation:myFixPulse 2.2s ease-in-out infinite}
.my-fix-next:hover{transform:translateY(-2px) scale(1.025)}
@keyframes myFixPulse{0%,100%{box-shadow:0 18px 38px -16px rgba(220,151,165,.95)}50%{box-shadow:0 24px 48px -14px rgba(220,151,165,1),0 0 0 9px rgba(220,151,165,.08)}}

/* The love + giftbox + image + do-you-love-me content is ONE continuous part. */
body.my-flow-fix #my-fix-love .split{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:flex-start!important;width:100%!important;gap:28px!important}
body.my-flow-fix #my-fix-love .art-col{order:1!important;width:min(88vw,430px)!important;margin:0 auto!important}
body.my-flow-fix #my-fix-love .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-flow-fix #my-fix-love .art-frame{aspect-ratio:291/348!important}
body.my-flow-fix #my-fix-love .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:4px!important}
body.my-flow-fix #my-fix-love .stack{order:2!important;width:100%!important;max-width:760px!important;text-align:center!important;margin:0 auto!important}
body.my-flow-fix .body-copy{font-size:clamp(16px,1.25vw,20px)!important;line-height:1.82!important;max-width:62ch!important}
body.my-flow-fix #my-fix-love .h-serif{font-size:clamp(30px,5.4vw,58px)!important;line-height:1.18!important}
body.my-flow-fix #my-fix-love .script{font-size:clamp(36px,5.5vw,62px)!important}
body.my-flow-fix #my-fix-love .pull-quote{font-size:clamp(16px,1.35vw,21px)!important;line-height:1.7!important;border-left:0!important;border-top:2px solid var(--pink)!important;padding:20px 0 0!important;margin-top:8px!important}

/* Keep every sub-part visible and flowing vertically instead of turning them into stages. */
body.my-flow-fix #my-fix-gift{width:min(92vw,900px)!important}
body.my-flow-fix #my-fix-gift #giftBlock,
body.my-flow-fix #my-fix-gift #memory,
body.my-flow-fix #my-fix-gift #proposal{display:block!important;width:100%!important;opacity:1!important;filter:none!important;transform:none!important;position:relative!important;visibility:visible!important}
body.my-flow-fix #my-fix-gift #giftBlock{margin-top:70px!important;padding-top:42px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-gift #memory{margin-top:70px!important;padding-top:42px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-gift #proposal{margin-top:70px!important;padding-top:42px!important;border-top:1px solid rgba(220,151,165,.22)!important}
body.my-flow-fix #my-fix-gift #giftStage{height:clamp(330px,45vh,480px)!important}
body.my-flow-fix #my-fix-gift #gift{transform:scale(1.12)!important}
body.my-flow-fix #my-fix-gift .memory-wrap{width:min(90vw,520px)!important;margin:20px auto 0!important}
body.my-flow-fix #my-fix-gift .memory-card{width:100%!important;padding:15px 15px 22px!important}
body.my-flow-fix #my-fix-gift .memory-frame{width:100%!important;overflow:hidden!important}
body.my-flow-fix #my-fix-gift .memory-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important}
body.my-flow-fix #my-fix-gift #my-scratch-photo{display:block!important;width:min(90vw,520px)!important;height:auto!important;max-height:none!important;object-fit:contain!important;border-radius:6px!important;margin:20px auto 0!important;box-shadow:0 22px 50px -28px rgba(74,39,50,.55)!important}
body.my-flow-fix #my-fix-gift #proposal .q-script{font-size:clamp(46px,8vw,94px)!important}
body.my-flow-fix #my-fix-gift #proposal .arena{height:auto!important;min-height:180px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:22px!important;margin:24px auto 0!important}
body.my-flow-fix #my-fix-gift #proposal .slot{position:static!important;transform:none!important;margin:0!important}
body.my-flow-fix #my-fix-gift #proposal .btn{font-size:13px!important;padding:17px 30px!important}

body.my-flow-fix #my-fix-quote .split{display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;width:100%!important;gap:28px!important}
body.my-flow-fix #my-fix-quote .art-col{order:1!important;width:min(88vw,430px)!important;margin:0 auto!important}
body.my-flow-fix #my-fix-quote .art-card{width:100%!important;padding:12px 12px 18px!important}
body.my-flow-fix #my-fix-quote .art-frame{aspect-ratio:291/348!important}
body.my-flow-fix #my-fix-quote .art-frame img{display:block!important;width:100%!important;height:100%!important;object-fit:cover!important;border-radius:4px!important}
body.my-flow-fix #my-fix-quote .stack{order:2!important;width:100%!important;max-width:760px!important;text-align:center!important;margin:0 auto!important}
body.my-flow-fix #my-fix-quote .big-quote{font-size:clamp(34px,6vw,64px)!important;line-height:1.25!important}
body.my-flow-fix #my-fix-deep .h-serif{font-size:clamp(34px,6vw,64px)!important}
body.my-flow-fix #my-fix-deep .body-copy,body.my-flow-fix #my-fix-final .body-copy{font-size:clamp(16px,1.25vw,20px)!important}
body.my-flow-fix #my-fix-final .h-serif{font-size:clamp(40px,8vw,94px)!important}

/* Hide the old per-subsection navigation controls; this whole combined block gets one pair only. */
body.my-flow-fix #my-fix-gift .my-fix-state-controls{display:none!important}

@media(max-width:720px){
 body.my-flow-fix #world>section.my-fix-active{padding:30px 0 72px!important}
 .my-fix-inner{width:min(92vw,560px)!important}
 .my-fix-back{min-height:48px;padding:13px 25px;margin-bottom:22px!important}
 .my-fix-next{min-height:54px;padding:16px 34px;margin-top:32px!important}
 body.my-flow-fix #my-fix-love .art-col{width:min(88vw,410px)!important}
 body.my-flow-fix #my-fix-gift #giftBlock,
 body.my-flow-fix #my-fix-gift #memory,
 body.my-flow-fix #my-fix-gift #proposal{margin-top:58px!important;padding-top:34px!important}
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

  /* Six real screens: the requested middle experience is ONE continuous part. */
  var stages=[
    {section:hero,key:'hero'},
    {section:love,key:'love'},
    {section:giftSection,key:'gift'},
    {section:quote,key:'quote'},
    {section:deep,key:'deep'},
    {section:final,key:'final'}
  ];
  var unique=[hero,love,giftSection,quote,deep,final];

  function makeInner(section,id){
    var old=section.querySelector(':scope > .my-fix-inner');
    if(old)return old;
    var inner=document.createElement('div');
    inner.className='my-fix-inner';
    inner.id=id;
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

  /* Use the original couple photo already stored in the repository. */
  var loveFrame=loveInner.querySelector('.art-frame');
  if(loveFrame){
    loveFrame.querySelectorAll('svg').forEach(function(n){n.remove()});
    var img=loveFrame.querySelector('img');
    if(!img){img=document.createElement('img');loveFrame.insertBefore(img,loveFrame.firstChild)}
    img.src='/assets/couple-photo.svg';
    img.alt='My favorite person';
    img.draggable=false;
  }

  /* Use the repository scratch-card photo after the giftbox. */
  var memory=giftInner.querySelector('#memory');
  if(memory){
    var frame=memory.querySelector('.memory-frame');
    if(frame){
      var scratch=frame.querySelector('img');
      if(!scratch){scratch=document.createElement('img');frame.appendChild(scratch)}
      scratch.id='my-scratch-photo';
      scratch.src='/assets/scratch-photo.jpg';
      scratch.alt='Our special memory';
      scratch.draggable=false;
    }else{
      var oldImg=memory.querySelector('img');
      if(oldImg){oldImg.id='my-scratch-photo';oldImg.src='/assets/scratch-photo.jpg';oldImg.alt='Our special memory'}
    }
  }

  /* Make the gift, scratch/image, and do-you-love-me blocks one continuous flow. */
  var giftBlock=giftInner.querySelector('#giftBlock');
  var proposal=giftInner.querySelector('#proposal');
  if(giftBlock)giftBlock.style.display='block';
  if(memory)memory.style.display='block';
  if(proposal)proposal.style.display='block';

  function addBack(inner,index){
    var b=document.createElement('button');
    b.type='button';b.className='my-fix-back';b.textContent='← Go Back';
    b.addEventListener('click',function(){show(index-1)});
    inner.insertBefore(b,inner.firstChild);
  }
  function addNext(inner,index){
    var b=document.createElement('button');
    b.type='button';b.className='my-fix-next';b.textContent='Continue ♡';
    b.addEventListener('click',function(){show(index+1)});
    inner.appendChild(b);
  }

  /* One Back + one Continue for the ENTIRE combined love/gift/image/proposal part. */
  addBack(loveInner,1);addNext(loveInner,1);
  addBack(giftInner,2);addNext(giftInner,2);
  addNext(heroInner,0);
  addBack(quoteInner,3);addNext(quoteInner,3);
  addBack(deepInner,4);addNext(deepInner,4);
  addBack(finalInner,5);

  function stateInner(i){
    var s=stages[i].section;
    return s===hero?heroInner:s===love?loveInner:s===giftSection?giftInner:s===quote?quoteInner:s===deep?deepInner:finalInner;
  }

  function show(i){
    i=Math.max(0,Math.min(stages.length-1,i));
    var active=stages[i].section;
    unique.forEach(function(s){
      var on=s===active;
      s.classList.toggle('my-fix-active',on);
      s.style.display=on?'flex':'none';
    });
    stateInner(i).querySelectorAll('.rv').forEach(function(n){n.classList.add('rv-in')});
    window.scrollTo({top:0,left:0,behavior:'instant'});
  }

  document.body.classList.add('my-flow-fix');
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
