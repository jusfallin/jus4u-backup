const baseHandler = require('./website-flow-fix');

module.exports = (req, res) => {
  const send = res.send.bind(res);
  res.send = (body) => {
    if (typeof body !== 'string' || !body.includes('id="giftSection"')) return send(body);

    const fix = String.raw`<style id="myyellow-final-flow-fix">
#myyellow-memory-popup{position:fixed;inset:0;z-index:999999;display:grid;place-items:center;padding:22px;background:rgba(74,39,50,.32);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);opacity:0;pointer-events:none;transition:opacity .4s ease}
#myyellow-memory-popup.on{opacity:1;pointer-events:auto}
#myyellow-memory-popup .mp-card{width:min(92vw,520px);padding:34px 25px 28px;text-align:center;border-radius:28px;background:linear-gradient(160deg,#fffaf7,#f8ded5);border:1px solid rgba(220,151,165,.55);box-shadow:0 35px 90px -35px rgba(74,39,50,.7);transform:translateY(22px) scale(.95);transition:transform .55s cubic-bezier(.16,1,.3,1)}
#myyellow-memory-popup.on .mp-card{transform:none}
#myyellow-memory-popup .mp-heart{font-size:40px;line-height:1;margin-bottom:10px}
#myyellow-memory-popup h3{margin:0;font:400 clamp(30px,6vw,46px) Georgia,serif;color:#4A2732}
#myyellow-memory-popup p{margin:14px auto 23px;max-width:38ch;font:400 15px/1.75 Inter,system-ui,sans-serif;color:rgba(74,39,50,.84)}
#myyellow-memory-popup button{min-height:54px;padding:15px 30px;border:0;border-radius:999px;cursor:pointer;color:#fff9f6;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99);box-shadow:0 18px 38px -16px rgba(220,151,165,.95);font:500 11px Inter,system-ui,sans-serif;letter-spacing:.18em;text-transform:uppercase}
#myyellow-memory-popup .mp-close{display:block;margin:13px auto 0;background:none;box-shadow:none;color:#96505F;min-height:auto;padding:8px;font-size:10px;letter-spacing:.14em}
</style>
<div id="myyellow-memory-popup" aria-hidden="true">
  <div class="mp-card" role="dialog" aria-modal="true" aria-labelledby="mp-title">
    <div class="mp-heart">💗</div>
    <h3 id="mp-title">One little memory…</h3>
    <p>I wanted you to pause here for a second. This photo means a little more to me than just a photo. Keep it close, my love. ✨</p>
    <button type="button" id="mp-open">Open the next part 💕</button>
    <button type="button" class="mp-close" id="mp-close">Not yet</button>
  </div>
</div>
<script id="myyellow-final-flow-script">
(function(){
  'use strict';
  function init(){
    var popup=document.getElementById('myyellow-memory-popup');
    var open=document.getElementById('mp-open');
    var close=document.getElementById('mp-close');
    var photo=document.getElementById('my-scratch-photo');
    var memory=document.getElementById('memory');
    var proposal=document.getElementById('proposal');
    if(!popup||!open||!close||!photo||!memory||!proposal)return;

    var revealed=false;
    var noCount=0;
    var noBusy=false;

    function hidePopup(){popup.classList.remove('on');popup.setAttribute('aria-hidden','true')}
    function showPopup(){if(revealed)return;popup.classList.add('on');popup.setAttribute('aria-hidden','false')}
    function revealProposal(){
      if(revealed)return;
      revealed=true;
      hidePopup();
      memory.style.transition='opacity .5s ease,transform .5s ease,filter .5s ease';
      memory.style.opacity='0';
      memory.style.transform='translateY(-20px) scale(.97)';
      memory.style.filter='blur(7px)';
      setTimeout(function(){
        memory.style.setProperty('display','none','important');
        proposal.style.setProperty('display','block','important');
        proposal.style.opacity='0';
        proposal.style.transform='translateY(26px) scale(.97)';
        proposal.style.filter='blur(8px)';
        requestAnimationFrame(function(){
          proposal.style.transition='opacity .7s ease,transform .7s ease,filter .7s ease';
          proposal.style.opacity='1';
          proposal.style.transform='none';
          proposal.style.filter='none';
          setTimeout(function(){proposal.scrollIntoView({behavior:'smooth',block:'center'})},80);
          try{if(window.NoButton&&typeof window.NoButton.init==='function')window.NoButton.init()}catch(e){}
        });
      },520);
    }

    /* Proposal is locked until the image is clicked, then the popup must be opened. */
    proposal.style.setProperty('display','none','important');
    proposal.style.opacity='0';
    hidePopup();

    /* This guard runs at WINDOW capture, before the older document-level NO handlers. */
    function blockNoAfterYes(e){
      var no=e.target&&e.target.closest?e.target.closest('#btnNo'):null;
      var yes=document.getElementById('btnYes');
      if(no&&yes&&yes.disabled){
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    }
    window.addEventListener('click',blockNoAfterYes,true);
    window.addEventListener('touchend',blockNoAfterYes,true);

    open.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();revealProposal()});
    close.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();hidePopup()});

    /* Capture before the site's older memory/photo handlers. */
    document.addEventListener('click',function(e){
      var t=e.target;
      if(t&&t.closest&&t.closest('#my-scratch-photo')){
        e.preventDefault();e.stopImmediatePropagation();showPopup();
      }
    },true);
    document.addEventListener('touchend',function(e){
      var t=e.target;
      if(t&&t.closest&&t.closest('#my-scratch-photo')){
        e.preventDefault();e.stopImmediatePropagation();showPopup();
      }
    },{capture:true,passive:false});

    function moveNo(no){
      var arena=document.getElementById('arena');
      if(!arena)return;
      var maxX=Math.max(55,Math.min(150,arena.clientWidth*.28));
      var maxY=Math.max(45,Math.min(95,arena.clientHeight*.22));
      var x=(Math.random()*2-1)*maxX;
      var y=(Math.random()*2-1)*maxY;
      no.style.transition='transform .45s cubic-bezier(.16,1,.3,1)';
      no.style.transform='translate('+x.toFixed(0)+'px,'+y.toFixed(0)+'px) rotate('+(Math.random()*16-8).toFixed(1)+'deg)';
    }

    function fallbackCat(no){
      if(noBusy)return;
      noBusy=true;
      var done=function(){noBusy=false};
      try{
        if(window.Cat&&typeof window.Cat.appearCenter==='function'){
          Promise.resolve(window.Cat.appearCenter()).then(function(){
            if(window.Cat&&typeof window.Cat.leapTo==='function')return window.Cat.leapTo(no,{arc:190,spin:18,duration:900});
          }).then(function(){
            try{if(window.Cat&&typeof window.Cat.setMood==='function')window.Cat.setMood('sad')}catch(e){}
            try{if(window.Cat&&typeof window.Cat.say==='function')window.Cat.say(["This isn't fair… 😿","Please? For me? 🥺","You're breaking my heart… 💔"])}catch(e){}
            done();
          }).catch(done);
        }else done();
      }catch(e){done()}
    }

    /* Highest-level NO handler: first click moves, second click summons the cat. */
    document.addEventListener('click',function(e){
      var no=e.target&&e.target.closest?e.target.closest('#btnNo'):null;
      if(!no)return;
      /* After YES is pressed, NO is intentionally inert so it cannot hide Continue or restart the cat. */
      var yes=document.getElementById('btnYes');
      if(yes&&yes.disabled){
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if(noBusy)return;
      e.preventDefault();e.stopImmediatePropagation();
      noCount++;
      moveNo(no);
      if(noCount>=2){noCount=0;fallbackCat(no)}
    },true);
    document.addEventListener('touchend',function(e){
      var no=e.target&&e.target.closest?e.target.closest('#btnNo'):null;
      if(!no)return;
      /* After YES is pressed, NO is intentionally inert so it cannot hide Continue or restart the cat. */
      var yes=document.getElementById('btnYes');
      if(yes&&yes.disabled){
        e.preventDefault();
        e.stopImmediatePropagation();
        return;
      }
      if(noBusy)return;
      e.preventDefault();e.stopImmediatePropagation();
      noCount++;
      moveNo(no);
      if(noCount>=2){noCount=0;fallbackCat(no)}
    },{capture:true,passive:false});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
</script>`;

    return send(body.replace('</body>',fix+'\n</body>'));
  };
  return baseHandler(req,res);
};
