---
layout: page
permalink: /people/
title: people
description: 연구실 구성원 (Lab members)
nav: true
nav_order: 4
---

<style>
  /* PI: 크게 */
  .pi { display: flex; align-items: center; gap: 2rem; margin: 0.8rem 0 2rem; flex-wrap: wrap; }
  .pi .swap { width: 240px; border-radius: 8px; }
  .pi .info p { margin: 0.2rem 0; }
  .pi .info .name { font-size: 1.2rem; }

  /* 나머지 구성원: 같은 크기 · 같은 간격 */
  .people-grid { display: grid; grid-template-columns: repeat(auto-fill, 170px); gap: 1.6rem 2rem; margin: 0.8rem 0 1.6rem; }
  .person .swap { width: 170px; border-radius: 6px; }
  .person p { margin: 0.45rem 0 0; line-height: 1.35; }
  .person .role { margin-top: 0.1rem; font-size: 0.88em; color: #888; }

  /* 사진 전환: 평소엔 프로필 사진, 마우스를 올리면(모바일은 탭하면) 재밌는 사진 */
  .swap { position: relative; aspect-ratio: 3 / 4; overflow: hidden; cursor: pointer; }
  .swap img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: opacity 0.35s ease; }
  .swap .fun { opacity: 0; }
  .swap.flipped .fun { opacity: 1; }
  @media (hover: hover) { .swap:hover .fun { opacity: 1; } }

  .people-role { margin-top: 2.2rem; }
  .roster p { margin: 0.35rem 0; }
  .tba { color: #888; }
</style>

{% comment %}
  ── 구성원 카드 템플릿 ──────────────────────────────────────────────
  사진 두 장(프로필 · 재밌는 사진)을 assets/img/people/ 에 올리고, 아래 블록을
  해당 섹션의 <div class="people-grid"> 안에 복사해 넣으세요. (비어 있는 섹션이면
  <div class="tba">TBA</div> 를 <div class="people-grid">…</div> 로 바꾸기)
  재밌는 사진이 없으면 <img class="fun" …> 줄을 지우면 됩니다.

  <div class="person">
    <div class="swap">
      <img src="{{ '/assets/img/people/NAME-profile.webp' | relative_url }}" alt="이름">
      <img class="fun" src="{{ '/assets/img/people/NAME.webp' | relative_url }}" alt="" aria-hidden="true">
    </div>
    <p><strong>이름</strong></p>
    <p class="role">직함</p>
  </div>
  ────────────────────────────────────────────────────────────────────
{% endcomment %}

## Principal Investigator
{: .people-role}

<div class="pi">
  <div class="swap">
    <img src="{{ '/assets/img/people/wonyung-lee-profile.webp' | relative_url }}" alt="이원융 (Won-Yung Lee)">
    <img class="fun" src="{{ '/assets/img/people/wonyung-lee.webp' | relative_url }}" alt="" aria-hidden="true">
  </div>
  <div class="info">
    <p class="name"><strong>이원융 (Won-Yung Lee)</strong> · 조교수</p>
    <p>원광대학교 한의과대학 · 한의전문관 609호</p>
    <p><a href="mailto:wonyung21@wku.ac.kr">wonyung21@wku.ac.kr</a> · <a href="https://scholar.google.com/citations?user=soRuShoAAAAJ&hl=ko">Google Scholar</a></p>
  </div>
</div>

## Postdoctoral Researchers
{: .people-role}

<div class="people-grid">
  <div class="person">
    <div class="swap">
      <img src="{{ '/assets/img/people/junho-lee-profile.webp' | relative_url }}" alt="이준호 (Jun-ho Lee)">
      <img class="fun" src="{{ '/assets/img/people/junho-lee.webp' | relative_url }}" alt="" aria-hidden="true">
    </div>
    <p><strong>이준호 (Jun-ho Lee)</strong></p>
    <p class="role">박사후연구원 (연구교수)</p>
  </div>
</div>

## Ph.D. Students
{: .people-role}

<div class="tba">TBA</div>

## M.S. Students
{: .people-role}

<div class="tba">TBA</div>

## Undergraduate Researchers
{: .people-role}

<div class="roster" markdown="1">
**2025** — 한석훈 · 채지인 · 안영선 · 최현서

**2026** — 김주형 · 염준상 · 송지호 · 안선영 · 이하정
</div>

{% include hero_network.liquid %}

<!-- 모바일(마우스 없음): 사진을 탭하면 전환 -->
<script>
  document.querySelectorAll(".swap").forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.toggle("flipped");
    });
  });
</script>
