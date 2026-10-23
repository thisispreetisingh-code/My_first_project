(function () {
  "use strict";
  const D = window.LAB_DATA;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const nicheById = (id) => D.niches.find((n) => n.id === id);
  const fmt = (n) => (n >= 1e6 ? (n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + "M" : n >= 1e3 ? (n / 1e3).toFixed(n >= 1e4 ? 0 : 1) + "K" : String(Math.round(n)));
  const num = (id) => Math.max(0, parseFloat($("#" + id).value) || 0);

  const store = {
    get(k, d) { try { const v = localStorage.getItem("cnl:" + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("cnl:" + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } }
  };

  const state = {
    tab: "niches",
    niche: "ai",
    nicheFilter: { platform: "all", speed: "all", faceless: false },
    chanFilter: { niche: "all", platform: "all" },
    studioNiche: "ai",
    saved: store.get("saved", [])
  };

  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  function copy(text) {
    const done = () => toast("Copied");
    try {
      navigator.clipboard.writeText(text).then(done, () => fallbackCopy(text));
    } catch (e) { fallbackCopy(text); }
  }
  function fallbackCopy(text) {
    const ta = document.createElement("textarea");
    ta.value = text; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); toast("Copied"); } catch (e) { toast("Select the text and copy it manually"); }
    ta.remove();
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-copy]");
    if (b) copy(b.getAttribute("data-copy"));
  });

  /* ---------- Tabs ---------- */
  const TABS = ["niches", "channels", "studio", "remix", "analyze"];
  function show(tab) {
    if (!TABS.includes(tab)) tab = "niches";
    state.tab = tab;
    $$(".tabs button").forEach((b) => b.setAttribute("aria-selected", String(b.dataset.tab === tab)));
    $$(".pane").forEach((p) => (p.hidden = p.id !== "pane-" + tab));
    try { if (location.hash.slice(1) !== tab) history.replaceState(null, "", "#" + tab); } catch (e) { /* ignore */ }
  }
  $$(".tabs button").forEach((b) => b.addEventListener("click", () => { show(b.dataset.tab); window.scrollTo(0, 0); }));

  /* ---------- 1. Niches ---------- */
  const dots = (n) => "●".repeat(n) + "<i>" + "●".repeat(5 - n) + "</i>";
  const MAXD = 120;
  function timeline(r) {
    const l = (r[0] / MAXD) * 100, w = ((r[1] - r[0]) / MAXD) * 100;
    return `<div class="timeline" title="${r[0]}–${r[1]} days"><div class="track"></div>${[30, 60, 90].map((d) => `<div class="tick" style="left:${(d / MAXD) * 100}%"></div>`).join("")}<div class="range" style="left:${l}%;width:${w}%"></div></div>`;
  }

  function renderNiches() {
    const f = state.nicheFilter;
    let list = D.niches.slice();
    if (f.platform === "yt") list.sort((a, b) => b.ytFit - a.ytFit);
    if (f.platform === "ig") list.sort((a, b) => b.igFit - a.igFit);
    if (f.speed !== "all") list = list.filter((n) => n.monetize[0] <= +f.speed);
    if (f.faceless) list = list.filter((n) => n.faceless);
    if (!list.find((n) => n.id === state.niche) && list.length) state.niche = list[0].id;

    $("#niche-rows").innerHTML = list.length ? list.map((n) => `
      <tr data-id="${n.id}" class="${n.id === state.niche ? "on" : ""}" tabindex="0">
        <td class="nname"><b>${esc(n.name)}</b><span>${esc(n.tagline)}</span></td>
        <td><span class="dots" aria-label="YouTube fit ${n.ytFit} of 5">${dots(n.ytFit)}</span></td>
        <td><span class="dots" aria-label="Instagram fit ${n.igFit} of 5">${dots(n.igFit)}</span></td>
        <td class="num">${n.rpm}</td>
        <td>${timeline(n.monetize)}<div class="num" style="font-size:.78rem;color:var(--muted)">${n.speed}</div></td>
        <td>${n.faceless ? '<span class="pill good">Faceless OK</span>' : '<span class="pill">On-camera helps</span>'}</td>
        <td><span class="pill ${n.competition === "High" ? "gold" : ""}">${n.competition}</span></td>
      </tr>`).join("") : `<tr><td colspan="7">No niche matches these filters. Remove one to see results.</td></tr>`;

    $$("#niche-rows tr[data-id]").forEach((tr) => {
      const pick = () => { state.niche = tr.dataset.id; renderNiches(); };
      tr.addEventListener("click", pick);
      tr.addEventListener("keydown", (e) => { if (e.key === "Enter") pick(); });
    });
    renderNicheDetail();
  }

  function renderNicheDetail() {
    const n = nicheById(state.niche);
    if (!n) { $("#niche-detail").innerHTML = ""; return; }
    const count = D.channels.filter((c) => c.niche === n.id).length;
    $("#niche-detail").innerHTML = `
      <div class="panel">
        <div class="eyebrow">Niche profile</div>
        <h3>${esc(n.name)}</h3>
        <p>${esc(n.why)}</p>
        <dl class="kv">
          <dt>Audience</dt><dd>${esc(n.audience)}</dd>
          <dt>Est. YouTube RPM</dt><dd class="num">${n.rpm} per 1,000 views</dd>
          <dt>Typical time to monetize</dt><dd>${n.speed} with daily short-form + 2 long videos a week</dd>
          <dt>Watch out</dt><dd>${esc(n.risks)}</dd>
        </dl>
        <h4>Sub-niches with less competition</h4>
        <div class="tags">${n.subNiches.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
        <h4>Formats that perform</h4>
        <ul class="list">${n.formats.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>
      </div>
      <div class="panel">
        <div class="eyebrow">How it pays</div>
        <div class="paths">${n.paths.map((p) => `<div class="path"><b>${esc(p.name)}</b><em class="pill gold">${esc(p.value)}</em><span>${esc(p.when)}</span></div>`).join("")}</div>
        <div class="filters">
          <button class="btn" data-go="channels" data-niche="${n.id}">See ${count} channels to study</button>
          <button class="btn ghost" data-go="studio" data-niche="${n.id}">Open in Content Studio</button>
        </div>
      </div>
      <div class="panel" style="grid-column:1/-1">
        <div class="eyebrow">90-day launch plan</div>
        <div class="plan">${n.plan.map((p) => `<div class="phase"><h4>${p.phase}</h4><ul>${p.tasks.map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>`).join("")}</div>
      </div>`;
  }

  $("#niche-filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    const k = b.dataset.k, v = b.dataset.v;
    if (k === "faceless") state.nicheFilter.faceless = !state.nicheFilter.faceless;
    else state.nicheFilter[k] = v;
    $$("#niche-filters .chip").forEach((c) => {
      const on = c.dataset.k === "faceless" ? state.nicheFilter.faceless : state.nicheFilter[c.dataset.k] === c.dataset.v;
      c.setAttribute("aria-pressed", String(on));
    });
    renderNiches();
  });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-go]"); if (!b) return;
    const id = b.dataset.niche;
    if (b.dataset.go === "channels") { state.chanFilter.niche = id; syncChanChips(); renderChannels(); }
    if (b.dataset.go === "studio") { state.studioNiche = id; $("#st-niche").value = id; renderStudio(); }
    if (b.dataset.go === "remix") { $("#rmx-niche").value = id; if (b.dataset.title) $("#rmx-title").value = b.dataset.title; renderRemix(); }
    show(b.dataset.go); window.scrollTo(0, 0);
  });

  /* ---------- 2. Channels ---------- */
  function syncChanChips() {
    $$("#chan-filters .chip").forEach((c) => c.setAttribute("aria-pressed", String(state.chanFilter[c.dataset.k] === c.dataset.v)));
  }
  function renderChannels() {
    const f = state.chanFilter;
    const list = D.channels.filter((c) => (f.niche === "all" || c.niche === f.niche) && (f.platform === "all" || c.platforms.includes(f.platform)));
    $("#chan-count").textContent = `${list.length} channel${list.length === 1 ? "" : "s"}`;
    $("#chan-cards").innerHTML = list.map((c) => {
      const q = encodeURIComponent(c.name);
      return `<article class="card">
        <header><div><h3>${esc(c.name)}</h3><div class="handle">${esc(c.handle)} · ${esc(nicheById(c.niche).name)}</div></div><span class="size">${esc(c.size)}</span></header>
        <div class="tags">${c.platforms.map((p) => `<span class="platform">${p}</span>`).join("")}<span class="tag">${esc(c.format)}</span></div>
        <div class="row"><small>Why it works</small><p>${esc(c.works)}</p></div>
        <div class="row copy"><small>Model this format</small><p>${esc(c.copy)}</p></div>
        <div class="row"><small>How to do it better</small><p>${esc(c.improve)}</p></div>
        <div class="row"><small>Their motive</small><p>${esc(c.motive)}</p></div>
        <footer>
          <a href="https://www.youtube.com/results?search_query=${q}" target="_blank" rel="noopener">Find on YouTube ↗</a>
          ${c.platforms.includes("Instagram") ? `<a href="https://www.google.com/search?q=${q}+instagram" target="_blank" rel="noopener">Find on Instagram ↗</a>` : ""}
          <button class="btn small ghost" data-go="remix" data-niche="${c.niche}" data-title="${esc(c.copy)}">Remix this</button>
        </footer>
      </article>`;
    }).join("") || "<p>No channels match. Try another filter.</p>";
  }
  $("#chan-filters").innerHTML =
    `<span class="label">Niche</span><button class="chip" data-k="niche" data-v="all">All</button>` +
    D.niches.map((n) => `<button class="chip" data-k="niche" data-v="${n.id}">${esc(n.name.split(" & ")[0])}</button>`).join("") +
    `<span class="label" style="margin-left:10px">Platform</span>` +
    ["all", "YouTube", "Instagram"].map((p) => `<button class="chip" data-k="platform" data-v="${p}">${p === "all" ? "Both" : p}</button>`).join("");
  $("#chan-filters").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    state.chanFilter[b.dataset.k] = b.dataset.v; syncChanChips(); renderChannels();
  });

  /* ---------- 3. Content Studio ---------- */
  const slug = (t) => t.toLowerCase().replace(/[^a-z0-9]+/g, "");
  const titleCase = (t) => t.replace(/\b\w/g, (c) => c.toUpperCase());
  const fill = (s, topic) => s.replace(/\{topic\}/g, topic).replace(/\{tag\}/g, slug(topic) || "creator").replace(/\{money\}/g, "thousands").replace(/\{n\}/g, "1").replace(/\{job\}/g, topic);

  function outItem(text) {
    return `<div class="out-item"><pre>${esc(text)}</pre><button class="btn small ghost" data-copy="${esc(text)}">Copy</button></div>`;
  }

  function renderStudio() {
    const id = $("#st-niche").value; state.studioNiche = id;
    const S = D.studio[id];
    const raw = $("#st-topic").value.trim();
    const topic = raw || $("#st-topic").placeholder.replace(/^e\.g\.\s*/, "");
    const T = titleCase(topic);
    const view = $("#st-view").dataset.view || "titles";
    $$("#st-view .chip").forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.v === view)));

    let out = "";
    if (view === "titles") out = S.titles.map((t) => outItem(fill(t, T))).join("");
    if (view === "captions") out = S.captions.map((t) => outItem(fill(t, topic))).join("");
    if (view === "description") out = outItem(fill(S.description, topic));
    if (view === "hashtags") {
      const own = "#" + (slug(topic) || "creator");
      const set = [own, ...S.hashtags.broad.slice(0, 3), ...S.hashtags.mid, ...S.hashtags.niche];
      out = `<p class="note">Mix: 1 topic tag + 3 broad + 4 mid-size + 4 niche. On Instagram 3–5 relevant tags is plenty; on YouTube the first 3 show above the title.</p>` +
        outItem(set.join(" ")) + outItem(set.slice(0, 5).join(" ") + "  (Instagram short set)");
    }
    if (view === "keywords") {
      const kw = [topic, `${topic} for beginners`, `how to ${topic}`, `${topic} 2026`, `best ${topic}`, `${topic} tips`, ...S.keywords];
      out = `<p class="note">Put the main keyword in the title, the first line of the description, a chapter name, and say it out loud in the first 30 seconds (YouTube reads captions).</p>` + outItem(kw.join(", "));
    }
    if (view === "scripts") {
      out = S.scripts.map((sc) => {
        const text = sc.beats.map(([l, b]) => `${l}: ${fill(b, topic)}`).join("\n");
        return `<div class="panel flat"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><h4>${esc(sc.name)}</h4><button class="btn small ghost" data-copy="${esc(text)}">Copy</button></div>
          <div class="beats">${sc.beats.map(([l, b]) => `<div class="beat"><span>${esc(l)}</span><p>${esc(fill(b, topic))}</p></div>`).join("")}</div></div>`;
      }).join("");
    }
    $("#st-out").innerHTML = out;
    $("#st-out-title").textContent = raw ? `For “${raw}”` : `Example topic: “${topic}”`;

    $("#st-ideas").innerHTML = S.ideas.map((i, k) => `<div class="idea"><b>${esc(fill(i.t, "your niche"))}</b><span class="pill">${esc(i.f)}</span><q>${esc(i.hook)}</q>
      <div style="grid-column:1/-1;display:flex;gap:6px"><button class="btn small ghost" data-save="${k}">Save idea</button><button class="btn small ghost" data-use="${esc(i.t)}">Use as topic</button></div></div>`).join("");
    $("#st-editing").innerHTML = S.editing.map((e) => `<li>${esc(e)}</li>`).join("");
    renderSaved();
  }

  const examples = { finance: "SIP investing", ai: "ChatGPT for students", fitness: "desk job back pain", food: "high protein breakfast", story: "the fall of Kodak" };
  $("#st-niche").innerHTML = D.niches.map((n) => `<option value="${n.id}">${esc(n.name)}</option>`).join("");
  $("#st-niche").value = state.studioNiche;
  $("#st-niche").addEventListener("change", () => { $("#st-topic").placeholder = "e.g. " + examples[$("#st-niche").value]; renderStudio(); });
  $("#st-topic").placeholder = "e.g. " + examples[state.studioNiche];
  $("#st-topic").addEventListener("input", renderStudio);
  $("#st-view").addEventListener("click", (e) => { const b = e.target.closest(".chip"); if (!b) return; $("#st-view").dataset.view = b.dataset.v; renderStudio(); });
  $("#st-ideas").addEventListener("click", (e) => {
    const s = e.target.closest("[data-save]"), u = e.target.closest("[data-use]");
    const S = D.studio[state.studioNiche];
    if (s) {
      const i = S.ideas[+s.dataset.save];
      if (!state.saved.find((x) => x.t === i.t)) { state.saved.push({ t: i.t, f: i.f, niche: state.studioNiche }); store.set("saved", state.saved); }
      renderSaved(); toast("Saved to your idea board");
    }
    if (u) { $("#st-topic").value = u.dataset.use.replace(/\{job\}/g, "your job"); renderStudio(); $("#st-topic").focus(); }
  });
  function renderSaved() {
    const box = $("#st-saved");
    box.innerHTML = state.saved.length ? state.saved.map((s, k) => `<div class="out-item"><p><b>${esc(s.t)}</b><br><span class="note">${esc(nicheById(s.niche).name)} · ${esc(s.f)}</span></p><button class="btn small ghost" data-del="${k}">Remove</button></div>`).join("")
      : `<p class="note">Nothing saved yet. Press “Save idea” on any idea to keep it here (stored in this browser only).</p>`;
  }
  $("#st-saved").addEventListener("click", (e) => {
    const d = e.target.closest("[data-del]"); if (!d) return;
    state.saved.splice(+d.dataset.del, 1); store.set("saved", state.saved); renderSaved();
  });

  /* ---------- 4. Remix ---------- */
  $("#rmx-niche").innerHTML = D.niches.map((n) => `<option value="${n.id}">${esc(n.name)}</option>`).join("");
  $("#rmx-niche").value = "ai";
  $("#rmx-motive").innerHTML = D.motives.map((m) => `<option value="${m.id}">${esc(m.name)}</option>`).join("");
  $("#rmx-levers").innerHTML = D.remixLevers.map((l, i) => `<label class="lever"><input type="checkbox" value="${l.id}" ${i === 0 || i === 4 ? "checked" : ""}><div><b>${esc(l.name)}</b><span>${esc(l.desc)}</span></div></label>`).join("");
  $("#rmx-redlines").innerHTML = D.rules.policy.map((p) => `<li>${esc(p)}</li>`).join("");

  function renderRemix() {
    const orig = $("#rmx-title").value.trim() || "5 AI tools that replace a full-time assistant";
    const audience = $("#rmx-audience").value.trim() || "college students in India";
    const fmtSel = $("#rmx-format").value;
    const n = nicheById($("#rmx-niche").value);
    const m = D.motives.find((x) => x.id === $("#rmx-motive").value);
    const levers = $$("#rmx-levers input:checked").map((i) => D.remixLevers.find((l) => l.id === i.value));
    const clean = orig.replace(/^["']|["']$/g, "");
    const titles = (levers.length ? levers : [D.remixLevers[0]]).map((l) => l.title.replace("{orig}", clean).replace("{audience}", audience));
    const S = D.studio[n.id];
    const script = S.scripts[fmtSel === "short" ? 0 : 1];
    const hook = S.ideas[0].hook;
    const brief =
`REMIX BRIEF
Original: ${clean}
Niche: ${n.name} · Format: ${fmtSel === "short" ? "Short / Reel" : "Long-form"} · Audience: ${audience}
Motive: ${m.name} → ${m.focus}

Title options:
${titles.map((t) => "- " + t).join("\n")}

Keep from the original: topic demand, title structure, pacing.
Change: ${levers.map((l) => l.name.toLowerCase()).join(", ") || "localise it"}; your own script, footage, voice and examples.

Structure:
${script.beats.map(([l, b]) => `- ${l}: ${fill(b, clean)}`).join("\n")}

CTA: ${m.cta}`;

    $("#rmx-out").innerHTML = `
      <div class="panel">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap"><div class="eyebrow">Your remix brief</div><button class="btn small" data-copy="${esc(brief)}">Copy brief</button></div>
        <h4>New title options</h4>
        <div class="out">${titles.map(outItem).join("")}</div>
        <h4>Hook pattern to adapt</h4><p>“${esc(hook)}” → rewrite it in your own words for ${esc(audience)}.</p>
        <h4>Structure (${fmtSel === "short" ? "Short / Reel" : "long-form"})</h4>
        <div class="beats">${script.beats.map(([l, b]) => `<div class="beat"><span>${esc(l)}</span><p>${esc(fill(b, clean))}</p></div>`).join("")}</div>
        <h4>Motive: ${esc(m.name)}</h4><p>${esc(m.focus)} End with: <b>${esc(m.cta)}</b>.</p>
      </div>
      <div class="panel">
        <div class="eyebrow">Originality check before you post</div>
        <div class="checks">${[
          "Script written by you, not transcribed from theirs",
          "All footage, voice-over and thumbnail made or licensed by you",
          `At least one real change: ${levers.map((l) => l.name.toLowerCase()).join(", ") || "pick a lever above"}`,
          "You add something they didn't: data, a test, a template, a local example",
          "Music from the platform's library or royalty-free",
          "Credit the inspiration if you reference their idea directly"
        ].map((c) => `<div class="check"><span class="st mid">?</span><p>${esc(c)}</p></div>`).join("")}</div>
      </div>`;
  }
  ["#rmx-title", "#rmx-audience"].forEach((s) => $(s).addEventListener("input", renderRemix));
  ["#rmx-niche", "#rmx-motive", "#rmx-format"].forEach((s) => $(s).addEventListener("change", renderRemix));
  $("#rmx-levers").addEventListener("change", renderRemix);

  /* ---------- 5. Analyzer ---------- */
  function check(ok, mid, label, tip) {
    const cls = ok ? "ok" : mid ? "mid" : "no";
    const sym = ok ? "✓" : mid ? "~" : "!";
    return { pts: ok ? 20 : mid ? 12 : 4, html: `<div class="check"><span class="st ${cls}">${sym}</span><p>${label}${ok ? "" : `<small>${tip}</small>`}</p></div>` };
  }
  function eta(remaining, perDay) {
    if (remaining <= 0) return { done: true, text: "Reached" };
    if (perDay <= 0) return { done: false, text: "Not on track at current pace" };
    const d = Math.ceil(remaining / perDay);
    return { done: false, days: d, text: d > 730 ? "2+ years at current pace" : `~${d} days at current pace` };
  }
  function meter(label, val, goal, unit, e, gold) {
    const pct = Math.min(100, (val / goal) * 100);
    return `<div class="meter"><div class="meter-head"><span>${label}</span><b class="num">${fmt(val)} / ${fmt(goal)} ${unit}</b></div><div class="bar ${gold ? "gold" : ""}"><i style="width:${pct}%"></i></div><small>${e.text}</small></div>`;
  }

  function analyzeYT() {
    const subs = num("yt-subs"), hours = num("yt-hours"), shorts = num("yt-shorts");
    const sR = num("yt-subs28") / 28, hR = num("yt-hours28") / 28, shR = num("yt-shorts28") / 28;
    const up = num("yt-uploads"), avg = num("yt-avgviews"), ctr = num("yt-ctr"), avd = num("yt-avd");
    const n = nicheById($("#yt-niche").value);

    const tiers = D.rules.youtube.map((t, i) => {
      const hGoal = i ? 4000 : 3000, sGoal = i ? 10e6 : 3e6;
      const eS = eta(t.subs - subs, sR), eH = eta(hGoal - hours, hR), eSh = eta(sGoal - shorts, shR);
      const best = [eH, eSh].sort((a, b) => (a.done ? -1 : b.done ? 1 : (a.days || 1e9) - (b.days || 1e9)))[0];
      const all = [eS, best];
      const reached = all.every((x) => x.done);
      const days = reached ? 0 : all.some((x) => !x.done && !x.days) ? null : Math.max(...all.map((x) => x.days || 0));
      return { t, eS, eH, eSh, hGoal, sGoal, reached, days };
    });

    const growthPct = subs ? (num("yt-subs28") / subs) * 100 : 0;
    const c = [
      check(up >= 3, up >= 1, `Uploading ${up}× per week`, "Aim for 3+ uploads a week (Shorts count). Consistency beats perfection in the first 90 days."),
      check(ctr >= 6, ctr >= 4, `Click-through rate ${ctr}%`, "Below ~5% usually means the thumbnail or title is weak. Test 3 thumbnails per video (YouTube's Test & Compare)."),
      check(avd >= 50, avd >= 35, `Average percentage viewed ${avd}%`, "Cut the intro: deliver the promise in the first 15 seconds and add a pattern interrupt every 5–10 seconds."),
      check(growthPct >= 10 || num("yt-subs28") >= 300, growthPct >= 4, `${fmt(num("yt-subs28"))} new subscribers in 28 days`, "Add a series and a reason to subscribe ('Part 2 drops Friday'). Pin a comment linking the next episode."),
      check(subs ? avg / subs >= 0.3 : avg >= 300, subs ? avg / subs >= 0.1 : avg >= 100, `Average ${fmt(avg)} views per video`, "Views are low relative to subscribers. Pick topics with proven demand; check the channels in Step 2 for what's working now.")
    ];
    const score = c.reduce((a, x) => a + x.pts, 0);
    const monthlyViews = avg * up * 4.3;
    const rev = [monthlyViews * (parseFloat(n.rpm.replace(/[^0-9–-]/g, "").split(/[–-]/)[0]) || 3) / 1000, monthlyViews * n.rpmMid / 1000];

    $("#yt-out").innerHTML = `
      <div class="panel">
        <div class="eyebrow">Channel health</div>
        <div class="score"><div class="big num">${score}<small>/100</small></div><p>${score >= 80 ? "Strong. Scale what works and add long-form for watch hours." : score >= 55 ? "Good base. Fix the red items below to speed up monetization." : "Needs work. Fix the basics below before posting more."}</p></div>
        <div class="checks">${c.map((x) => x.html).join("")}</div>
      </div>
      <div class="panel">
        <div class="eyebrow">Monetization progress (YouTube Partner Program)</div>
        ${tiers.map((x) => `
          <h4>${x.t.tier} ${x.reached ? '<span class="pill good">Eligible</span>' : x.days != null ? `<span class="pill gold">~${x.days} days</span>` : '<span class="pill">Off pace</span>'}</h4>
          ${meter("Subscribers", subs, x.t.subs, "", x.eS)}
          ${meter("Watch hours (12 mo)", hours, x.hGoal, "hrs", x.eH, true)}
          ${meter("Shorts views (90 days)", shorts, x.sGoal, "", x.eSh, true)}
          <p class="note">Needs subscribers AND either watch hours OR Shorts views. ${esc(x.t.plus)}. Unlocks: ${esc(x.t.unlocks)}.</p>`).join("")}
        <p class="note">${esc(D.rules.youtubeNote)}</p>
      </div>
      <div class="panel" style="grid-column:1/-1">
        <div class="eyebrow">Once monetized: rough ad revenue in ${esc(n.name)}</div>
        <p><b class="num">$${fmt(rev[0])}–$${fmt(rev[1])}</b> per month from ~${fmt(monthlyViews)} long-form views (your average views × uploads). Shorts pay far less per view. Affiliates and sponsors usually earn more than ads for channels under 100K.</p>
        <h4>Next moves for this niche</h4>
        <ul class="list">${n.plan[tiers[1].reached ? 2 : subs < 500 ? 0 : 1].tasks.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      </div>`;
  }

  function analyzeIG() {
    const f = num("ig-followers"), g = num("ig-gained28") / 28, views = num("ig-reelviews");
    const likes = num("ig-likes"), com = num("ig-comments"), saves = num("ig-saves"), posts = num("ig-posts");
    const er = f ? ((likes + com + saves) / f) * 100 : 0;
    const reach = f ? views / f : 0;
    const shareRate = views ? (saves / views) * 100 : 0;
    const c = [
      check(er >= 3, er >= 1.5, `Engagement rate ${er.toFixed(1)}%`, "Brands look for 3%+. Ask a question in the caption, reply to every comment in the first hour, and use 'Comment X and I'll send it'."),
      check(reach >= 1, reach >= 0.3, `Reels reach ${reach.toFixed(2)}× your followers`, "Reels aren't reaching new people. Tighten the first 1.5 seconds: show the result first and add on-screen text."),
      check(shareRate >= 1.5, shareRate >= 0.5, `Saves + shares ${shareRate.toFixed(1)}% of views`, "Make more 'save-worthy' posts: checklists, recipes, cheat-sheets and carousels."),
      check(posts >= 5, posts >= 3, `Posting ${posts}× per week`, "Post Reels 5×/week for the first 90 days, plus Stories daily to warm up followers."),
      check(num("ig-gained28") >= f * 0.1 || num("ig-gained28") >= 500, num("ig-gained28") >= f * 0.04, `${fmt(num("ig-gained28"))} new followers in 28 days`, "Use collab posts with similar-size creators and a clear series name so people follow for the next part.")
    ];
    const score = c.reduce((a, x) => a + x.pts, 0);
    const deal = Math.max(10, (f / 1000) * 10 * Math.min(2, Math.max(0.5, er / 3)));
    $("#ig-out").innerHTML = `
      <div class="panel">
        <div class="eyebrow">Account health</div>
        <div class="score"><div class="big num">${score}<small>/100</small></div><p>${score >= 80 ? "Brand-ready. Build a media kit and start pitching." : score >= 55 ? "Growing. Improve the red items to get better brand rates." : "Focus on Reels hooks and save-worthy posts first."}</p></div>
        <div class="checks">${c.map((x) => x.html).join("")}</div>
      </div>
      <div class="panel">
        <div class="eyebrow">Monetization milestones (Instagram)</div>
        ${D.rules.instagram.map((t) => { const e = eta(t.subs - f, g); return `<h4>${t.tier} ${e.done ? '<span class="pill good">Reached</span>' : e.days ? `<span class="pill gold">~${e.days} days</span>` : '<span class="pill">Off pace</span>'}</h4>${meter("Followers", f, t.subs, "", e)}<p class="note">${esc(t.alt)}. Unlocks: ${esc(t.unlocks)}.</p>`; }).join("")}
        <p class="note">Instagram thresholds vary by country and change often; your Professional Dashboard shows what you're eligible for.</p>
      </div>
      <div class="panel" style="grid-column:1/-1">
        <div class="eyebrow">What a brand might pay you</div>
        <p>About <b class="num">$${fmt(deal * 0.6)}–$${fmt(deal * 1.4)}</b> per Reel, using the common rule of thumb of ~$10 per 1,000 followers adjusted for your ${er.toFixed(1)}% engagement. Saves and shares make the strongest case in a pitch.</p>
      </div>`;
  }

  $("#yt-form").addEventListener("input", analyzeYT);
  $("#yt-form").addEventListener("submit", (e) => { e.preventDefault(); analyzeYT(); });
  $("#ig-form").addEventListener("input", analyzeIG);
  $("#ig-form").addEventListener("submit", (e) => { e.preventDefault(); analyzeIG(); });
  $("#yt-niche").innerHTML = D.niches.map((n) => `<option value="${n.id}">${esc(n.name)}</option>`).join("");
  $("#yt-niche").value = "ai";
  $("#yt-niche").addEventListener("change", analyzeYT);

  $("#an-platform").addEventListener("click", (e) => {
    const b = e.target.closest(".chip"); if (!b) return;
    $$("#an-platform .chip").forEach((c) => c.setAttribute("aria-pressed", String(c === b)));
    $("#an-yt").hidden = b.dataset.v !== "yt"; $("#an-ig").hidden = b.dataset.v !== "ig";
  });

  // Optional: pull public subscriber/video counts with a YouTube Data API v3 key.
  $("#yt-fetch").addEventListener("click", async () => {
    const key = $("#yt-key").value.trim(), handle = $("#yt-handle").value.trim().replace(/^@/, "");
    const msg = $("#yt-fetch-msg");
    if (!key || !handle) { msg.textContent = "Enter both an API key and a channel handle."; return; }
    msg.textContent = "Fetching…";
    try {
      const r = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&forHandle=${encodeURIComponent("@" + handle)}&key=${encodeURIComponent(key)}`);
      const j = await r.json();
      if (!r.ok) throw new Error(j.error && j.error.message ? j.error.message : "Request failed");
      const it = j.items && j.items[0];
      if (!it) { msg.textContent = `No channel found for @${handle}. Check the handle spelling.`; return; }
      const st = it.statistics;
      $("#yt-subs").value = st.subscriberCount || 0;
      const vc = +st.videoCount || 0;
      if (vc) $("#yt-avgviews").value = Math.round((+st.viewCount || 0) / vc);
      msg.textContent = `Loaded ${it.snippet.title}: ${fmt(+st.subscriberCount)} subscribers, ${vc} videos. Watch hours and CTR are private, so copy them from YouTube Studio.`;
      analyzeYT();
    } catch (e) {
      msg.textContent = "Couldn't reach the YouTube API from here (" + e.message + "). Run the app locally from the repo, or type the numbers from YouTube Studio.";
    }
  });

  /* ---------- Boot ---------- */
  renderNiches();
  syncChanChips();
  renderChannels();
  renderStudio();
  renderRemix();
  analyzeYT();
  analyzeIG();
  $("#updated").textContent = D.updated;
  show(location.hash.slice(1) || "niches");
  window.addEventListener("hashchange", () => show(location.hash.slice(1)));
})();
