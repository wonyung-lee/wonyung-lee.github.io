---
layout: page
permalink: /photos/
title: photos
description: 연구실 활동 사진 (Lab photos)
nav: true
nav_order: 6
---

<style>
  .year { margin-top: 1.4rem; }
  .event { margin: 0 -1rem; padding: 1.4rem 1rem 1.6rem; border-radius: 8px; }
  .event:nth-of-type(odd) { background: rgba(127, 127, 127, 0.07); }
  .event h4 { margin: 0 0 0.9rem; font-size: 1.05rem; }
  /* 사진은 높이를 맞추고 가로·세로 비율은 그대로 (잘림 없음) */
  .event .photos { display: flex; flex-wrap: wrap; gap: 1rem; }
  .event .photos img { height: 300px; width: auto; max-width: 100%; border-radius: 6px; display: block; }
  .event .photos .placeholder { flex: 1 1 260px; aspect-ratio: 4 / 3; border: 1px dashed rgba(127, 127, 127, 0.45); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #888; font-size: 0.9em; }
  /* 모바일: 아래로 쌓지 않고 한 줄에 나란히 (사진마다 --ar = 가로/세로 비율) */
  @media (max-width: 600px) {
    .event .photos { flex-wrap: nowrap; align-items: flex-start; gap: 0.5rem; }
    .event .photos img { height: auto; width: 0; min-width: 0; flex: var(--ar, 1) 1 0; }
  }
</style>

{% comment %}
  ── 행사 템플릿 (최신 행사를 위에) ──────────────────────────────────
  사진은 assets/img/photos/<연도>/ 에 올리고, 아래 블록을 해당 연도 아래 맨 위에 복사하세요.
  사진은 높이 300px로 맞춰서 나란히 보입니다 (가로·세로 사진 섞여도 잘리지 않음).
  style="--ar: …" 에는 사진의 가로÷세로 비율을 적으세요 (예: 세로 450×600 → 0.75, 가로 800×600 → 1.3333).
  모바일에서도 이 비율대로 한 줄에 나란히 보입니다.

  <div class="event">
    <h4>행사 이름 (0월)</h4>
    <div class="photos">
      <img src="{{ '/assets/img/photos/2026/FILE-1.webp' | relative_url }}" style="--ar: 0.75" alt="행사 이름 사진 1" loading="lazy">
      <img src="{{ '/assets/img/photos/2026/FILE-2.webp' | relative_url }}" style="--ar: 1.3333" alt="행사 이름 사진 2" loading="lazy">
    </div>
  </div>
  ────────────────────────────────────────────────────────────────────
{% endcomment %}

## 2026
{: .year}

<div class="event">
  <h4>ISCB (11월)</h4>
  <div class="photos">
    <div class="placeholder">사진 준비 중</div>
    <div class="placeholder">사진 준비 중</div>
  </div>
</div>

<div class="event">
  <h4>인삼학회 (10월)</h4>
  <div class="photos">
    <img src="{{ '/assets/img/photos/2026/ginseng-1.webp' | relative_url }}" style="--ar: 0.75" alt="인삼학회 사진 1" loading="lazy">
    <img src="{{ '/assets/img/photos/2026/ginseng-2.webp' | relative_url }}" style="--ar: 1.3333" alt="인삼학회 사진 2" loading="lazy">
  </div>
</div>

<div class="event">
  <h4>ISE (9월)</h4>
  <div class="photos">
    <img src="{{ '/assets/img/photos/2026/ise.webp' | relative_url }}" style="--ar: 1.5" alt="ISE 사진" loading="lazy">
  </div>
</div>

{% include hero_network.liquid %}
