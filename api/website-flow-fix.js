const originalHandler = require('./website');

module.exports = (req, res) => {
  const originalSend = res.send.bind(res);

  res.send = (body) => {
    if (typeof body !== 'string' || !body.includes('id="giftSection"')) {
      return originalSend(body);
    }

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

    /* Use the exact requested image. */
    if(memoryPhoto){
      memoryPhoto.src='/assets/file_000000004ab482088a7d776c072c4951.png';
      memoryPhoto.alt='Our special memory';
      memoryPhoto.draggable=false;
      memoryPhoto.style.cursor='pointer';
      memoryPhoto.style.pointerEvents='auto';
    }

    /* The proposal must NOT exist visually until the memory image is tapped. */
    proposal.style.setProperty('display','none','important');
    proposal.style.opacity='0';
    proposal.style.filter='blur(10px)';

    /* The gift-section Continue button belongs to the final step only. */
    var continueBtn=giftInner.querySelector('.my-page-next');
    if(continueBtn){
      continueBtn.style.setProperty('display','none','important');
      continueBtn.setAttribute('aria-hidden','true');
    }

    var proposalShown=false;
    var continueShown=false;

    function showContinue(){
      if(continueShown||!continueBtn)return;
      continueShown=true;
      continueBtn.style.setProperty('display','inline-flex','important');
      continueBtn.removeAttribute('aria-hidden');
      continueBtn.style.opacity='0';
      continueBtn.style.transform='translateY(14px)';
      requestAnimationFrame(function(){
        continueBtn.style.transition='opacity .55s ease, transform .55s ease';
        continueBtn.style.opacity='1';
        continueBtn.style.transform='translateY(0)';
      });
    }

    function revealProposal(){
      if(proposalShown)return;
      proposalShown=true;

      /* Keep the image visible until this click completes the transition. */
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

    /* IMPORTANT: only a tap on the actual image advances to the proposal. */
    memoryCard.addEventListener('click',function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(e.target.closest('#my-scratch-photo')) revealProposal();
    },true);

    memoryCard.addEventListener('touchend',function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(e.target.closest('#my-scratch-photo')) revealProposal();
    },{capture:true,passive:false});

    /* Continue appears only after the user actually answers the love question. */
    function answerFinished(e){
      if(!proposalShown)return;
      if(e.target.closest('#btnYes,#btnNo'))showContinue();
    }
    proposal.addEventListener('click',answerFinished,true);
    proposal.addEventListener('touchend',answerFinished,{passive:true,capture:true});
  }

  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});
  else setup();
})();
</script>`;

    body = body.replace('</body>', fixScript + '\n</body>');
    return originalSend(body);
  };

  return originalHandler(req,res);
};
