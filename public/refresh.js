// Scroll reveal
const io = new IntersectionObserver((entries)=> {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// Lightweight animated background orbs
const bg = document.createElement('div');
bg.style.position='fixed';
bg.style.inset='-20%';
bg.style.zIndex='-1';
bg.style.pointerEvents='none';
bg.style.background=`
  radial-gradient(180px 180px at 15% 20%, rgba(0,255,65,0.12), transparent 60%),
  radial-gradient(240px 240px at 85% 30%, rgba(0,153,255,0.12), transparent 60%),
  radial-gradient(200px 200px at 30% 80%, rgba(0,255,65,0.09), transparent 60%)
`;
bg.animate([{transform:'translate3d(0,0,0)'},{transform:'translate3d(0,10px,0)'}], {duration:4000,direction:'alternate',iterations:Infinity,easing:'ease-in-out'});
document.body.appendChild(bg);

