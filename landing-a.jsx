/* Variation A — Classic Klue Marketing
   Cyan hero, editorial Family-serif headline, white product walkthrough,
   ink proof band, cyan footer CTA. Most "klue.com" of the two. */

function LandingA({ tweaks = {} }) {
  const t = tweaks;
  const ctaLabel = t.ctaLabel || 'See How It Works';
  const problemStatement = t.problemStatement ||
  "Your reps are spending 20–30 on pre-call prep bouncing between multiple tools.\nThat's time they could be *running another discovery call* or *advancing a different deal*.";
  const heroHeadline = t.heroHeadlineA || 'Your CRM, finally worth opening.';
  return (
    <div style={{ background: '#fff', fontFamily: 'Proxima Nova', color: '#0A0A0A' }} data-screen-label="Variation A · Classic Cyan">
      {/* ─── NAV + HERO on cyan ─────────────────────────────────── */}
      <div style={{ background: '#00CCFF' }}>
        <KNav theme="light" />
        <section style={{ padding: '64px 80px 96px', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 24, opacity: 0.78 }}>Introducing · Compete Widget 2.0</Eyebrow>
          <h1 style={{
            fontFamily: 'Family', fontWeight: 400,
            fontSize: 92, lineHeight: 0.98, letterSpacing: '-0.01em',
            color: '#0A0A0A', margin: '0 auto', maxWidth: 1080
          }}>
            {heroHeadline}
          </h1>
          <p style={{
            fontFamily: 'Proxima Nova', fontSize: 19, lineHeight: 1.45,
            color: '#0A0A0A', maxWidth: 660, margin: '28px auto 0', opacity: 0.85
          }}>Compete Widget 2.0 brings deal-specific intelligence - deal tips, win/loss stories, and customer proof - straight into the opportunity your reps are already working in.


          </p>
          <div style={{ marginTop: 36, display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
            <KButton variant="ink" size="lg" style={{ textAlign: 'center' }}>{ctaLabel}</KButton>
          </div>
        </section>

        {/* Floating product visual — sits in the seam between cyan & white */}
        <div style={{ padding: '0 80px', marginBottom: -180, position: 'relative', zIndex: 2 }}>
          <img
            src={window.__resources.sfWidget}
            alt="Compete Widget 2.0 inside a Salesforce opportunity"
            style={{
              display: 'block', width: '100%', height: 'auto',
              borderRadius: 14,
              border: '1px solid rgba(10,10,10,0.06)',
              boxShadow: '0 36px 80px -20px rgba(1,22,39,0.32), 0 4px 12px rgba(1,22,39,0.06)',
              background: '#fff'
            }} />
          
        </div>
      </div>

      {/* Spacer for floating product */}
      <div style={{ background: '#fff', height: 240 }} />

      {/* ─── PROBLEM (ink) ──────────────────────────────────────── */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '140px 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow color="#00CCFF" style={{ marginBottom: 32 }}>The Problem</Eyebrow>
          <h2 style={{
            fontFamily: 'Family', fontWeight: 400,
            fontSize: 50, lineHeight: 1.15, letterSpacing: '-0.005em',
            color: '#fff', margin: 0, textWrap: 'balance', whiteSpace: 'pre-line'
          }}>
            {inlineItalic(problemStatement)}
          </h2>
        </div>
      </section>

      {/* ─── HOW IT WORKS — widget screenshot + callouts ──────── */}
      <section style={{ background: '#fff', padding: '140px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto 80px' }}>
            <Eyebrow>How It Works</Eyebrow>
            <h2 style={{ fontFamily: 'Family', fontWeight: 400, fontSize: 56, lineHeight: 1.02, marginTop: 20, marginBottom: 20 }}>
              Everything they need to win.<br />
              Right where they're already working.
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: '#464646', margin: 0 }}>The Compete Widget 2.0 surfaces deal-specific context inside the Salesforce opportunity — no tabs, no searching, no "let me get back to you on that."


            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 80, alignItems: 'center' }}>
            {/* Callouts */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
              <Callout
                num="01"
                label="Proof Points"
                title="The right proof, on the right deal."
                body="Klue pulls customer quotes, case studies, and competitive intel that match the buyer's industry and segment - no more digging through Slack or guessing what'll land." />
              
              <Callout
                num="02"
                label="Deal Tips"
                title="Coaching that knows the deal."
                body="Stage-aware, competitor-aware tips that show up in the opportunity record - built from holistic competitive intel and the moves your top reps have already made." />
              
            </div>
            {/* Widget panel screenshot */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -32,
                background: 'radial-gradient(ellipse, rgba(0,204,255,0.18) 0%, rgba(0,204,255,0) 70%)',
                filter: 'blur(40px)', pointerEvents: 'none'
              }} />
              <img
                src={window.__resources.widgetPanel}
                alt="Klue Compete widget showing Proof Points and Deal Tips"
                style={{
                  position: 'relative', display: 'block', width: '100%', height: 'auto',
                  borderRadius: 10,
                  background: '#fff'
                }} />
            </div>
          </div>
        </div>
      </section>

      <KFooter />
    </div>);

}

// ─── CALLOUT (numbered feature description) ─────────────────────────
function Callout({ num, label, title, body }) {
  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{
        flexShrink: 0, width: 52, height: 52, borderRadius: 12,
        background: '#E1F4FF', color: '#0B5C8A',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Proxima Nova', fontWeight: 800, fontSize: 18, letterSpacing: '0.04em'
      }}>{num}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: 'Proxima Nova', fontWeight: 700, fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#0B5C8A', marginBottom: 8 }}>{label}</div>
        <h3 style={{ fontFamily: 'Family', fontWeight: 400, fontSize: 28, lineHeight: 1.15, color: '#0A0A0A', margin: '0 0 12px' }}>{title}</h3>
        <p style={{ fontSize: 15.5, color: '#464646', lineHeight: 1.55, margin: 0 }}>{body}</p>
      </div>
    </div>);

}

window.LandingA = LandingA;