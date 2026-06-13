# Graph Network Medicine Lab — 사이트 셋업 가이드

원광대 한의대 **그래프 네트워크 의학 연구실** 홈페이지(al-folio / Jekyll)의 초기 세팅이 이 폴더에 들어 있습니다. 아래 순서대로 미리보기 → 내용 채우기 → 배포를 진행하면 됩니다.

> 참고: 사이트 콘텐츠는 국문으로 작성되어 있고, 테마 UI 일부 라벨은 영문입니다(정상).

---

## 1. 로컬 미리보기 (내 PC에서)

이 작업 환경(샌드박스)은 보안 정책상 Ruby 패키지 저장소(rubygems.org)에 접근할 수 없어 **여기서는 Jekyll 빌드를 실행할 수 없었습니다.** 대신 파일 구성은 모두 완료했고, 미리보기는 아래 두 방법 중 하나로 본인 PC에서 하시면 됩니다.

### 방법 A — Docker (al-folio 공식 권장, 가장 쉬움)
1. [Docker Desktop](https://www.docker.com/products/docker-desktop/) 설치
2. 이 폴더에서 터미널(PowerShell)을 열고:
   ```bash
   docker compose pull
   docker compose up
   ```
3. 브라우저에서 `http://localhost:8080` 접속 → 사이트 확인 (파일을 수정하면 자동 반영)

### 방법 B — Ruby 직접 설치
1. Ruby + Bundler 설치 (Windows는 WSL2 권장)
2. 이 폴더에서:
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
3. 브라우저에서 `http://localhost:4000` 접속

---

## 2. 채워 넣을 내용 (플레이스홀더)

지금은 골격과 예시가 들어가 있습니다. 아래 항목을 실제 정보로 교체하세요.

| 위치 | 채울 내용 |
|---|---|
| `assets/img/prof_pic.jpg` | PI 프로필 사진으로 교체 (같은 파일명 유지) |
| `_pages/about_lee.md` | PI 약력(학력·경력·대표논문·연락처·Scholar/ORCID) |
| `_pages/about.md` | 사무실 위치/연락처(`more_info`), 소개 문구 보완 |
| `_pages/profiles.md` | 학생·연구원 추가(주석 블록 복사), 구성원별 소개 .md 작성 |
| `_data/socials.yml` | `email`, `scholar_userid`, `orcid_id` 등 입력 |
| `_bibliography/papers.bib` | **Google Scholar BibTeX 내보내기 파일로 교체** (아래 3번) |
| `_news/` | 새 소식은 `YYYY-MM-DD-제목.md` 파일로 추가 |

---

## 3. 논문(Publications) 넣는 법

`_bibliography/papers.bib` 파일을 Google Scholar에서 내보낸 BibTeX로 교체하면 Publications 페이지가 자동 생성됩니다.

1. Google Scholar 프로필 접속 → 논문 선택(또는 전체) → **EXPORT → BibTeX**
2. 받은 내용을 `_bibliography/papers.bib`에 붙여넣기 (지금 들어 있는 예시 항목은 삭제)
3. 강조하고 싶은 논문에는 항목 안에 `selected={true}` 를 추가하면 About 페이지 상단 'selected papers'에 표시됩니다.

---

## 4. 페이지 구성 (네비게이션)

- **about** (홈, `/`) — 연구실 소개 + 최신 소식
- **research** (`/research/`) — 4개 연구 테마
- **publications** (`/publications/`) — Scholar BibTeX 기반 자동 생성
- **people** (`/people/`) — 구성원
- **news** (`/news/`) — 소식

블로그·projects·CV 등 데모 페이지는 네비게이션에서 숨겨 두었습니다. 필요하면 해당 `_pages/*.md`의 `nav: false`를 `nav: true`로 바꾸면 다시 나타납니다.

---

## 5. 배포 (GitHub Pages) — ⚠️ 진행 전 확인 필요

배포는 원하실 때 알려주시면 함께 진행합니다. 개요만 정리하면:

1. GitHub에 저장소 생성
   - 개인 사이트로 쓰려면 저장소 이름은 반드시 **`wonyung-lee.github.io`**
   - 프로젝트 사이트로 쓰려면 `_config.yml`의 `baseurl`을 `/저장소이름/`으로 설정
2. `_config.yml`의 `url`/`baseurl` 최종 확인 (현재 `url: https://wonyung-lee.github.io`, `baseurl` 비어 있음)
3. 이 폴더를 git 저장소로 만들어 push
4. 저장소 **Settings → Actions** 권한 부여 → 자동 배포(`gh-pages` 브랜치) → Pages 소스 설정

> 이 폴더에는 git 저장소(.git)가 포함되어 있지 않습니다. 배포 단계에서 `git init` 후 본인 GitHub 계정으로 연결합니다. **push/공개 전에 반드시 확인을 거칩니다.**
