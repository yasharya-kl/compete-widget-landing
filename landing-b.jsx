/* Variation B — Ink Editorial
   Ink/black hero with cyan accents, seafoam primary CTA, more "manifesto"
   pace. Same content, different rhythm: vertical step-by-step walkthrough,
   stats on cyan band, quote on ink. */

function LandingB({ tweaks = {} }) {
  const t = tweaks;
  const ctaLabel = t.ctaLabel || 'See How It Works';
  const problemStatement = t.problemStatement ||
    "Your reps are spending 20–30 on pre-call prep bouncing between multiple tools.\nThat's time they could be running another discovery call or advancing a different deal.";
  const heroHeadlineRaw = t.heroHeadlineB || 'Stop logging deals.\nStart winning them.';
  // Support 2-line headlines: second line renders in italic Family cyan
  const headlineLines = heroHeadlineRaw.split('\n');
  return (
    <div style={{ background: '#fff', fontFamily: 'Proxima Nova', color: '#0A0A0A' }} data-screen-label="Variation B · Ink Editorial">
      {/* ─── NAV + HERO on ink ─────────────────────────────────── */}
      <BurstBackdrop>
        <KNav theme="dark"/>
        <section style={{ padding: '72px 80px 40px', position: 'relative' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(0,204,255,0.12)', border: '1px solid rgba(0,204,255,0.4)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00CCFF' }}/>
                <Eyebrow color="#00CCFF" style={{ fontSize: 11 }}>New · Compete Widget 2.0</Eyebrow>
              </div>
              <h1 style={{
                fontFamily: 'Proxima Nova', fontWeight: 800,
                fontSize: 88, lineHeight: 0.96, letterSpacing: '-0.01em',
                color: '#fff', margin: '24px 0 0',
              }}>
                {headlineLines[0]}
                {headlineLines.length > 1 && <>
                  <br/>
                  <span style={{ fontFamily: 'Family', fontWeight: 400, fontStyle: 'italic', color: '#00CCFF' }}>{headlineLines.slice(1).join(' ')}</span>
                </>}
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: 'rgba(255,255,255,0.78)', maxWidth: 540, margin: '32px 0 0' }}>
                Compete Widget 2.0 lives inside the Salesforce opportunity your reps are already in —
                surfacing deal tips, win/loss stories, and customer proof the moment they need them.
              </p>
              <div style={{ marginTop: 40, display: 'flex', gap: 8, alignItems: 'center' }}>
                <KButton variant="seafoam" size="lg">{ctaLabel}</KButton>
                <KButton variant="textW" size="lg">Watch the demo →</KButton>
              </div>
              {/* Mini stat strip */}
              <div style={{ marginTop: 56, display: 'flex', gap: 48 }}>
                {[
                  ['60s', 'Prep, end-to-end'],
                  ['+22%', 'Win-rate lift'],
                  ['3.4×', 'CRM activity'],
                ].map(([t, l]) => (
                  <div key={l}>
                    <div style={{ fontFamily: 'Proxima Nova', fontWeight: 800, fontSize: 32, color: '#00CCFF', lineHeight: 1 }}>{t}</div>
                    <div style={{ fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 6, fontWeight: 600 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: floating screenshot with cyan glow */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -40,
                background: 'radial-gradient(circle, rgba(0,204,255,0.35) 0%, rgba(0,204,255,0) 60%)',
                filter: 'blur(40px)', pointerEvents: 'none',
              }}/>
              <img
                src="assets/images/salesforce-klue-widget.png"
                alt="Compete Widget 2.0 inside a Salesforce opportunity"
                style={{
                  position: 'relative', display: 'block',
                  width: '100%', height: 'auto',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 36px 80px -20px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.2)',
                  transform: 'rotate(-1.2deg)',
                  background: '#fff',
                }}
              />
              <div style={{
                position: 'absolute', bottom: -28, right: 24,
                padding: '8px 14px', borderRadius: 999,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.18)',
                color: '#fff', fontSize: 11, fontWeight: 600,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                backdropFilter: 'blur(8px)',
              }}>
                Lives inside Salesforce
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: 80 }}/>
      </BurstBackdrop>

      {/* ─── PROBLEM (cyan) ───────────────────────────────────────── */}
      <section style={{ background: '#00CCFF', padding: '140px 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
          <Eyebrow style={{ marginBottom: 32 }}>Before Compete Widget</Eyebrow>
          <h2 style={{
            fontFamily: 'Family', fontWeight: 400,
            fontSize: 50, lineHeight: 1.15, letterSpacing: '-0.005em',
            color: '#0A0A0A', margin: 0, textWrap: 'balance', whiteSpace: 'pre-line',
          }}>
            {problemStatement}
          </h2>
        </div>
      </section>

      {/* ─── WALKTHROUGH (white) — vertical, narrative ──────────── */}
      <section style={{ background: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 96 }}>
            <Eyebrow>How It Works</Eyebrow>
            <h2 style={{ fontFamily: 'Family', fontWeight: 400, fontSize: 60, lineHeight: 1.02, marginTop: 20 }}>
              How a rep goes from cold open<br/>to ready in under a minute.
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            <Step
              num="01"
              eyebrow="Deal Tips"
              title="Open the opportunity. The widget already knows the deal."
              body="Stage-aware, competitor-aware coaching cards pulled from your battlecards and your top reps' winning calls. No prompting required — Klue reads the deal context from the CRM."
              right={<TipPanel/>}
            />
            <Step
              num="02"
              eyebrow="Win / Loss"
              title="See how reps closed (or lost) the deals just like this one."
              body="Real snippets from similar closed-won and closed-lost deals — same competitor, same segment, same trap to avoid. Pulled from your Gong calls and win-loss interviews."
              right={<WLPanel/>}
              reverse
            />
            <Step
              num="03"
              eyebrow="Customer Proof"
              title="Drop in social proof the buyer will actually recognize."
              body="Logos, stats, and quotes from accounts that look like the one on the call — auto-matched by industry, size, and segment. One click to paste into the deal."
              right={<ProofPanel/>}
            />
          </div>
        </div>
      </section>

      {/* ─── OUTCOMES (ink band, large numbers) ───────────────────── */}
      <section style={{ background: '#0A0A0A', color: '#fff', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 64 }}>
            <Eyebrow color="#00CCFF">The change</Eyebrow>
            <h2 style={{ fontFamily: 'Family', fontWeight: 400, fontSize: 56, lineHeight: 1, color: '#fff', marginTop: 20, maxWidth: 820 }}>
              Less time searching. More time selling. A CRM that finally tells the truth.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0 }}>
            {[
              ['60 sec',  'Prep, end-to-end',     'Down from ~28 minutes across four tools.'],
              ['+22%',    'Competitive win rate', 'Lift across customers piloting Widget 2.0 in Q1.'],
              ['3.4×',    'CRM activity capture', 'Reps log notes where the intel already lives.'],
            ].map(([t, l, s], i) => (
              <div key={l} style={{ padding: '0 36px', borderLeft: i === 0 ? '0' : '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ fontFamily: 'Proxima Nova', fontWeight: 800, fontSize: 96, lineHeight: 0.95, color: '#00CCFF', letterSpacing: '-0.02em' }}>{t}</div>
                <div style={{ fontFamily: 'Family', fontSize: 24, color: '#fff', marginTop: 12 }}>{l}</div>
                <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.6)', marginTop: 10, lineHeight: 1.5, maxWidth: 280 }}>{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTE + LOGO BAND on bone ───────────────────────────── */}
      <section style={{ background: '#F8F6F7', padding: '120px 80px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Family', fontSize: 88, lineHeight: 0.5, color: '#00CCFF' }}>"</div>
            <p style={{ fontFamily: 'Family', fontSize: 32, lineHeight: 1.35, color: '#0A0A0A', margin: 0 }}>
              My reps used to ping me at 9pm asking what to say on a Datacrux call.
              Now they get on the call <em style={{ fontStyle: 'italic', color: '#0B5C8A' }}>already knowing.</em>
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 14, alignItems: 'center' }}>
              <image-slot id="quote-portrait-b" shape="circle" placeholder="Drop photo" style={{ width: 56, height: 56, background: 'rgba(10,10,10,0.06)' }}></image-slot>
              <div>
                <div style={{ fontFamily: 'Family', fontWeight: 700, fontSize: 17, color: '#0A0A0A' }}>Jamie Okonkwo</div>
                <div style={{ fontFamily: 'Proxima Nova', fontSize: 11.5, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#717171', marginTop: 2 }}>
                  VP Sales · Veridian
                </div>
              </div>
            </div>
          </div>
          <div>
            <Eyebrow style={{ color: '#717171', marginBottom: 24 }}>Trusted by sales teams at</Eyebrow>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <image-slot key={i} id={`logo-b-${i}`} placeholder="Customer logo" style={{ height: 56, background: '#fff', border: '1px solid #E5E5E5', borderRadius: 6 }}></image-slot>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER CTA (ink with cyan glow) ──────────────────────── */}
      <BurstBackdrop style={{ padding: '140px 80px', textAlign: 'center' }}>
        <Eyebrow color="#00CCFF" style={{ marginBottom: 28 }}>Compete Widget 2.0</Eyebrow>
        <h2 style={{
          fontFamily: 'Family', fontWeight: 400,
          fontSize: 88, lineHeight: 0.98,
          color: '#fff', margin: '0 auto', maxWidth: 980,
        }}>
          Give your reps a reason<br/>
          <em style={{ fontStyle: 'italic', color: '#00CCFF' }}>to be in the CRM.</em>
        </h2>
        <p style={{ fontSize: 19, color: 'rgba(255,255,255,0.7)', maxWidth: 560, margin: '32px auto 0' }}>
          The hygiene takes care of itself when the answers are already there.
        </p>
        <div style={{ marginTop: 44, display: 'flex', gap: 8, justifyContent: 'center' }}>
          <KButton variant="seafoam" size="lg">{ctaLabel}</KButton>
          <KButton variant="outlineW" size="lg">Talk to Sales</KButton>
        </div>
      </BurstBackdrop>

      <KFooter/>
    </div>
  );
}

// ─── STEP (vertical walkthrough row) ─────────────────────────────────
function Step({ num, eyebrow, title, body, right, reverse }) {
  const text = (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
        <div style={{
          fontFamily: 'Proxima Nova', fontWeight: 800, fontSize: 14, color: '#fff',
          background: '#00CCFF', borderRadius: 999,
          padding: '6px 12px', letterSpacing: '0.06em',
        }}>{num}</div>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h3 style={{ fontFamily: 'Family', fontWeight: 400, fontSize: 40, lineHeight: 1.05, color: '#0A0A0A', margin: '0 0 20px' }}>{title}</h3>
      <p style={{ fontSize: 17, lineHeight: 1.55, color: '#464646', margin: 0, maxWidth: 460 }}>{body}</p>
    </div>
  );
  const visual = (
    <div style={{
      background: '#E1F4FF', borderRadius: 14,
      border: '1px solid rgba(101,151,178,0.10)',
      padding: 32, minHeight: 320,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {right}
    </div>
  );
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 80, alignItems: 'center' }}>
      {reverse ? <>{visual}{text}</> : <>{text}{visual}</>}
    </div>
  );
}

function TipPanel() {
  return (
    <div style={{ width: '100%', maxWidth: 420, background: '#fff', borderRadius: 12, border: '1px solid rgba(101,151,178,0.10)', padding: 18, boxShadow: '0 12px 32px -12px rgba(1,22,39,0.16)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 12, borderBottom: '1px solid #F0F0F0', marginBottom: 14 }}>
        <div style={{ width: 22, height: 22, borderRadius: 5, background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <KMark size={11}/>
        </div>
        <div style={{ fontWeight: 700, fontSize: 12.5, color: '#0A0A0A' }}>Deal Tips · Datacrux</div>
        <div style={{ marginLeft: 'auto', fontSize: 10, color: '#1EB158', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>● 6 New</div>
      </div>
      {[
        ['DEMO', 'High', 'Datacrux will fixate on Marketing Cloud.', 'Lead with the unified Slack pipe.'],
        ['DEMO', 'Med',  "Watch for the 'all-in-one' objection.", "They're pushing consolidation this Q."],
        ['NEG',  'High', 'Their pricing reveals at procurement.', 'Anchor on 3-year TCO early.'],
      ].map(([s, p, t, b], i) => (
        <div key={i} style={{ padding: '12px 0', borderBottom: i < 2 ? '1px solid #F0F0F0' : '0' }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', padding: '2px 7px', borderRadius: 3, background: '#E1F4FF', color: '#0B5C8A' }}>{s}</span>
            <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '2px 7px', borderRadius: 3, background: p === 'High' ? '#FFF2F3' : '#FFF7E3', color: p === 'High' ? '#EB111C' : '#E18700' }}>{p}</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 13, color: '#0A0A0A', lineHeight: 1.3 }}>{t}</div>
          <div style={{ fontSize: 12, color: '#464646', lineHeight: 1.4, marginTop: 2 }}>{b}</div>
        </div>
      ))}
    </div>
  );
}

function WLPanel() {
  return (
    <div style={{ width: '100%', maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 12 }}>
      {[
        ['WON', '#1EB158', 'Globex', 'K. Patel · $480K', `“Klue helped us spot Datacrux's pricing trap. Closed 18 days faster than forecast.”`],
        ['WON', '#1EB158', 'Initech', 'R. Singh · $310K', `“Their integration story is weak. We won on roadmap clarity.”`],
        ['LOST','#0A0A0A', 'Hooli',  'J. Cho · $640K',   `“Datacrux undercut us 14% on a 3-year ramp. Bring TCO earlier next time.”`],
      ].map(([o, c, comp, meta, snip]) => (
        <div key={comp} style={{ background: '#fff', borderRadius: 10, padding: 14, border: '1px solid rgba(101,151,178,0.10)', display: 'flex', gap: 12, alignItems: 'flex-start', boxShadow: '0 6px 16px -8px rgba(1,22,39,0.12)' }}>
          <div style={{ flexShrink: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: '0.08em', padding: '4px 8px', borderRadius: 4, background: c, color: '#fff' }}>{o}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: '#717171', marginBottom: 2 }}><strong style={{ color: '#0A0A0A' }}>{comp}</strong> · {meta}</div>
            <div style={{ fontFamily: 'Family', fontSize: 13.5, color: '#0A0A0A', fontStyle: 'italic', lineHeight: 1.45 }}>{snip}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProofPanel() {
  return (
    <div style={{ width: '100%', maxWidth: 420, background: '#fff', borderRadius: 12, border: '1px solid rgba(101,151,178,0.10)', padding: 18, boxShadow: '0 12px 32px -12px rgba(1,22,39,0.16)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 14, borderBottom: '1px solid #F0F0F0', marginBottom: 14 }}>
        <div style={{ fontWeight: 700, fontSize: 12.5, color: '#0A0A0A' }}>Customer Proof</div>
        <div style={{ marginLeft: 'auto', fontSize: 10.5, color: '#717171' }}>Matched to: <strong style={{ color: '#0A0A0A' }}>FinServ · 500-2000 FTE</strong></div>
      </div>
      {[
        ['N', 'Northwind Bank',  '$1.2M ARR', 'Switched from Datacrux Q3 · 6mo payback'],
        ['V', 'Veridian Capital','38% lift', 'vs. their prior CI tool · 2 quarters'],
        ['C', 'Contoso Finance', '14 days',   'Time-to-close after Klue rollout'],
      ].map(([l, c, stat, n]) => (
        <div key={c} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F8F8F8' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#E1F4FF', color: '#0B5C8A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Family', fontSize: 18 }}>{l}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, color: '#717171' }}>{c}</div>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#0A0A0A' }}>{stat}</div>
            <div style={{ fontSize: 11.5, color: '#717171', marginTop: 2 }}>{n}</div>
          </div>
          <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0B5C8A', cursor: 'pointer' }}>Copy →</div>
        </div>
      ))}
    </div>
  );
}

window.LandingB = LandingB;
