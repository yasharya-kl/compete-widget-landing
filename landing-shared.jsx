// Inline K-mark — avoids flaky network loads
const KMark = ({ size = 14, color = '#00CCFF' }) => (
  <svg width={size * (48.271 / 66.855)} height={size} viewBox="0 0 48.271 66.855" fill="none" style={{ display: 'block' }}>
    <path d="M 0.265 31.011 C -0.122 30.547 -0.08 29.862 0.361 29.449 L 31.479 0.308 C 31.69 0.11 31.969 0 32.259 0 L 47.128 0 C 48.154 0 48.658 1.247 47.921 1.96 L 18.984 29.908 C 18.556 30.321 18.518 30.993 18.896 31.452 L 46.514 64.99 C 47.126 65.734 46.597 66.855 45.633 66.855 L 29.635 66.855 C 29.286 66.855 28.957 66.696 28.74 66.422 L 8.571 40.952 C 8.569 40.951 8.567 40.95 8.565 40.952 C 8.563 40.954 8.56 40.954 8.559 40.952 L 0.265 31.011 Z" fill={color} fillRule="nonzero"/>
  </svg>
);

// Tiny inline-italic renderer: *text* renders as italic emphasis.
// Preserves \n in the input (combine with whiteSpace: 'pre-line').
const inlineItalic = (text) => (text || '').split('*').map((seg, i) =>
  i % 2 === 0
    ? <React.Fragment key={i}>{seg}</React.Fragment>
    : <em key={i} style={{ fontStyle: 'italic' }}>{seg}</em>
);

/* Shared components for both landing-page variations */
const { useState } = React;

// ─── BUTTON ────────────────────────────────────────────────────────────
function KButton({ variant = 'ink', children, href, onClick, size = 'md', icon, style }) {
  const sizes = {
    sm: { padding: '10px 18px', fontSize: 11 },
    md: { padding: '14px 24px', fontSize: 12.5 },
    lg: { padding: '18px 30px', fontSize: 13.5 },
  };
  const variants = {
    ink:       { background: '#0A0A0A', color: '#fff', border: '1px solid #0A0A0A' },
    charcoal:  { background: '#1F1F1F', color: '#fff', border: '1px solid #1F1F1F' },
    seafoam:   { background: '#6CF7C5', color: '#0A0A0A', border: '1px solid #6CF7C5' },
    outline:   { background: 'transparent', color: '#1F1F1F', border: '1px solid #1F1F1F' },
    outlineW:  { background: 'transparent', color: '#fff', border: '1px solid #fff' },
    text:      { background: 'transparent', color: '#0A0A0A', border: '0', textDecoration: 'underline', textUnderlineOffset: 4, padding: '14px 4px' },
    textW:     { background: 'transparent', color: '#fff', border: '0', textDecoration: 'underline', textUnderlineOffset: 4, padding: '14px 4px' },
  };
  const Tag = href ? 'a' : 'button';
  return (
    <Tag
      href={href}
      onClick={onClick}
      style={{
        fontFamily: 'Proxima Nova', fontWeight: 700,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        borderRadius: 7, cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 10,
        transition: 'transform 120ms, background 200ms, opacity 200ms',
        textDecoration: variants[variant].textDecoration || 'none',
        textUnderlineOffset: variants[variant].textUnderlineOffset,
        whiteSpace: 'nowrap',
        ...sizes[size], ...variants[variant], ...style,
      }}
    >
      {children}
      {icon}
    </Tag>
  );
}

// ─── NAV ───────────────────────────────────────────────────────────────
function KNav({ theme = 'light', wordmark }) {
  const isDark = theme === 'dark';
  const linkColor = isDark ? '#fff' : '#0A0A0A';
  const link = {
    fontFamily: 'Proxima Nova', fontWeight: 700, fontSize: 12.5,
    letterSpacing: '0.15em', textTransform: 'uppercase',
    color: linkColor, textDecoration: 'none', cursor: 'pointer',
    display: 'inline-flex', alignItems: 'center', gap: 6,
  };
  const caret = <span style={{ fontSize: 9, opacity: 0.7 }}>▾</span>;
  return (
    <nav style={{
      display: 'flex', alignItems: 'center',
      padding: '24px 64px', gap: 48,
      borderBottom: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(10,10,10,0.06)',
    }}>
      <img src={wordmark || (isDark ? window.__resources.wordmarkWhite : window.__resources.wordmarkBlack)} height={22} alt="Klue" style={{ display: 'block' }}/>
      <div style={{ display: 'flex', gap: 36 }}>
        <a style={link}>Product {caret}</a>
        <a style={link}>Resources {caret}</a>
        <a style={link}>Company {caret}</a>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 16, alignItems: 'center' }}>
        <a style={{ ...link, fontSize: 12 }}>Login</a>
        <KButton variant={isDark ? 'seafoam' : 'ink'} size="sm">Get a Demo</KButton>
      </div>
    </nav>
  );
}

// ─── EYEBROW ───────────────────────────────────────────────────────────
function Eyebrow({ children, color = '#0A0A0A', style }) {
  return (
    <div style={{
      fontFamily: 'Proxima Nova', fontWeight: 600,
      fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase',
      color, ...style,
    }}>{children}</div>
  );
}

// ─── KLUE WIDGET MOCKUP — the star product visual ──────────────────────
// This is the Compete Widget 2.0 panel that sits inside the Salesforce
// opportunity. Drawn as a stand-alone card so it works in any frame.
function KlueWidget({ width = 520, theme = 'light' }) {
  const [tab, setTab] = useState('tips');
  const tabs = [
    { id: 'tips', label: 'Deal Tips', count: 6 },
    { id: 'wl',   label: 'Win/Loss', count: 4 },
    { id: 'proof',label: 'Proof',    count: 8 },
  ];
  return (
    <div style={{
      width, background: '#fff', borderRadius: 12,
      border: '1px solid #E5E5E5',
      boxShadow: '0 24px 60px -16px rgba(1,22,39,0.28), 0 2px 4px rgba(1,22,39,0.08)',
      overflow: 'hidden', fontFamily: 'Proxima Nova',
    }}>
      {/* Header */}
      <div style={{ padding: '14px 18px', borderBottom: '1px solid #EFEFEF', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 26, height: 26, borderRadius: 6, background: '#0A0A0A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <KMark size={14}/>
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0A0A0A', lineHeight: 1.1 }}>Klue · Compete Widget</div>
          <div style={{ fontSize: 11, color: '#717171', marginTop: 2 }}>Deal: Acme Corp · Competitor: <strong style={{ color: '#0A0A0A' }}>Datacrux</strong></div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 10.5, color: '#1EB158', background: '#F2FFF8', padding: '4px 8px', borderRadius: 999, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1EB158' }}/> Live
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', padding: '0 18px', borderBottom: '1px solid #EFEFEF' }}>
        {tabs.map(t => (
          <div key={t.id} onClick={() => setTab(t.id)} style={{
            padding: '12px 4px', marginRight: 24, cursor: 'pointer',
            fontWeight: 700, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase',
            color: tab === t.id ? '#0A0A0A' : '#717171',
            borderBottom: tab === t.id ? '2px solid #00CCFF' : '2px solid transparent',
            marginBottom: -1, display: 'flex', alignItems: 'center', gap: 6,
          }}>
            {t.label}
            <span style={{
              fontSize: 10, padding: '1px 6px', borderRadius: 999,
              background: tab === t.id ? '#0A0A0A' : '#E5E5E5',
              color: tab === t.id ? '#fff' : '#717171',
            }}>{t.count}</span>
          </div>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10, background: '#FAFAFA' }}>
        {tab === 'tips' && <>
          <WidgetTip stage="DISCO" priority="High" title="Datacrux will fixate on Marketing Cloud integration." body="Lead with the unified Klue Slack pipe — 9 of 12 recent wins did." source="42 recent calls"/>
          <WidgetTip stage="DEMO" priority="High" title="Their pricing reveals at procurement." body="Anchor on TCO early. Use the 3-year comparison talk track." source="Battlecard · v14"/>
          <WidgetTip stage="DEMO" priority="Med" title="Watch for the 'all-in-one' objection." body="They're pushing the consolidation story hard this quarter." source="Slack · #compete"/>
        </>}
        {tab === 'wl' && <>
          <WidgetWL outcome="WON" company="Globex" rep="K. Patel" snippet={`“Klue helped us spot Datacrux's pricing trap. Closed 18 days faster.”`}/>
          <WidgetWL outcome="WON" company="Initech" rep="R. Singh" snippet={`“Their integration story is weak. We won on roadmap.”`}/>
          <WidgetWL outcome="LOST" company="Hooli" rep="J. Cho" snippet={`“Datacrux undercut us 14% on a 3-year ramp.”`}/>
        </>}
        {tab === 'proof' && <>
          <WidgetProof logoLetter="N" company="Northwind" stat="$1.2M ARR" note="Switched from Datacrux in Q3 · 6mo payback"/>
          <WidgetProof logoLetter="V" company="Veridian" stat="38% lift" note="vs. their prior CI tool"/>
          <WidgetProof logoLetter="C" company="Contoso" stat="14 days" note="Time-to-close after Klue rollout"/>
        </>}
      </div>

      {/* Footer composer */}
      <div style={{ padding: '12px 14px', borderTop: '1px solid #EFEFEF', display: 'flex', alignItems: 'center', gap: 10, background: '#fff' }}>
        <div style={{
          flex: 1, padding: '10px 14px', borderRadius: 7, border: '1px solid #E5E5E5',
          fontSize: 12.5, color: '#9A9A9A', display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ color: '#00CCFF' }}>✦</span> Ask Klue anything about this deal…
        </div>
        <div style={{
          padding: '10px 14px', background: '#0A0A0A', color: '#fff', borderRadius: 7,
          fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>Ask</div>
      </div>
    </div>
  );
}

function WidgetTip({ stage, priority, title, body, source }) {
  const isHigh = priority === 'High';
  return (
    <div style={{
      background: '#fff', borderRadius: 8, padding: '12px 14px',
      border: '1px solid #EAEAEA',
      display: 'flex', flexDirection: 'column', gap: 4,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
        <span style={{
          fontSize: 9.5, fontWeight: 700, letterSpacing: '0.1em',
          padding: '2px 7px', borderRadius: 3,
          background: '#E1F4FF', color: '#0B5C8A',
        }}>{stage}</span>
        <span style={{
          fontSize: 9.5, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
          padding: '2px 7px', borderRadius: 3,
          background: isHigh ? '#FFF2F3' : '#FFF7E3',
          color: isHigh ? '#EB111C' : '#E18700',
        }}>{priority} priority</span>
      </div>
      <div style={{ fontWeight: 700, fontSize: 13, color: '#0A0A0A', lineHeight: 1.3 }}>{title}</div>
      <div style={{ fontSize: 12, color: '#464646', lineHeight: 1.4 }}>{body}</div>
      <div style={{ fontSize: 10.5, color: '#9A9A9A', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
        <span>↗</span> {source}
      </div>
    </div>
  );
}

function WidgetWL({ outcome, company, rep, snippet }) {
  const won = outcome === 'WON';
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '12px 14px', border: '1px solid #EAEAEA', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <div style={{
        flexShrink: 0, fontSize: 9.5, fontWeight: 800, letterSpacing: '0.08em',
        padding: '4px 8px', borderRadius: 4,
        background: won ? '#1EB158' : '#0A0A0A', color: '#fff',
      }}>{outcome}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11.5, color: '#717171', marginBottom: 2 }}>{company} · {rep}</div>
        <div style={{ fontFamily: 'Family', fontSize: 13.5, color: '#0A0A0A', fontStyle: 'italic', lineHeight: 1.4 }}>{snippet}</div>
      </div>
    </div>
  );
}

function WidgetProof({ logoLetter, company, stat, note }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, padding: '12px 14px', border: '1px solid #EAEAEA', display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: '#E1F4FF', color: '#0B5C8A',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Family', fontSize: 18,
      }}>{logoLetter}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11.5, color: '#717171' }}>{company}</div>
        <div style={{ fontWeight: 700, fontSize: 13.5, color: '#0A0A0A' }}>{stat}</div>
        <div style={{ fontSize: 11, color: '#717171', marginTop: 2 }}>{note}</div>
      </div>
    </div>
  );
}

// ─── SALESFORCE FRAME — wraps the widget for the hero shot ─────────────
function SalesforceFrame({ children, opp = 'Acme Corp · Q2 Renewal', amount = '$420,000' }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 12,
      border: '1px solid #DDD9D5',
      boxShadow: '0 30px 80px -20px rgba(1,22,39,0.35), 0 4px 12px rgba(1,22,39,0.06)',
      overflow: 'hidden', fontFamily: 'Proxima Nova',
    }}>
      {/* SF top bar */}
      <div style={{ background: '#032E61', color: '#fff', padding: '10px 18px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57' }}/>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E' }}/>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840' }}/>
        </div>
        <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 600 }}>salesforce.com / opportunity / 0067e0…</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, fontSize: 11, opacity: 0.8 }}>
          <span>Leads</span><span>Accounts</span><span style={{ color: '#00CCFF' }}>Opportunities</span><span>Reports</span>
        </div>
      </div>
      {/* Opportunity record header */}
      <div style={{ background: '#F4F6F9', padding: '16px 22px 18px', borderBottom: '1px solid #E5E5E5' }}>
        <div style={{ fontSize: 10.5, color: '#717171', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>Opportunity</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 4 }}>
          <div style={{ fontFamily: 'Family', fontSize: 22, color: '#0A0A0A' }}>{opp}</div>
          <div style={{ fontSize: 12.5, color: '#717171' }}>Stage <strong style={{ color: '#0A0A0A' }}>Negotiation</strong> · {amount}</div>
        </div>
        {/* Stage progress */}
        <div style={{ display: 'flex', gap: 3, marginTop: 12 }}>
          {['Disco','Demo','Eval','Neg','Close'].map((s, i) => (
            <div key={s} style={{
              flex: 1, padding: '6px 0', textAlign: 'center',
              fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
              background: i <= 3 ? '#00CCFF' : '#fff',
              color: i <= 3 ? '#0A0A0A' : '#9A9A9A',
              border: '1px solid ' + (i <= 3 ? '#00CCFF' : '#E5E5E5'),
              clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%)',
            }}>{s}</div>
          ))}
        </div>
      </div>
      {/* Record body — left details + right Klue widget */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 540px', gap: 18, padding: 18, background: '#FAFAFA', minHeight: 460 }}>
        {/* Left column: faux SF details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <SFCard title="Details">
            {[
              ['Account Owner','Sarah Cho'],
              ['Close Date','Jun 28, 2026'],
              ['Primary Competitor','Datacrux'],
              ['Forecast Category','Commit'],
              ['Last Activity','2 hours ago · Demo'],
            ].map(([k,v]) => (
              <div key={k} style={{ display: 'flex', padding: '7px 0', borderBottom: '1px solid #F0F0F0', fontSize: 12 }}>
                <div style={{ width: 130, color: '#717171' }}>{k}</div>
                <div style={{ color: '#0A0A0A', fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </SFCard>
          <SFCard title="Activity">
            <div style={{ fontSize: 12, color: '#464646', lineHeight: 1.5 }}>
              <div style={{ paddingLeft: 14, borderLeft: '2px solid #E5E5E5', marginBottom: 10 }}>
                <strong style={{ color: '#0A0A0A' }}>Demo call</strong> · 2h ago<br/>
                <span style={{ color: '#9A9A9A' }}>Pushback on Datacrux pricing trap…</span>
              </div>
              <div style={{ paddingLeft: 14, borderLeft: '2px solid #E5E5E5' }}>
                <strong style={{ color: '#0A0A0A' }}>Disco</strong> · 3d ago<br/>
                <span style={{ color: '#9A9A9A' }}>Confirmed Marketing Cloud requirement.</span>
              </div>
            </div>
          </SFCard>
        </div>
        {/* Right: KLUE WIDGET */}
        <div style={{ position: 'relative' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function SFCard({ title, children }) {
  return (
    <div style={{ background: '#fff', borderRadius: 8, border: '1px solid #E5E5E5', overflow: 'hidden' }}>
      <div style={{ padding: '10px 14px', borderBottom: '1px solid #F0F0F0', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#0A0A0A' }}>{title}</div>
      <div style={{ padding: '6px 14px 12px' }}>{children}</div>
    </div>
  );
}

// ─── BURST BACKGROUND ──────────────────────────────────────────────────
function BurstBackdrop({ children, style }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background:
        'radial-gradient(ellipse 70% 60% at 50% 45%, rgba(0,204,255,0.55) 0%, rgba(0,204,255,0) 60%), ' +
        'radial-gradient(circle at 50% 50%, #000A54 0%, #050323 100%)',
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────
function KFooter() {
  const link = {
    fontFamily: 'Proxima Nova', fontWeight: 400, fontSize: 15,
    color: '#fff', lineHeight: 1.7, textDecoration: 'none', display: 'inline-block',
  };
  const head = {
    fontFamily: 'Proxima Nova', fontWeight: 700, fontSize: 17,
    color: '#00CCFF', marginBottom: 22,
  };
  const cols = [
    ['Product',   [
      ['Klue Compete'], ['Klue Win Loss'], ['Integrations'],
      ['AI Capabilities'], ['Security'],
    ]],
    ['Resources', [
      ['Articles & Resources'], ['Customer Stories'], ['Events'],
    ]],
    ['Company',   [
      ['About'],
      ['Careers', { badge: "We're Hiring" }],
      ['Contact'], ['News & Press'], ['Hey AI, learn about us'],
    ]],
    ['Topics',    [
      ['7 Leading Platforms for Competitive Sales Enablement in 2026'],
      ['How to Create Effective Sales Battlecards That Win Deals in 2026'],
      ['Good Sales Battlecard Examples: What Works and Why in 2026'],
      ['How to Conduct a Competitive Analysis on Top Rivals (2026 Guide)'],
      ['10 Best AI Tools for Competitor Analysis in 2026'],
    ]],
  ];
  const socials = [
    { name: 'Instagram', icon: 'ph-instagram-logo' },
    { name: 'LinkedIn',  icon: 'ph-linkedin-logo' },
    { name: 'Twitter',   icon: 'ph-twitter-logo' },
    { name: 'Email',     icon: 'ph-envelope-simple' },
  ];
  return (
    <footer style={{ background: '#0A0A0A', color: '#fff', paddingBottom: 56, position: 'relative' }}>
      {/* Want to see Klue in action? — sits inside the footer block */}
      <div style={{ padding: '120px 80px 100px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2 style={{
              fontFamily: 'Proxima Nova', fontWeight: 800,
              fontSize: 72, lineHeight: 1.0, letterSpacing: '-0.01em',
              color: '#fff', margin: 0,
            }}>
              Want to see <span style={{ color: '#00CCFF' }}>Klue in action?</span>
            </h2>
            <p style={{ fontFamily: 'Proxima Nova', fontSize: 18, lineHeight: 1.5, color: '#fff', margin: '28px 0 48px', maxWidth: 460 }}>
              Let's do it. Tell us a bit about yourself and we'll set up a time to wow you.
            </p>
            <a style={{
              display: 'inline-block',
              fontFamily: 'Proxima Nova', fontWeight: 700, fontSize: 13,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: '#0A0A0A', background: '#00CCFF',
              padding: '18px 30px', borderRadius: 7,
              textDecoration: 'none', cursor: 'pointer',
            }}>Get a Demo</a>
          </div>
          {/* Welcome video — autoplays on the right of the CTA */}
          <video
            src={window.__resources.demoVideo}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%', aspectRatio: '16 / 11', display: 'block',
              background: '#1F1F1F', borderRadius: 8, objectFit: 'cover',
            }}
          />
        </div>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        {/* Top: link columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.15fr 1.2fr 2fr 1fr', gap: 56 }}>
          {cols.map(([heading, items]) => (
            <div key={heading}>
              <div style={head}>{heading}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {items.map(([label, opts]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <a style={link}>{label}</a>
                    {opts?.badge && (
                      <span style={{
                        fontFamily: 'Proxima Nova', fontWeight: 600, fontSize: 12,
                        color: '#00CCFF',
                        border: '1px solid #00CCFF', borderRadius: 6,
                        padding: '3px 8px', whiteSpace: 'nowrap',
                      }}>{opts.badge}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Follow Us On column */}
          <div>
            <div style={head}>Follow Us On</div>
            <div style={{ display: 'flex', gap: 22, marginTop: 4 }}>
              {socials.map(s => (
                <a key={s.name} aria-label={s.name} style={{ color: '#fff', textDecoration: 'none' }}>
                  <i className={'ph ' + s.icon} style={{ fontSize: 28 }}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: huge wordmark · mascot · meta */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr auto 1.4fr', gap: 32,
          alignItems: 'end',
          marginTop: 80, paddingTop: 24,
        }}>
          {/* Big klue wordmark (left) */}
          <img src={window.__resources.wordmarkWhite} alt="Klue" style={{ height: 120, display: 'block', justifySelf: 'start' }}/>

          {/* Scuba diver mascot drop-in (center) */}
          <image-slot
            id="footer-mascot"
            placeholder="Drop Klue scuba mascot"
            style={{ width: 180, height: 240, background: 'transparent', justifySelf: 'center' }}
          ></image-slot>

          {/* Meta links (right) */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 32,
            justifySelf: 'end', flexWrap: 'wrap',
            fontFamily: 'Proxima Nova', fontSize: 15, color: '#fff',
            paddingBottom: 24,
          }}>
            <a style={{ color: 'inherit', textDecoration: 'none' }}>Status</a>
            <a style={{ color: 'inherit', textDecoration: 'none' }}>Media Kit</a>
            <a style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>© 2026 Klue Labs · Vancouver, BC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Expose to other babel scripts
Object.assign(window, {
  KButton, KNav, Eyebrow, KlueWidget, SalesforceFrame, BurstBackdrop, KFooter, KMark, inlineItalic,
});
