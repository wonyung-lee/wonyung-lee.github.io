---
layout: page
title: research
permalink: /research/
description: 연구 분야 — 네트워크 약리학, 그래프 기반 머신러닝, 한의학 기반 AI/LLM 응용
nav: true
nav_order: 2
---

<style>
  .rgrid { display: flex; gap: 1.5rem; flex-wrap: wrap; margin: 1rem 0 0.5rem; align-items: flex-start; }
  .rgrid .cell { flex: 1 1 300px; min-width: 280px; }
  .rgrid .cell img { width: 100%; height: auto; border: 1px solid #eee; border-radius: 6px; }
  .rgrid .cell p { font-size: 0.92em; margin-top: 0.5rem; }
</style>

우리 연구실은 **그래프(graph)와 네트워크**라는 공통의 언어로 약물·표적·질환·한약을 연결하고, 이를 머신러닝과 LLM으로 분석합니다.

### 네트워크 약리학 (Network pharmacology)

약물–표적–경로–질환의 다층 네트워크를 구축하여 한약·천연물의 **다중 표적 작용 기전(multi-target mechanism)** 을 규명합니다.

<div class="rgrid">
  <div class="cell">
    <img src="{{ '/assets/img/research/netpharm.png' | relative_url }}" alt="네트워크 약리학 현황평가">
    <p><strong>네트워크 약리학 현황평가 (JARE, 2025)</strong>: 네트워크 약리학 연구의 현황을 체계적으로 평가하고, 기전·치료효과 규명을 위한 분석 기준을 제시함.</p>
  </div>
  <div class="cell">
    <img src="{{ '/assets/img/research/br.png' | relative_url }}" alt="융합적 접근 기반 한약 효능평가">
    <p><strong>융합적 접근 기반 한약 효능평가 (FRBM, 2023)</strong>: 네트워크 약리학과 in vitro·in vivo 실험을 융합해 한약의 항산화 효능과 핵심 활성성분을 규명함.</p>
  </div>
</div>

### 그래프 기반 머신러닝 (Graph ML / GNN / 지식그래프)

생의학 **지식그래프(knowledge graph)** 와 **그래프 신경망(GNN)** 을 활용해 약물 반응·표적·상호작용 예측과 설명 가능한 추론 문제를 풉니다.

<div class="rgrid">
  <div class="cell">
    <img src="{{ '/assets/img/research/hdi.png' | relative_url }}" alt="한약-합성의약품 상호작용 예측">
    <p><strong>한약–합성의약품 상호작용 예측 (Phytomedicine, 2026)</strong>: 그래프 신경망과 전이학습(Meta-HDI)으로 한약–합성의약품 상호작용을 예측하고 임상·실험으로 검증함.</p>
  </div>
  <div class="cell">
    <img src="{{ '/assets/img/research/ml.png' | relative_url }}" alt="사상의학기반 해석가능 AI 개발">
    <p><strong>사상의학기반 해석가능 AI 개발 (Biomolecules, 2022)</strong>: 사상체질·임상 정보 기반 머신러닝 모델을 개발하고, 설명가능 AI(LIME)로 예측 근거를 제시함.</p>
  </div>
</div>

### 한의학 기반 응용 (LLM · 생성형 AI)

**대규모 언어모델(LLM)** 과 생성형 AI를 한의학 교육·지식 활용에 응용하는 도구를 개발합니다.

<div class="rgrid">
  <div class="cell">
    <img src="{{ '/assets/img/research/gensyndi.png' | relative_url }}" alt="생성형 AI 기반 한의학 교육">
    <p><strong>생성형 AI 기반 한의학 교육 (Appl. Sci., 2025)</strong>: 지식 유도 생성형 AI로 변증과 질병 진단을 함께 학습하는 교육 도구(Gen-SynDi)를 개발함.</p>
  </div>
  <div class="cell">
    <img src="{{ '/assets/img/research/tam.png' | relative_url }}" alt="도구 보강 LLM 에이전트 벤치마크">
    <p><strong>도구 보강 LLM 에이전트 벤치마크 (Appl. Sci., 2026)</strong>: 전통의학 메타데이터로 도구 보강(tool-augmented) LLM 에이전트의 성능을 벤치마크 평가함.</p>
  </div>
</div>
