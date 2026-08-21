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

    /* The requested gift image stays exactly in the gift flow. */
    if(memoryPhoto){
      memoryPhoto.src='/assets/file_000000004ab482088a7d776c072c4951.png';
      memoryPhoto.alt='Our special memory';
      memoryPhoto.draggable=false;
      memoryPhoto.style.cursor='pointer';
      memoryPhoto.style.pointerEvents='auto';
    }

    /* Replace the generic flower artwork in the next love/memory section with
       the actual repository photo the user requested. */
    var loveSection=document.getElementById('my-page-love');
    var loveFrame=loveSection && loveSection.querySelector('.art-frame');
    var lovePhoto=loveFrame && loveFrame.querySelector('img');
    if(lovePhoto){
      lovePhoto.src='/assets/her%20image.png';
      lovePhoto.alt='Her beautiful photo';
      lovePhoto.draggable=false;
      lovePhoto.loading='eager';
      lovePhoto.decoding='async';
      lovePhoto.style.cursor='pointer';
      lovePhoto.style.transition='transform .55s cubic-bezier(.2,.8,.2,1),filter .55s ease';
    }
    if(loveFrame){
      loveFrame.style.position='relative';
      loveFrame.style.overflow='hidden';
      loveFrame.style.borderRadius='8px';
      loveFrame.style.boxShadow='0 20px 55px rgba(120,65,78,.16), 0 0 0 1px rgba(255,255,255,.75)';
      loveFrame.style.transition='transform .35s ease,box-shadow .35s ease';
      loveFrame.addEventListener('pointerdown',function(){
        loveFrame.style.transform='scale(.985) rotate(-.4deg)';
        if(lovePhoto)lovePhoto.style.filter='brightness(1.04) saturate(1.06)';
      });
      loveFrame.addEventListener('pointerup',function(){
        loveFrame.style.transform='scale(1.012) rotate(.25deg)';
        if(lovePhoto)lovePhoto.style.filter='none';
      });
      loveFrame.addEventListener('pointerleave',function(){
        loveFrame.style.transform='none';
        if(lovePhoto)lovePhoto.style.filter='none';
      });
      loveFrame.addEventListener('click',function(){
        if(lovePhoto){
          lovePhoto.style.transform='scale(1.035)';
          setTimeout(function(){lovePhoto.style.transform='scale(1)';},420);
        }
        var spark=document.createElement('span');
        spark.textContent='♥';
        spark.style.position='absolute';
        spark.style.left=(45+Math.random()*10)+'%';
        spark.style.top='48%';
        spark.style.zIndex='5';
        spark.style.pointerEvents='none';
        spark.style.fontSize='22px';
        spark.style.color='#df8fa2';
        spark.style.textShadow='0 5px 18px rgba(180,90,115,.35)';
        spark.style.animation='myLoveHeartFloat 1.15s ease-out forwards';
        loveFrame.appendChild(spark);
        setTimeout(function(){spark.remove();},1200);
      });
    }

    /* One tiny interaction animation for the photo card. */
    if(!document.getElementById('my-love-photo-style')){
      var style=document.createElement('style');
      style.id='my-love-photo-style';
      style.textContent='@keyframes myLoveHeartFloat{0%{opacity:0;transform:translate(-50%,10px) scale(.55)}20%{opacity:1}100%{opacity:0;transform:translate(-50%,-75px) scale(1.25)}}';
      document.head.appendChild(style);
    }

    /* Proposal appears only after the actual gift image is tapped. */
    proposal.style.setProperty('display','none','important');
    proposal.style.opacity='0';
    proposal.style.filter='blur(10px)';

    /* Continue is hidden until the complete YES outcome ends. */
    var continueBtn=giftInner.querySelector('.my-page-next');
    if(!continueBtn)return;
    var proposalShown=false,continueShown=false;

    function hideContinue(){
      continueBtn.style.setProperty('display','none','important');
      continueBtn.setAttribute('aria-hidden','true');
    }
    function showContinue(){
      if(continueShown)return;
      continueShown=true;
      continueBtn.style.setProperty('display','inline-flex','important');
      continueBtn.removeAttribute('aria-hidden');
      continueBtn.style.opacity='0';
      continueBtn.style.transform='translateY(14px)';
      requestAnimationFrame(function(){
        continueBtn.style.transition='opacity .6s ease,transform .6s ease';
        continueBtn.style.opacity='1';
        continueBtn.style.transform='translateY(0)';
      });
    }
    hideContinue();

    /* Center the complete gift experience. */
    giftSection.style.minHeight='100svh';
    giftSection.style.height='100svh';
    giftSection.style.padding='0';
    giftSection.style.alignItems='center';
    giftSection.style.justifyContent='center';
    giftInner.style.position='relative';
    giftInner.style.width='min(92vw,900px)';
    giftInner.style.height='100%';
    giftInner.style.minHeight='100svh';
    giftInner.style.display='flex';
    giftInner.style.flexDirection='column';
    giftInner.style.alignItems='center';
    giftInner.style.justifyContent='center';
    giftInner.style.padding='0';

    var back=giftInner.querySelector('.my-page-back');
    if(back){
      back.style.position='absolute';
      back.style.top='16px';
      back.style.left='50%';
      back.style.transform='translateX(-50%)';
      back.style.margin='0';
      back.style.zIndex='30';
    }
    proposal.style.width='100%';
    proposal.style.margin='0';
    proposal.style.padding='0';
    proposal.style.border='0';
    proposal.style.textAlign='center';

    function revealProposal(){
      if(proposalShown)return;
      proposalShown=true;
      memory.style.transition='opacity .55s ease,transform .55s ease,filter .55s ease';
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
          proposal.style.transition='opacity .75s ease,transform .75s ease,filter .75s ease';
          proposal.style.opacity='1';
          proposal.style.filter='blur(0)';
          proposal.style.transform='none';
          setTimeout(function(){
            proposal.scrollIntoView({behavior:'smooth',block:'center'});
          },80);
        });
      },560);
    }

    /* Only the gift image itself advances to the proposal. */
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

    /* YES outcome = complete cat sequence + complete Forever card sequence. */
    var yesFinished=false;
    function finishYesOutcome(){
      if(yesFinished)return;
      yesFinished=true;
      var completeMs=5900+6720+350;
      setTimeout(showContinue,completeMs);
    }

    /* Capture YES before the original handler so Continue cannot appear early. */
    document.addEventListener('click',function(e){
      var yes=e.target&&e.target.closest?e.target.closest('#btnYes'):null;
      if(yes){
        hideContinue();
        if(!yes.disabled)finishYesOutcome();
      }
    },true);

    /* NO never unlocks Continue. */
    document.addEventListener('click',function(e){
      var no=e.target&&e.target.closest?e.target.closest('#btnNo'):null;
      if(no)hideContinue();
    },true);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',setup,{once:true});
  else setup();
})();
</script>`;

    body=body.replace('</body>',fixScript+'\n</body>');
    return originalSend(body);
  };
  return originalHandler(req,res);
};
