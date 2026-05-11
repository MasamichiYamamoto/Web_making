// B2 Poster designs — three variations for 白子ドローンスクール
// B2 size: 515mm × 728mm. We use 515×728px (1px = 1mm) for clean scaling.

const W = 515;
const H = 728;

// ---------- Shared bits ----------

const skyImg = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=1200&auto=format&fit=crop";
const droneImg = "https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1200&auto=format&fit=crop";
const pilotImg = "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop";

// Placeholder image with diagonal stripes + label
function ImagePlaceholder({ width, height, label, style = {}, radius = 0, dark = false }) {
  const stripe1 = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const stripe2 = dark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)";
  const bg = dark ? "#1a2340" : "#e8ecf3";
  const fg = dark ? "rgba(255,255,255,0.55)" : "rgba(20,30,60,0.55)";
  return (
    <div
      style={{
        width,
        height,
        borderRadius: radius,
        background: `repeating-linear-gradient(45deg, ${stripe1} 0 8px, ${stripe2} 8px 16px), ${bg}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "ui-monospace, Menlo, Consolas, monospace",
        fontSize: 10,
        color: fg,
        letterSpacing: "0.05em",
        textAlign: "center",
        padding: 8,
        boxSizing: "border-box",
        ...style,
      }}
    >
      {label}
    </div>
  );
}

// ---------- Variation 1: Editorial / Index card ----------
// Big numerals, gridded, swiss-ish but Japanese editorial. Hero image bottom.

function PosterEditorial() {
  const ink = "#0e1a3a";
  const accent = "#1f4ed8";
  const paper = "#f4f1ea";

  return (
    <div
      style={{
        width: W,
        height: H,
        background: paper,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Noto Sans JP', sans-serif",
        color: ink,
      }}
    >
      {/* Top thin rule + meta row */}
      <div style={{ position: "absolute", top: 28, left: 32, right: 32, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        <div style={{ fontWeight: 700 }}>DRONE SCHOOL · SUZUKA</div>
        <div style={{ opacity: 0.6 }}>NO. 026 / OPEN HOUSE</div>
      </div>
      <div style={{ position: "absolute", top: 50, left: 32, right: 32, height: 1, background: ink }} />

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 70, left: 32, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em" }}>
        スクール移転ご案内 / RELOCATION
      </div>

      {/* Massive headline */}
      <div style={{ position: "absolute", top: 92, left: 32, right: 32 }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, lineHeight: 0.9 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 160, fontWeight: 900, letterSpacing: "-0.04em" }}>06</span>
          <span style={{ fontSize: 26, fontWeight: 700, marginLeft: 4 }}>月、</span>
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.02em", marginTop: -6, whiteSpace: "nowrap" }}>
          鈴鹿に誕生。
        </div>
        <div style={{ fontSize: 44, fontWeight: 900, letterSpacing: "-0.02em", color: accent, marginTop: 2, whiteSpace: "nowrap" }}>
          無料体験会、開催。
        </div>
      </div>

      {/* Body copy in two columns */}
      <div style={{ position: "absolute", top: 392, left: 32, right: 32, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, fontSize: 11.5, lineHeight: 1.7 }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: accent, marginBottom: 6 }}>
            ABOUT — なぜ体験会か
          </div>
          ドローンの飛行には、経験だけではなく、<br />
          法律の知識や資格も必要になります。<br />
          体験会で、丁寧にご説明します。
        </div>
        <div>
          <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", color: accent, marginBottom: 6 }}>
            FEATURES — 当校の特徴
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "16px 1fr", rowGap: 4, columnGap: 6 }}>
            <span style={{ fontWeight: 700, color: accent }}>01</span><span>白子駅から車で5分</span>
            <span style={{ fontWeight: 700, color: accent }}>02</span><span>屋内テニスコートで全天候型</span>
            <span style={{ fontWeight: 700, color: accent }}>03</span><span>丁寧なスタッフが指導</span>
          </div>
        </div>
      </div>

      {/* Hero image strip */}
      <div style={{ position: "absolute", left: 32, right: 32, top: 478, height: 138 }}>
        <ImagePlaceholder width="100%" height="100%" label="DRONE IN FLIGHT — sky / hex-rotor" radius={2} />
        <div style={{ position: "absolute", left: 12, top: 12, background: ink, color: paper, fontSize: 9, fontWeight: 700, letterSpacing: "0.2em", padding: "4px 8px" }}>
          全天候型コート · INDOOR
        </div>
      </div>

      {/* Bottom contact bar */}
      <div style={{ position: "absolute", left: 32, right: 32, top: 650, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, alignItems: "end", borderTop: `1px solid ${ink}`, paddingTop: 14 }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", opacity: 0.6 }}>TEL</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: "-0.01em" }}>059-335-4114</div>
        </div>
        <div style={{ fontSize: 10, lineHeight: 1.5, alignSelf: "center" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", opacity: 0.6 }}>NEW LOCATION</div>
          〒510-0203<br />三重県鈴鹿市野村町77-3
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 600, textAlign: "right" }}>
          ds-yokkaichi.jp →
        </div>
      </div>
    </div>
  );
}

// ---------- Variation 2: Bold Sky / Modernist ----------
// Full sky photo, drone silhouette, oversized hiragana, deep navy panel for info.

function PosterSky() {
  const navy = "#0a1538";
  const sky = "#3a7bd5";
  const cream = "#fbf9f4";
  const accent = "#ffd23f";

  return (
    <div
      style={{
        width: W,
        height: H,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Noto Sans JP', sans-serif",
        color: navy,
        background: `linear-gradient(180deg, #6fb1e8 0%, #a8c8e8 35%, #d8e4ec 55%, ${cream} 70%)`,
      }}
    >
      {/* Sun disc */}
      <div style={{ position: "absolute", top: 70, right: 70, width: 90, height: 90, borderRadius: "50%", background: accent, opacity: 0.85 }} />

      {/* Cloud stripes */}
      <div style={{ position: "absolute", top: 130, left: 0, right: 0, height: 8, background: "rgba(255,255,255,0.7)" }} />
      <div style={{ position: "absolute", top: 160, left: 60, right: 200, height: 4, background: "rgba(255,255,255,0.5)" }} />
      <div style={{ position: "absolute", top: 200, left: 0, right: 100, height: 6, background: "rgba(255,255,255,0.6)" }} />

      {/* Drone silhouette: simple geometric */}
      <svg viewBox="0 0 200 100" style={{ position: "absolute", top: 80, left: 130, width: 220, height: 110 }}>
        <g fill={navy}>
          <rect x="92" y="44" width="16" height="12" rx="2" />
          <rect x="40" y="48" width="60" height="3" />
          <rect x="100" y="48" width="60" height="3" />
          <rect x="96" y="22" width="3" height="30" />
          <rect x="101" y="22" width="3" height="30" />
          <circle cx="40" cy="50" r="14" fill="none" stroke={navy} strokeWidth="2" />
          <circle cx="160" cy="50" r="14" fill="none" stroke={navy} strokeWidth="2" />
          <circle cx="97" cy="22" r="14" fill="none" stroke={navy} strokeWidth="2" />
          <circle cx="103" cy="78" r="14" fill="none" stroke={navy} strokeWidth="2" />
          <line x1="40" y1="50" x2="100" y2="50" stroke={navy} strokeWidth="2" />
          <line x1="100" y1="50" x2="160" y2="50" stroke={navy} strokeWidth="2" />
        </g>
      </svg>

      {/* Eyebrow tag */}
      <div style={{ position: "absolute", top: 32, left: 32, background: navy, color: cream, padding: "8px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em" }}>
        スクール移転ご案内
      </div>

      {/* Date marker */}
      <div style={{ position: "absolute", top: 32, right: 32, textAlign: "right", color: navy, fontFamily: "'Inter', sans-serif" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 600 }}>OPENING</div>
        <div style={{ fontSize: 14, fontWeight: 700 }}>2026 · JUNE</div>
      </div>

      {/* Headline lockup */}
      <div style={{ position: "absolute", top: 240, left: 32, right: 32 }}>
        <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>
          鈴鹿に、<span style={{ color: sky }}>新しい空</span>。
        </div>
        <div style={{ fontSize: 78, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: navy }}>
          無料
        </div>
        <div style={{ fontSize: 78, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 0.95, color: navy, marginTop: -8 }}>
          体験会。
        </div>
        <div style={{ fontSize: 16, fontWeight: 600, marginTop: 14, color: navy }}>
          6月、白子駅から車で5分。屋内テニスコートで開講。
        </div>
      </div>

      {/* Navy info panel bottom */}
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 230, background: navy, color: cream, padding: "28px 32px 24px", boxSizing: "border-box" }}>
        {/* Yellow accent rule */}
        <div style={{ position: "absolute", top: 0, left: 0, height: 6, width: "40%", background: accent }} />

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 28 }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.25em", opacity: 0.6, marginBottom: 10, fontWeight: 700 }}>
              WHY · 体験会のねらい
            </div>
            <div style={{ fontSize: 12.5, lineHeight: 1.65, marginBottom: 16 }}>
              ドローンの飛行には、経験だけではなく、<br />
              法律の知識や資格も必要です。<br />
              体験会で、ひとつずつご説明します。
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5, fontSize: 11.5 }}>
              <div style={{ display: "flex", gap: 8 }}><span style={{ color: accent, fontWeight: 800 }}>+</span>白子駅から車で5分</div>
              <div style={{ display: "flex", gap: 8 }}><span style={{ color: accent, fontWeight: 800 }}>+</span>屋内テニスコート全天候型</div>
              <div style={{ display: "flex", gap: 8 }}><span style={{ color: accent, fontWeight: 800 }}>+</span>丁寧なスタッフが指導</div>
            </div>
          </div>

          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.25em", opacity: 0.6, marginBottom: 10, fontWeight: 700 }}>
              CONTACT · まずは電話を
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, fontWeight: 800, letterSpacing: "-0.01em", color: accent, lineHeight: 1 }}>
              059
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 30, fontWeight: 800, letterSpacing: "-0.01em", color: accent, lineHeight: 1 }}>
              335-4114
            </div>
            <div style={{ marginTop: 14, fontSize: 10, lineHeight: 1.5, opacity: 0.85 }}>
              〒510-0203<br />
              三重県鈴鹿市野村町77-3<br />
              <span style={{ fontFamily: "'Inter', sans-serif", opacity: 0.7 }}>ds-yokkaichi.jp</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Variation 3: Vertical Type / Tech-grid ----------
// Black background, neon cyan grid, vertical Japanese type, technical readout aesthetic.

function PosterTechGrid() {
  const bg = "#06080f";
  const ink = "#ffffff";
  const cyan = "#3ee0ff";
  const dim = "rgba(255,255,255,0.5)";
  const cell = 32;

  return (
    <div
      style={{
        width: W,
        height: H,
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Noto Sans JP', sans-serif",
        color: ink,
        background: bg,
      }}
    >
      {/* Faint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(${dim} 1px, transparent 1px), linear-gradient(90deg, ${dim} 1px, transparent 1px)`,
          backgroundSize: `${cell}px ${cell}px`,
          opacity: 0.08,
        }}
      />

      {/* Corner brackets */}
      {[
        { top: 24, left: 24, borderTop: `1px solid ${cyan}`, borderLeft: `1px solid ${cyan}` },
        { top: 24, right: 24, borderTop: `1px solid ${cyan}`, borderRight: `1px solid ${cyan}` },
        { bottom: 24, left: 24, borderBottom: `1px solid ${cyan}`, borderLeft: `1px solid ${cyan}` },
        { bottom: 24, right: 24, borderBottom: `1px solid ${cyan}`, borderRight: `1px solid ${cyan}` },
      ].map((s, i) => (
        <div key={i} style={{ position: "absolute", width: 14, height: 14, ...s }} />
      ))}

      {/* Top status bar */}
      <div style={{ position: "absolute", top: 40, left: 40, right: 40, display: "flex", justifyContent: "space-between", fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.25em", color: dim }}>
        <span>DS-YOKKAICHI / RELOCATION-026</span>
        <span><span style={{ color: cyan }}>●</span> SIGNAL OK · 35.001°N 136.583°E</span>
      </div>

      {/* Eyebrow */}
      <div style={{ position: "absolute", top: 72, left: 40, fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: cyan, padding: "4px 10px", border: `1px solid ${cyan}` }}>
        スクール移転ご案内
      </div>

      {/* Big stacked headline (kanji vertical) */}
      <div style={{ position: "absolute", top: 120, right: 40, writingMode: "vertical-rl", fontSize: 64, fontWeight: 900, letterSpacing: "0.05em", lineHeight: 1.1 }}>
        <div>６月、鈴鹿に誕生</div>
      </div>
      <div style={{ position: "absolute", top: 120, right: 122, writingMode: "vertical-rl", fontSize: 44, fontWeight: 800, letterSpacing: "0.05em", lineHeight: 1.1, color: cyan }}>
        無料体験会開催
      </div>

      {/* Numeric callout on left */}
      <div style={{ position: "absolute", top: 130, left: 40 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: dim }}>OPENING</div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 130, fontWeight: 900, lineHeight: 0.85, letterSpacing: "-0.05em" }}>
          06
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, fontWeight: 700, color: cyan, marginTop: -4 }}>
          / JUNE 2026
        </div>

        <div style={{ marginTop: 32, width: 200, fontSize: 11, lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
          ドローンの飛行には、経験<br />
          だけではなく、法律の知識や<br />
          資格も必要になります。<br />
          体験会で、ご説明します。
        </div>
      </div>

      {/* Mid: image placeholder */}
      <div style={{ position: "absolute", left: 40, top: 410, width: 220, height: 140 }}>
        <ImagePlaceholder width="100%" height="100%" label="OPERATOR — vest + controller" dark radius={2} />
        <div style={{ position: "absolute", top: 8, left: 8, fontFamily: "'Inter', sans-serif", fontSize: 8, letterSpacing: "0.2em", color: cyan }}>
          IMG-01
        </div>
      </div>

      {/* Right side telemetry/feature cards */}
      <div style={{ position: "absolute", right: 40, top: 440, width: 180, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { k: "01", v: "白子駅から車で5分" },
          { k: "02", v: "屋内テニスコート / 全天候型" },
          { k: "03", v: "丁寧なスタッフが指導" },
          { k: "04", v: "資格取得サポート" },
        ].map((it) => (
          <div key={it.k} style={{ border: `1px solid rgba(62,224,255,0.3)`, padding: "8px 10px", display: "grid", gridTemplateColumns: "auto 1fr", gap: 10, alignItems: "center" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: cyan, fontWeight: 700 }}>{it.k}</span>
            <span style={{ fontSize: 11, fontWeight: 600 }}>{it.v}</span>
          </div>
        ))}
      </div>

      {/* Bottom: contact strip */}
      <div style={{ position: "absolute", left: 40, right: 40, bottom: 50, borderTop: `1px solid ${cyan}`, paddingTop: 14, display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", gap: 16 }}>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: dim }}>TEL · CALL FIRST</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 24, fontWeight: 800, color: cyan, letterSpacing: "-0.01em" }}>
            059-335-4114
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: dim }}>LOCATION</div>
          <div style={{ fontSize: 10.5, lineHeight: 1.5, marginTop: 2 }}>
            〒510-0203<br />三重県鈴鹿市野村町77-3
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, letterSpacing: "0.3em", color: dim }}>WEB</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 600, marginTop: 2 }}>
            ds-yokkaichi.jp
          </div>
          <div style={{ marginTop: 6, fontSize: 9, letterSpacing: "0.2em", color: dim }}>SCAN ↗</div>
          {/* tiny qr-ish square */}
          <div style={{ display: "inline-block", width: 32, height: 32, marginTop: 4, background: `repeating-conic-gradient(${ink} 0 25%, transparent 0 50%) 0 0/8px 8px`, border: `1px solid ${ink}` }} />
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { PosterEditorial, PosterSky, PosterTechGrid });
