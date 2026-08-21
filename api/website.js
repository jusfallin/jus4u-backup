const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const file = path.join(process.cwd(), 'website file.html');
    let html = fs.readFileSync(file, 'utf8');

    const css = String.raw`<style id="myyellow-final-polish">
/* Final requested page-by-page polish */
html,body{background:#FADED2!important;overflow-x:hidden!important}
body.my-page-mode{overflow-y:auto!important}
body.my-page-mode #backdrop{position:fixed!important;inset:0!important}
body.my-page-mode #world{min-height:100svh}
body.my-page-mode #world>section{display:none!important}
body.my-page-mode #world>section.my-active-page{display:flex!important;min-height:100svh!important;height:auto!important;align-items:center!important;justify-content:center!important;padding:72px 0 112px!important;margin:0!important}
body.my-page-mode #world>#giftSection.my-active-page{display:block!important;padding-top:76px!important;padding-bottom:112px!important}
body.my-page-mode #world>#deep.my-active-page{display:flex!important;min-height:100svh!important;background:#4A2732!important;padding:76px 0 112px!important;margin:0!important}
body.my-page-mode #world>#final.my-active-page{display:flex!important}
body.my-page-mode #endnote{display:none!important}
.my-page-inner{width:min(94vw,860px);margin:0 auto;text-align:center;position:relative;z-index:3}
.my-page-back{position:fixed;left:12px;top:max(12px,env(safe-area-inset-top));z-index:120;display:inline-flex;align-items:center;gap:8px;min-height:38px;padding:9px 15px;border-radius:999px;background:rgba(255,249,246,.94);border:1px solid rgba(220,151,165,.35);box-shadow:0 12px 28px -18px rgba(74,39,50,.5);font:500 10px var(--sans);letter-spacing:.18em;text-transform:uppercase;color:var(--rose-ink);cursor:pointer}
.my-page-next{display:inline-flex!important;align-items:center;justify-content:center;min-height:58px!important;padding:18px 42px!important;margin:34px auto 0!important;border:0!important;border-radius:999px!important;color:var(--cream)!important;background:linear-gradient(140deg,#E7A9B4,#DC97A5 48%,#CE8A99)!important;box-shadow:0 18px 38px -16px rgba(220,151,165,.95)!important;font:500 11px var(--sans)!important;letter-spacing:.24em!important;text-transform:uppercase!important;cursor:pointer!important;animation:myNextPulse 2s ease-in-out infinite!important;transition:transform .35s ease!important}
.my-page-next:active{transform:scale(.96)!important}
@keyframes myNextPulse{0%,100%{transform:translateY(0);box-shadow:0 18px 38px -16px rgba(220,151,165,.9)}50%{transform:translateY(-4px);box-shadow:0 25px 48px -13px rgba(220,151,165,1),0 0 0 10px rgba(220,151,165,.09)}}
.my-page-next[hidden]{display:none!important}
.my-page-anim{opacity:0;transform:translateY(24px) scale(.985);filter:blur(8px)}
.my-page-anim.my-in{opacity:1;transform:none;filter:none;transition:opacity .8s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1),filter .75s ease}
body.my-page-mode #hero .hero-divider,body.my-page-mode #hero .scroll-cue{display:none!important}
body.my-page-mode #hero .hero-name{margin-bottom:24px}
body.my-page-mode #hero .heart-badge{margin-bottom:28px}
#myLovePage .my-photo-card,#myQuotePage .my-photo-card{width:min(82vw,440px);margin:0 auto 28px;padding:12px 12px 18px;background:#FFF9F6;border-radius:14px;box-shadow:0 30px 70px -34px rgba(74,39,50,.45);transform:rotate(-1.6deg);overflow:hidden}
#myLovePage .my-photo-card img,#myQuotePage .my-photo-card img{display:block;width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:5px}
#myLovePage .my-photo-caption,#myQuotePage .my-photo-caption{font-family:var(--script);font-size:28px;color:var(--rose-ink);line-height:1;margin-top:12px}
#myLovePage .my-copy{max-width:720px;margin:0 auto}
#myLovePage .my-copy .eyebrow{margin-bottom:10px}
#myLovePage .my-copy .h-serif{font-size:clamp(29px,5vw,48px)}
#myLovePage .my-copy .body-copy{max-width:60ch;margin-left:auto;margin-right:auto}
#myLovePage .my-copy .pull-quote{max-width:60ch;margin:24px auto 0;text-align:left}
#myGiftPage .giftStageClone{display:flex;justify-content:center;align-items:center;height:clamp(330px,48vh,500px);margin-top:-10px}
#myGiftPage .giftClone{transform:scale(1.22);transform-origin:center;animation:myGiftFloat 3.2s ease-in-out infinite}
@keyframes myGiftFloat{0%,100%{transform:scale(1.22) translateY(0) rotate(0)}50%{transform:scale(1.22) translateY(-8px) rotate(.8deg)}}
#myGiftPage .giftClone .gift{cursor:pointer}
#myGiftPage .my-tap{margin-top:-6px}
#myGiftPage .my-page-next{margin-top:24px!important}
#myMemoryPage .my-memory-card{width:min(86vw,480px);margin:0 auto 18px;padding:13px 13px 19px;background:#FFF9F6;border-radius:14px;box-shadow:0 34px 76px -36px rgba(74,39,50,.48);transform:rotate(1.5deg)}
#myMemoryPage .my-memory-card img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:5px}
#myMemoryPage .my-memory-caption{font-family:var(--script);font-size:28px;color:var(--rose-ink);margin-top:12px}
#myProposalPage .q-script{font-size:clamp(44px,9vw,94px);margin-bottom:18px}
#myProposalPage .proposal-buttons{display:flex;justify-content:center;align-items:center;gap:30px;flex-wrap:wrap;margin:20px auto 0}
#myProposalPage .proposal-buttons .btn{min-width:110px}
#myProposalPage .proposal-message{min-height:110px;margin:30px auto 0;display:grid;place-items:center}
#myProposalPage .proposal-message .my-result{display:none;width:min(92vw,520px);padding:24px 26px;border-radius:24px;background:rgba(255,249,246,.94);border:1px solid rgba(220,151,165,.45);box-shadow:0 28px 60px -30px rgba(74,39,50,.5)}
#myProposalPage .proposal-message .my-result h3{font-family:var(--script);font-size:clamp(40px,8vw,74px);font-weight:400;color:var(--pink);margin:0}
#myProposalPage .proposal-message .my-result p{margin:7px 0 0;color:rgba(74,39,50,.82);font-size:14px}
#myProposalPage .my-cat{display:none;width:132px;margin:0 auto -12px;animation:myCatPop .8s cubic-bezier(.2,.9,.2,1) both}
@keyframes myCatPop{0%{opacity:0;transform:translateY(30px) scale(.65)}70%{opacity:1;transform:translateY(-6px) scale(1.06)}100%{opacity:1;transform:none}}
#myProposalPage .my-cat.my-show{display:block}
#myProposalPage .proposal-buttons .btn:disabled{opacity:.65}
#myQuotePage .my-quote-text{max-width:720px;margin:0 auto}
#myQuotePage .my-quote-text .qmark{margin-bottom:6px}
#myQuotePage .big-quote{font-size:clamp(30px,5vw,52px)}
body.my-page-mode #deep.my-active-page{background:#4A2732!important;color:#FADED2!important}
body.my-page-mode #deep.my-active-page::before,body.my-page-mode #deep.my-active-page::after{display:none!important}
#myDeepPage .deep-grid{display:grid;grid-template-columns:repeat(2,minmax(110px,1fr));gap:22px;align-items:center;margin:34px auto 34px;max-width:760px}
#myDeepPage .deep-polaroid{background:#FFF9F6;padding:9px 9px 14px;border-radius:7px;box-shadow:0 22px 45px -28px rgba(0,0,0,.55);will-change:transform}
#myDeepPage .deep-polaroid:nth-child(1){transform:rotate(-4deg)}
#myDeepPage .deep-polaroid:nth-child(2){transform:rotate(3deg)}
#myDeepPage .deep-polaroid:nth-child(3){transform:rotate(2.5deg)}
#myDeepPage .deep-polaroid:nth-child(4){transform:rotate(-3deg)}
#myDeepPage .deep-polaroid img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:3px}
#myDeepPage .deep-polaroid span{display:block;font-family:var(--script);font-size:18px;color:#96505F;text-align:center;padding-top:7px;line-height:1}
#myDeepPage .deep-copy{max-width:720px;margin:0 auto}
#myDeepPage .deep-copy .h-serif{color:#FADED2!important;font-size:clamp(32px,6vw,58px)}
#myDeepPage .deep-copy .body-copy{color:rgba(250,222,210,.95)!important;max-width:58ch;margin-left:auto;margin-right:auto}
#myDeepPage .deep-copy .gold-script{color:#E8C66A!important}
#myFinalPage .my-page-next{display:none!important}
@media(max-width:720px){
  body.my-page-mode #world>section.my-active-page{padding:62px 0 108px!important}
  #myLovePage .my-photo-card,#myQuotePage .my-photo-card{width:min(84vw,390px)}
  #myLovePage .my-copy .pull-quote{font-size:16px}
  #myGiftPage .giftStageClone{height:350px}
  #myGiftPage .giftClone{transform:scale(1.12)}
  @keyframes myGiftFloat{0%,100%{transform:scale(1.12) translateY(0)}50%{transform:scale(1.12) translateY(-7px)}}
  #myDeepPage .deep-grid{gap:16px;max-width:92vw}
  #myDeepPage .deep-polaroid{padding:7px 7px 11px}
  #myDeepPage .deep-polaroid span{font-size:15px}
  #myProposalPage .proposal-buttons{gap:18px}
  #myProposalPage .proposal-buttons .btn{min-width:96px;padding-inline:25px}
}
@media(prefers-reduced-motion:reduce){.my-page-next,.giftClone{animation:none!important}.my-page-anim{filter:none!important;transform:none!important;opacity:1!important}}
</style>`;

    const script = String.raw`<script id="myyellow-final-router">
(function(){
  'use strict';
  var root=document.getElementById('world');
  if(!root)return;
  var sections=[].slice.call(root.children).filter(function(el){return el.tagName==='SECTION'&&el.id!=='endnote';});
  var hero=document.getElementById('hero'), love=sections.find(function(s){return !s.id&&s.querySelector('.split')&&s.querySelector('.pull-quote')&&s.querySelector('.art-card')&&s.querySelector('.stack');});
  var gift=document.getElementById('giftSection'), quote=sections.find(function(s){return !s.id&&s.querySelector('.big-quote');});
  var deep=document.getElementById('deep'), final=document.getElementById('final');
  var pages=[];
  if(hero)pages.push(hero); if(love)pages.push(love); if(gift)pages.push(gift); if(quote)pages.push(quote); if(deep)pages.push(deep); if(final)pages.push(final);
  var giftStage=document.getElementById('giftStage'), originalGift=giftStage&&giftStage.querySelector('#gift');
  var btnYes=document.getElementById('btnYes'), btnNo=document.getElementById('btnNo');
  var current=0,yesDone=false;
  function mkPage(id){var s=document.createElement('section');s.id=id;s.className='sec';return s}
  function inner(s){var d=document.createElement('div');d.className='my-page-inner';s.appendChild(d);return d}
  function back(){var b=document.createElement('button');b.className='my-page-back';b.type='button';b.textContent='← Go back';b.onclick=function(){go(current-1)};return b}
  function next(label){var b=document.createElement('button');b.className='my-page-next';b.type='button';b.textContent=label||'Continue ♡';return b}
  function animateIn(s){[].slice.call(s.querySelectorAll('.my-page-anim')).forEach(function(e,i){e.classList.remove('my-in');setTimeout(function(){e.classList.add('my-in')},Math.min(i*90,420))})}

  /* 1 — opening */
  hero.classList.add('my-active-page');var hc=inner(hero);hc.innerHTML='';var h=document.createElement('div');h.className='my-page-anim';h.innerHTML='<p class="eyebrow">A little celebration for you 🌸</p><h1 class="h-display">Happy Birthday</h1><p class="script hero-name">Bhavanika</p><div class="heart-badge"><svg viewBox="0 0 32 30" fill="#FFF9F6"><use href="#ic-heart"/></svg></div><p class="body-copy" style="margin:0 auto;max-width:44ch">You make every ordinary day feel beautiful. Today is all about celebrating the beautiful person you are.</p><p class="sig" style="margin-top:24px">With all my love, always</p>';hc.appendChild(h);var hn=next('Continue ♡');hn.onclick=function(){go(1)};hc.appendChild(hn);

  /* 2 — love/photo */
  love.id='myLovePage';love.classList.add('my-active-page');var lc=inner(love);lc.appendChild(back());var lp=document.createElement('div');lp.className='my-photo-card my-page-anim';lp.innerHTML='<img src="/assets/scratch-photo.jpg" alt="A favorite memory"><div class="my-photo-caption">my favorite person 💗</div>';lc.appendChild(lp);var copy=document.createElement('div');copy.className='my-copy my-page-anim';copy.innerHTML='<p class="eyebrow">To my love 💗</p><h2 class="h-serif">I didn\'t know what I was looking for —</h2><p><span class="script" style="font-size:clamp(30px,4.2vw,56px)">until I found you.</span></p><p class="body-copy">I could write a thousand beautiful sentences about you and still feel like I haven\'t said enough. Somewhere between our conversations, our favorite songs, your little ways of caring, and all those moments that are just ours, you became someone incredibly special to me.</p><p class="body-copy" style="margin-top:18px">I love your voice, your eyes, your positivity, your heart, and even the tiny things you probably don\'t realize I notice. You make me feel understood, cared for, and ridiculously lucky to call you my girl.</p><blockquote class="pull-quote">So this isn\'t just a birthday page. I made it because I wanted you to feel what I sometimes struggle to put into words: I choose you, I cherish you, and I keep falling for you in all the little moments.</blockquote>';lc.appendChild(copy);var ln=next('Continue ♡');ln.onclick=function(){go(2)};lc.appendChild(ln);

  /* 3 — gift */
  var giftPage=mkPage('myGiftPage'),gc=inner(giftPage);gc.appendChild(back());var gt=document.createElement('p');gt.className='eyebrow my-page-anim';gt.textContent="Something I've been holding onto 🎀";gc.appendChild(gt);var gs=document.createElement('div');gs.className='giftStageClone my-page-anim';var gclone=originalGift?originalGift.cloneNode(true):null;if(gclone){gclone.removeAttribute('id');gclone.classList.add('giftClone');gs.appendChild(gclone)}gc.appendChild(gs);var tap=document.createElement('p');tap.className='sig my-tap my-page-anim';tap.textContent='🎁 Tap to unwrap…';gc.appendChild(tap);var gn=next('Continue ♡');gn.onclick=function(){go(3)};gc.appendChild(gn);root.appendChild(giftPage);

  /* 4 — memory */
  var memoryPage=mkPage('myMemoryPage'),mc=inner(memoryPage);mc.appendChild(back());var me=document.createElement('p');me.className='eyebrow my-page-anim';me.textContent='My favorite memory 📷';mc.appendChild(me);var card=document.createElement('div');card.className='my-memory-card my-page-anim';card.innerHTML='<img src="/assets/file_000000004ab482088a7d776c072c4951.png" alt="My favorite memory"><div class="my-memory-caption">Tap this, my love ❤️</div>';mc.appendChild(card);var mn=next('Continue ♡');mn.onclick=function(){go(4)};mc.appendChild(mn);root.appendChild(memoryPage);

  /* 5 — proposal */
  var propPage=mkPage('myProposalPage'),pc=inner(propPage);pc.appendChild(back());var pt=document.createElement('div');pt.className='my-page-anim';pt.innerHTML='<p class="eyebrow">And one more thing ✨</p><h2 class="script q-script">Will you be my love?</h2>';pc.appendChild(pt);var pb=document.createElement('div');pb.className='proposal-buttons my-page-anim';var yes=document.createElement('button');yes.type='button';yes.className='btn';yes.textContent='Yes 💗';var no=document.createElement('button');no.type='button';no.className='btn btn--ghost';no.textContent='No';pb.appendChild(yes);pb.appendChild(no);pc.appendChild(pb);var out=document.createElement('div');out.className='proposal-message';out.innerHTML='<div class="my-cat" id="myCat"><div style="font-size:76px;line-height:1">🐈‍⬛</div></div><div class="my-result" id="myResult"><h3>Forever it is.</h3><p>You just made me the happiest person alive, Bhavanika.</p></div>';pc.appendChild(out);var pn=next('Continue ♡');pn.onclick=function(){go(5)};pc.appendChild(pn);root.appendChild(propPage);

  /* 6 — quote */
  quote.id='myQuotePage';quote.classList.add('my-active-page');var qc=inner(quote);qc.appendChild(back());var qp=document.createElement('div');qp.className='my-photo-card my-page-anim';qp.innerHTML='<img src="/assets/scratch-photo.jpg" alt="Just because"><div class="my-photo-caption">just because 🌸</div>';qc.appendChild(qp);var qt=document.createElement('div');qt.className='my-quote-text my-page-anim';qt.innerHTML='<span class="qmark">&ldquo;</span><p class="big-quote">You make the world feel a little more colorful just by being in it.</p><p class="sig" style="margin-top:22px">— Someone who thinks you\'re pretty great</p>';qc.appendChild(qt);var qn=next('Continue ♡');qn.onclick=function(){go(6)};qc.appendChild(qn);

  /* 7 — deep */
  deep.id='myDeepPage';deep.classList.add('my-active-page');var dc=inner(deep);dc.appendChild(back());var grid=document.createElement('div');grid.className='deep-grid my-page-anim';['/assets/03.jpg','/assets/07.jpg','/assets/08.jpg','/assets/her%20image.png'].forEach(function(src){var p=document.createElement('figure');p.className='deep-polaroid';p.innerHTML='<img src="'+src+'" alt="A favorite memory"><span>♡</span>';grid.appendChild(p)});dc.appendChild(grid);var dcopy=document.createElement('div');dcopy.className='deep-copy my-page-anim';dcopy.innerHTML='<div class="gold-heart"><svg viewBox="0 0 32 30" fill="#E8C66A"><use href="#ic-heart"/></svg></div><h2 class="h-serif">Beyond the jokes and the chaos,</h2><p class="body-copy" style="margin-top:24px">I just wanted to take a moment to say how incredibly proud I am of the person you are.</p><p class="body-copy" style="margin-top:16px">You carry this rare, beautiful energy with you — a mix of fierce independence and soft, genuine kindness.</p><p class="body-copy" style="margin-top:16px">Life throws a lot at us, but watching you navigate it with your signature humor and grace is nothing short of inspiring.</p><p class="body-copy" style="margin-top:16px">You don\'t just exist in the world; you curate it, you elevate it, you make it fiercely your own.</p><p class="body-copy" style="margin-top:16px">Never lose that spark. Never settle for ordinary. You deserve every ounce of joy, love, and magic this year has to offer.</p><p class="gold-script" style="margin-top:30px">— always in your corner</p>';dc.appendChild(dcopy);var dn=next('Continue ♡');dn.onclick=function(){go(7)};dc.appendChild(dn);

  /* 8 — final: preserve Let's celebrate, no Continue */
  final.id='myFinalPage';final.classList.add('my-active-page');var fc=inner(final);fc.innerHTML='';var fw=document.createElement('div');fw.className='my-page-anim';fw.innerHTML='<p class="eyebrow">One last time, out loud 🎂</p><p class="script final-script">Happy Birthday,</p><h2 class="h-serif" style="font-size:clamp(34px,7.4vw,88px);margin-top:-.08em">Bhavanika.</h2><p class="body-copy" style="margin:24px auto 0;max-width:40ch">Here\'s to a year that treats you as gently and as generously as you treat everyone else.</p>';fc.appendChild(fw);var celebrate=document.createElement('button');celebrate.type='button';celebrate.className='btn btn--lg';celebrate.textContent='Let\'s celebrate 🎉';celebrate.style.marginTop='34px';fw.appendChild(celebrate);var originalCelebrate=document.getElementById('btnCelebrate');celebrate.addEventListener('click',function(){if(originalCelebrate)originalCelebrate.click()});

  pages=[hero,love,giftPage,memoryPage,propPage,quote,deep,final].filter(Boolean);pages.forEach(function(p){p.classList.remove('my-active-page');p.style.display='none'});document.body.classList.add('my-page-mode');
  function show(i){i=Math.max(0,Math.min(pages.length-1,i));current=i;pages.forEach(function(p,j){p.classList.toggle('my-active-page',j===i);p.style.display=j===i?'flex':'none'});if(i===2||i===3||i===4)pages[i].style.display='flex';window.scrollTo(0,0);animateIn(pages[i])}
  function go(i){if(i<0)return;show(i)}
  show(0);

  /* Gift tap opens the next page with a quick lift/glow, while keeping the existing artwork. */
  if(gclone){gclone.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();gclone.animate([{transform:'scale(1.12)'},{transform:'scale(1.28)'},{transform:'scale(1.18)'}],{duration:680,easing:'cubic-bezier(.2,.9,.2,1)'});setTimeout(function(){go(3)},720)},true)}
  card.addEventListener('click',function(){card.animate([{transform:'rotate(1.5deg) scale(1)'},{transform:'rotate(-1deg) scale(1.035)'},{transform:'rotate(1.5deg) scale(1)'}],{duration:700,easing:'cubic-bezier(.2,.8,.2,1)'})});

  /* YES: cat + Forever card appear in the same celebration, with the full beat completing in about 4–5 seconds. */
  yes.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();if(yesDone)return;yesDone=true;yes.disabled=true;no.disabled=true;var cat=document.getElementById('myCat'),result=document.getElementById('myResult');setTimeout(function(){cat.classList.add('my-show')},900);setTimeout(function(){result.style.display='block';result.animate([{opacity:0,transform:'translateY(20px) scale(.94)'},{opacity:1,transform:'none'}],{duration:850,easing:'cubic-bezier(.2,.9,.2,1)',fill:'forwards'})},1200);setTimeout(function(){if(window.Confetti&&Confetti.burst)Confetti.burst({x:innerWidth/2,y:innerHeight*.48,count:100,spread:360,startVelocity:13,ticks:260,shapes:['heart','circle','rect']})},1500);setTimeout(function(){result.animate([{transform:'scale(1)'},{transform:'scale(1.025)'},{transform:'scale(1)'}],{duration:900,easing:'ease-in-out'});cat.animate([{transform:'scale(1)'},{transform:'scale(1.05)'},{transform:'scale(1)'}],{duration:900,easing:'ease-in-out'})},4200)},true);
  no.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();no.animate([{transform:'translateX(0)'},{transform:'translateX(24px)'},{transform:'translateX(-20px)'},{transform:'translateX(0)'}],{duration:550,easing:'ease-out'})},true);
})();
</script>`;

    html = html.replace('</head>', css + '\n</head>');
    html = html.replace('</body>', script + '\n</body>');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');
    res.status(200).send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send('Birthday page unavailable 💗');
  }
};
