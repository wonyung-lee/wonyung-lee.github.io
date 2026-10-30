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
  .event .photos { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; }
  .event .photos img { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 6px; display: block; }
  .event .photos .placeholder { aspect-ratio: 4 / 3; border: 1px dashed rgba(127, 127, 127, 0.45); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #888; font-size: 0.9em; }
</style>

{% comment %}
  ── 행사 템플릿 (최신 행사를 위에) ──────────────────────────────────
  사진은 assets/img/photos/<연도>/ 에 올리고, 아래 블록을 해당 연도 아래 맨 위에 복사하세요.
  사진을 클릭하면 원본 크기로 열립니다.

  <div class="event">
    <h4>행사 이름 (0월)</h4>
    <div class="photos">
      <a href="{{ '/assets/img/photos/2026/FILE-1.jpg' | relative_url }}" target="_blank"><img src="{{ '/assets/img/photos/2026/FILE-1.jpg' | relative_url }}" alt="행사 이름 사진 1" loading="lazy"></a>
      <a href="{{ '/assets/img/photos/2026/FILE-2.jpg' | relative_url }}" target="_blank"><img src="{{ '/assets/img/photos/2026/FILE-2.jpg' | relative_url }}" alt="행사 이름 사진 2" loading="lazy"></a>
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
    <div class="placeholder">사진 준비 중</div>
    <div class="placeholder">사진 준비 중</div>
  </div>
</div>

<div class="event">
  <h4>ISE (9월)</h4>
  <div class="photos">
    <div class="placeholder">사진 준비 중</div>
    <div class="placeholder">사진 준비 중</div>
  </div>
</div>

{% include hero_network.liquid %}
