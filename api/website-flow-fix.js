const originalHandler = require('./website');

module.exports = (req, res) => {
  const originalSend = res.send.bind(res);

  res.send = (body) => {
    if (typeof body !== 'string' || !body.includes('id="giftSection"')) {
      return originalSend(body);
    }

    const fixStyle = String.raw`<style id="myyellow-gift-sequence-final-style">
/* Keep the proposal itself in the true visual center of the phone viewport. */
body.my-page-flow #giftSection.my-page-active{
  position:relative!important;
  min-height:100svh!important;
  height:100svh!important;
  padding:0!important;
  align-items:center!important;
  justify-content:center!important;
}
body.my-page-flow #my-page-gift{
  position:relative!important;
  width:min(92vw,900px)!important;
  height:100%!important;
  min-height:100svh!important;
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  justify-content:center!important;
  padding:0!important;
}
/* Back button stays at the top without pushing the proposal upward. */
body.my-page-flow #my-page-gift>.my-page-back{
  position:absolute!important;
  top:18px!important;
  left:50%!important;
  transform:translateX(-50%)!important;
  margin:0!important;
  z-index:30!important;
}
body.my-page-flow #my-page-gift #proposal{
  width:100%!important;
  margin:0!important;
  padding:0!important;
  border:0!important;
  text-align:center!important;
}
body.my-page-flow #my-page-gift #proposal .q-script{margin:0 auto!important}
body.my-page-flow #my-page-gift #proposal .arena{margin:28px auto 0!important;min-height:0!important}
body.my-page-flow #my-page-gift>.my-page-next.my-gift-continue-hidden{display:none!important}
body.my-page-flow #my-page-gift>.my-page-next.my-gift-continue-ready{display:inline-flex!important;margin-top:28px!important}
@media(max-width:720px){
  body.my-page-flow #my-page-gift{width:92vw!important}
  body.my-page-flow #my-page-gift>.my-page-back{top:16px!important}
  body.my-page-flow #my-page-gift #proposal .q-script{font-size:clamp(44px,10vw,72px)!important}
}
</style>`;

    const fixScript = String.raw`<script id="myyellow-gift-sequence-fix">
(function(){
  'use strict';

  function setup(){
    var giftSection=document.getElementById('giftSection');
    if(!giftSection)return;

    var memory=document.getElementById('memory');
    var memoryCard=memory && memory.querySelector('.memory-card');
    var memoryPhoto=document.getElementById('my-scratch-photo');
    var proposal=document.getElementById('proposal');
    var giftInner=document.getElementById('my-page-gift');
    if(!memory||!memoryCard||!proposal||!giftInner)return;

    /* Exact requested image. */
    if(memoryPhoto){
      memoryPhoto.src='/assets/file_000000004ab482088a7d776c072c4951.png';
      memoryPhoto.alt='Our special memory';
      memoryPhoto.draggable=false;
      memoryPhoto.style.cursor='pointer';
      memoryPhoto.style.pointerEvents='auto';
    }

    /* Proposal is only revealed after the actual image is tapped. */
    proposal.style.setProperty('display','none','important');
    proposal.style.opacity='0';
    proposal.style.filter='blur(10px)';

    /* Generic page-flow must never expose this button on its own. */
    var continueBtn=giftInner.querySelector('.my-page-next');
    if(!continueBtn)return;
    continueBtn.classList.add('my-gift-continue-hidden');
    continueBtn.classList.remove('my-gift-continue-ready');
    continueBtn.setAttribute('aria-hidden','true');

    var proposalShown=false;
    var continueShown=false;

    function hideContinue(){
      continueBtn.classList.remove('my-gift-continue-ready');
      continueBtn.classList.add('my-gift-continue-hidden');
      continueBtn.setAttribute('aria-hidden','true');
    }

    function showContinue(){
      if(continueShown)return;
      continueShown=true;
      continueBtn.classList.remove('my-gift-continue-hidden');
      continueBtn.classList.add('my-gift-continue-ready');
      continueBtn.removeAttribute('aria-hidden');
      continueBtn.style.opacity='0';
      continueBtn.style.transform='translateY(14px)';
      requestAnimationFrame(function(){
        continueBtn.style.transition='opacity .6s ease, transform .6s ease';
        continueBtn.style.opacity='1';
        continueBtn.style.transform='translateY(0)';
      });
    }

    hideContinue();

    function revealProposal(){
      if(proposalShown)return;
      proposalShown=true;

      memory.style.transition='opacity .55s ease, transform .55s ease, filter .55s ease';
      memory.style.opacity='0';
      memory.style.filter='blur(7px)';
      memory.style.transform='translateY(-24px) scale(.97)';

      setTimeout(function(){
        memory.style.setProperty('display','none','important');
        proposal.style.setProperty('display','block','important');
        proposal.style.opacity='0';
        proposal.style.filter='blur(10px)';
        proposal.style.transform='translateY(30px) scale(.97)';

        requestAnimationFrame(function(){
          proposal.style.transition='opacity .75s ease, transform .75s ease, filter .75s ease';
          proposal.style.opacity='1';
          proposal.style.filter='blur(0)';
          proposal.style.transform='none';
          setTimeout(function(){
            proposal.scrollIntoView({behavior:'smooth',block:'center'});
          },80);
        });
      },560);
    }

    /* Only the image itself advances to the proposal. */
    memoryCard.addEventListener('click',function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(e.target.closest('#my-scratch-photo'))revealProposal();
    },true);

    memoryCard.addEventListener('touchend',function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(e.target.closest('#my-scratch-photo'))revealProposal();
    },{capture:true,passive:false});

    /*
       YES has two visible outcomes:
       1) the cat's complete thank-you animation
       2) the complete "Forever it is." card sequence

       The original sayYes() timing is:
       cat entrance/settle + thank-you + exit, then the Forever card
       entrance, hold, and exit. Continue is revealed only after all of it.
    */
    var yesFinished=false;
    function finishYesOutcome(){
      if(yesFinished)return;
      yesFinished=true;

      /*
         860 + 520 + 220 + 3400 + 900 = cat sequence
         820 + 5000 + 900         = Forever card sequence
         + small buffer for the final frame/paint.
      */
      var completeMs=860+520+220+3400+900+820+5000+900+350;
      setTimeout(function(){
        showContinue();
      },completeMs);
    }

    /* Capture YES before the original click handler. */
    document.addEventListener('click',function(e){
      if(!e.target.closest)return;
      var yes=e.target.closest('#btnYes');
      if(yes){
        hideContinue();
        if(!yes.disabled)finishYesOutcome();
      }
    },true);

    /* NO never unlocks Continue. */
    document.addEventListener('click',function(e){
      if(!e.target.closest)return;
      if(e.target.closest('#btnNo'))hideContinue();
    },true);
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});
  else setup();

  body = body.replace('</head>', fixStyle + '\n</head>');
    body = body.replace('</body>', fixScript + '\n</body>');
    return originalSend(body);
  };

  return originalHandler(req,res);
};
