:root{
  --bg:#0f1115;
  --panel:#0b0d10;
  --muted:#9aa4b2;
  --glass: rgba(255,255,255,0.04);
  --accent-1: #7C6BFF;
  --accent-2: #00D2FF;
  --accent: linear-gradient(120deg,var(--accent-1),var(--accent-2));
  --max-width: 1100px;
  --radius: 14px;
  --gap: 1.25rem;
  --ff-sans: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --ff-serif: "Merriweather", serif;
  --ease: cubic-bezier(.22,.95,.3,1);
  color-scheme: dark;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:var(--ff-sans);
  background: radial-gradient(1200px 600px at 10% 10%, rgba(124,107,255,0.08), transparent 8%),
              radial-gradient(1000px 500px at 90% 90%, rgba(0,210,255,0.03), transparent 8%),
              var(--bg);
  color:#e6eef6;
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.45;
  font-size:16px;
  -webkit-tap-highlight-color: transparent;
}

/* Utility */
.container{max-width:var(--max-width);margin:0 auto;padding:3rem 1.25rem}
.header-inner,.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem}
a{color:inherit;text-decoration:none}
img{max-width:100%;height:auto}
.muted{color:var(--muted)}

/* Header */
.site-header{position:sticky;top:0;z-index:60;background:linear-gradient(180deg,rgba(8,9,11,0.55),transparent);backdrop-filter:blur(6px);border-bottom:1px solid rgba(255,255,255,0.03)}
.brand{display:flex;align-items:center;gap:.75rem}
.brand-title{font-weight:700;display:block}
.brand-sub{display:block;font-size:.75rem;color:var(--muted)}
.logo{width:44px;height:44px}

/* Nav */
.site-nav{position:relative}
.nav-toggle{display:none}
.nav-list{list-style:none;margin:0;padding:0;display:flex;gap:1rem;align-items:center}
.nav-list a{padding:.35rem .6rem;border-radius:8px;transition:all .22s var(--ease)}
.nav-list a:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,0.45)}
.cta{background:var(--accent-1);color:white;padding:.45rem .75rem;border-radius:10px;font-weight:600}

/* Hero */
.hero{position:relative;overflow:hidden;padding:6rem 0 4rem}
.hero-bg{position:absolute;inset:0;z-index:0;pointer-events:none}
.blob{position:absolute;border-radius:50%;filter:blur(34px) saturate(120%);opacity:.9;mix-blend-mode:screen;transform:translate3d(0,0,0)}
.blob.b1{width:520px;height:520px;left:-10%;top:-20%;background:radial-gradient(circle at 20% 20%, rgba(124,107,255,0.65), transparent 30%)}
.blob.b2{width:420px;height:420px;right:-8%;top:-10%;background:radial-gradient(circle at 60% 40%, rgba(0,210,255,0.55), transparent 30%)}
.blob.b3{width:260px;height:260px;left:10%;bottom:-8%;background:radial-gradient(circle at 60% 30%, rgba(124,107,255,0.35), transparent 40%)}

/* Hero inner layout */
.hero-inner{display:grid;grid-template-columns:1fr 420px;gap:2rem;align-items:center;position:relative;z-index:2}
.headline{font-family:var(--ff-serif);font-weight:700;font-size:clamp(2rem,4.2vw,3.25rem);margin:0 0 .75rem;line-height:1.02}
.subhead{margin:0 0 1.25rem;color:var(--muted);max-width:60ch}
.hero-ctas{display:flex;gap:.75rem;align-items:center}
.btn{display:inline-flex;align-items:center;gap:.5rem;padding:.8rem 1rem;border-radius:12px;cursor:pointer;border:0;font-weight:600;transition:transform .22s var(--ease),box-shadow .22s var(--ease)}
.btn-primary{background:var(--accent);box-shadow:0 10px 30px rgba(124,107,255,.12);color:white}
.btn-primary:hover{transform:translateY(-4px)}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}

/* Hero card mockup */
.hero-card{background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02));border-radius:18px;padding:1.25rem;box-shadow:0 12px 50px rgba(2,6,23,0.6);backdrop-filter:blur(8px)}
.mockup{width:100%;height:260px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);display:flex;flex-direction:column;justify-content:space-between}
.mockup-screen{padding:1rem}
.mockup-divider{height:1px;background:linear-gradient(90deg,rgba(255,255,255,0.02),transparent);margin:0 1rem}
.mockup-stats{display:flex;gap:1rem;padding: .75rem 1rem;color:var(--muted);font-weight:600}

/* Sections */
.section{padding:4rem 0}
.section-header h2{margin:0;font-size:1.5rem}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;margin-top:1rem}
.card{background:var(--glass);border-radius:12px;padding:1rem;min-height:180px;display:flex;flex-direction:column;gap:.75rem;transition:transform .35s var(--ease),box-shadow .35s var(--ease)}
.card:hover{transform:translateY(-8px);box-shadow:0 20px 40px rgba(2,6,23,0.5)}
.card-media{height:110px;border-radius:8px;background:linear-gradient(135deg,var(--accent-1),var(--accent-2))}
.card-link{margin-top:auto;color:var(--accent-2);font-weight:700}

/* Services */
.services-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1rem}
.service{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:1rem;border-radius:10px}

/* Two column */
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:2rem;align-items:center}

/* Contact */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem}
.contact-grid input,.contact-grid textarea{padding:.8rem;border-radius:10px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}
.contact-grid button{grid-column:1/-1}

/* Footer */
.site-footer{padding:2rem 0;border-top:1px solid rgba(255,255,255,0.03);color:var(--muted)}
.footer-inner{display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap}

/* Animations & reveals */
.animate-once{transform:translateY(18px) scale(.995);opacity:0;transition:opacity .7s var(--ease),transform .7s var(--ease)}
.in-view{transform:none;opacity:1}
.blob.b1{animation:float 10s ease-in-out infinite}
.blob.b2{animation:float 14s ease-in-out infinite;animation-delay:1.5s}
.blob.b3{animation:float 12s ease-in-out infinite;animation-delay:-1s}
@keyframes float{0%{transform:translateY(0) scale(1)}50%{transform:translateY(-18px) scale(1.03)}100%{transform:translateY(0) scale(1)}}

/* Responsive */
@media (max-width:980px){
  .hero-inner{grid-template-columns:1fr;gap:1.25rem}
  .hero-card{order:2}
  .cards{grid-template-columns:1fr 1fr}
  .services-grid{grid-template-columns:1fr 1fr}
  .nav-toggle{display:inline-block}
  .nav-list{display:none}
  .nav-list.show{display:flex;flex-direction:column;position:absolute;right:0;top:64px;background:linear-gradient(180deg,rgba(11,13,16,0.9),rgba(11,13,16,0.95));padding:1rem;border-radius:10px}
}

@media (max-width:640px){
  .cards{grid-template-columns:1fr}
  .contact-grid{grid-template-columns:1fr}
  .two-col{grid-template-columns:1fr}
  .headline{font-size:2rem}
}

/* Accessibility helpers */
.skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
.skip-link:focus{left:1rem;top:1rem;width:auto;height:auto;background:#111;padding:.5rem 1rem;border-radius:6px;z-index:9999}
