const originalHandler = require('./website');

module.exports = (req, res) => {
  const originalSend = res.send.bind(res);

  res.send = (body) => {
    if (typeof body !== 'string' || !body.includes('id="giftSection"')) {
      return originalSend(body);
    }

    const fixScript = String.raw`<style id="myyellow-smooth-animations">
@media (prefers-reduced-motion: no-preference) {
  #world > section {
    will-change: opacity, transform;
  }

  #world > section.my-page-active {
    animation: myYellowSectionEnter 900ms cubic-bezier(.16,1,.3,1) both;
  }

  #world > section.my-page-active .wrap,
  #world > section.my-page-active > .wrap {
    animation: myYellowContentEnter 850ms cubic-bezier(.16,1,.3,1) 70ms both;
  }

  #world > section.my-page-active .eyebrow,
  #world > section.my-page-active .kicker,
  #world > section.my-page-active .signature {
    animation: myYellowFadeUp 700ms cubic-bezier(.16,1,.3,1) 100ms both;
  }

  #world > section.my-page-active h1,
  #world > section.my-page-active h2,
  #world > section.my-page-active h3,
  #world > section.my-page-active .h-serif,
  #world > section.my-page-active .q-script,
  #world > section.my-page-active .gold-script,
  #world > section.my-page-active .title,
  #world > section.my-page-active .name {
    animation: myYellowTextReveal 950ms cubic-bezier(.16,1,.3,1) 150ms both;
  }

  #world > section.my-page-active .body-copy,
  #world > section.my-page-active .pull-quote,
  #world > section.my-page-active .message {
    animation: myYellowFadeUp 850ms cubic-bezier(.16,1,.3,1) 260ms both;
  }

  #world > section.my-page-active .art-card,
  #world > section.my-page-active .memory-card,
  #world > section.my-page-active .memory-wrap,
  #world > section.my-page-active .art-frame,
  #world > section.my-page-active .photo-card,
  #world > section.my-page-active #giftStage,
  #world > section.my-page-active #gift {
    animation: myYellowVisualReveal 1050ms cubic-bezier(.16,1,.3,1) 180ms both;
  }

  #world > section.my-page-active .my-page-next,
  #world > section.my-page-active .enter,
  #world > section.my-page-active button,
  #world > section.my-page-active a[role="button"] {
    transition: transform 420ms cubic-bezier(.16,1,.3,1), box-shadow 420ms cubic-bezier(.16,1,.3,1), filter 420ms ease;
  }

  #world > section.my-page-active .my-page-next:hover,
  #world > section.my-page-active .enter:hover,
  #world > section.my-page-active button:hover,
  #world > section.my-page-active a[role="button"]:hover {
    transform: translateY(-4px) scale(1.035);
    filter: brightness(1.035);
  }

  #world > section.my-page-active .my-page-next:active,
  #world > section.my-page-active .enter:active,
  #world > section.my-page-active button:active,
  #world > section.my-page-active a[role="button"]:active {
    transform: translateY(-1px) scale(.975);
  }

  #world > section.my-page-active .art-card,
  #world > section.my-page-active .memory-card,
  #world > section.my-page-active .memory-wrap {
    transition: transform 700ms cubic-bezier(.16,1,.3,1), box-shadow 700ms cubic-bezier(.16,1,.3,1), filter 500ms ease;
  }

  #world > section.my-page-active .art-card:hover,
  #world > section.my-page-active .memory-card:hover,
  #world > section.my-page-active .memory-wrap:hover {
    transform: translateY(-7px) scale(1.012);
    filter: saturate(1.035);
  }

  #world > section.my-page-active .art-card img,
  #world > section.my-page-active .memory-card img,
  #world > section.my-page-active .art-frame img,
  #world > section.my-page-active .memory-frame img {
    transition: transform 900ms cubic-bezier(.16,1,.3,1), filter 700ms ease;
  }

  #world > section.my-page-active .art-card:hover img,
  #world > section.my-page-active .memory-card:hover img,
  #world > section.my-page-active .art-frame:hover img,
  #world > section.my-page-active .memory-frame:hover img {
    transform: scale(1.025);
    filter: saturate(1.045) contrast(1.01);
  }

  /* Gift: preserve the existing sequence while making each state glide in/out. */
  #giftBlock, #memory, #proposal, #yesCard, #cat {
    will-change: opacity, transform, filter;
  }

  #giftSection .gift {
    transition: transform 850ms cubic-bezier(.16,1,.3,1), filter 600ms ease;
  }

  #giftSection #memory .memory-card {
    transition: transform 700ms cubic-bezier(.16,1,.3,1), box-shadow 700ms cubic-bezier(.16,1,.3,1);
  }

  #giftSection #memory .memory-card:hover {
    transform: translateY(-8px) scale(1.012) rotate(0deg);
  }

  #giftSection #proposal .q-script {
    animation: myYellowProposalText 900ms cubic-bezier(.16,1,.3,1) both;
  }

  #giftSection #proposal .slot {
    transition: transform 420ms cubic-bezier(.16,1,.3,1), filter 420ms ease;
  }

  #giftSection #proposal .slot:hover {
    transform: translateY(-5px) scale(1.04) !important;
    filter: brightness(1.04);
  }

  /* Final section: subtle floating celebration energy without moving the layout. */
  #final.my-page-active .my-page-next,
  #final.my-page-active .enter {
    animation: myYellowButtonReveal 800ms cubic-bezier(.16,1,.3,1) 420ms both;
  }

  #final.my-page-active::after {
    content: "";
    position: absolute;
    inset: 12% 18%;
    pointer-events: none;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,.18), transparent 68%);
    animation: myYellowGlow 5s ease-in-out 1.2s infinite;
  }
}

@keyframes myYellowSectionEnter {
  from { opacity: 0; transform: translate3d(0, 22px, 0); filter: blur(5px); }
  to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
}

@keyframes myYellowContentEnter {
  from { opacity: 0; transform: translate3d(0, 16px, 0) scale(.992); filter: blur(4px); }
  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
}

@keyframes myYellowFadeUp {
  from { opacity: 0; transform: translate3d(0, 17px, 0); filter: blur(4px); }
  to { opacity: 1; transform: translate3d(0, 0, 0); filter: blur(0); }
}

@keyframes myYellowTextReveal {
  from { opacity: 0; transform: translate3d(0, 24px, 0) scale(.985); filter: blur(7px); }
  70% { opacity: 1; transform: translate3d(0, -2px, 0) scale(1.005); filter: blur(0); }
  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
}

@keyframes myYellowVisualReveal {
  from { opacity: 0; transform: translate3d(0, 26px, 0) scale(.965); filter: blur(5px); }
  72% { opacity: 1; transform: translate3d(0, -3px, 0) scale(1.008); filter: blur(0); }
  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
}

@keyframes myYellowProposalText {
  from { opacity: 0; transform: translate3d(0, 20px, 0) scale(.985); filter: blur(7px); }
  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); filter: blur(0); }
}

@keyframes myYellowButtonReveal {
  from { opacity: 0; transform: translate3d(0, 18px, 0) scale(.94); }
  70% { opacity: 1; transform: translate3d(0, -2px, 0) scale(1.02); }
  to { opacity: 1; transform: translate3d(0, 0, 0) scale(1); }
}

@keyframes myYellowGlow {
  0%, 100% { opacity: .18; transform: scale(.96); }
  50% { opacity: .42; transform: scale(1.04); }
}

@media (prefers-reduced-motion: reduce) {
  #world > section,
  #world > section * {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
</style><script id="myyellow-gift-sequence-fix">
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

    /* Keep the exact requested image. */
    if(memoryPhoto){
      memoryPhoto.src='/assets/file_000000004ab482088a7d776c072c4951.png';
      memoryPhoto.alt='Our special memory';
      memoryPhoto.draggable=false;
      memoryPhoto.style.cursor='pointer';
      memoryPhoto.style.pointerEvents='auto';
    }

    /* Proposal appears only after the actual image is tapped. */
    proposal.style.setProperty('display','none','important');
    proposal.style.opacity='0';
    proposal.style.filter='blur(10px)';

    /* Generic page-flow Continue is hidden until the complete YES outcome ends. */
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

    /* Put the proposal in the actual center of the viewport; the back button
       stays at the top and no longer pushes the question upward. */
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

    /* YES outcome = complete cat sequence + complete Forever card sequence. */
    var yesFinished=false;
    function finishYesOutcome(){
      if(yesFinished)return;
      yesFinished=true;
      /* Cat: 5900ms. Forever card: 6720ms. Small paint buffer: 350ms. */
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
