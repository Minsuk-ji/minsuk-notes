# minsuk-notes

공부/프로젝트 기록과 짧은 데일리 노트를 정리하는 개인 노트 사이트. [Astro](https://astro.build) 기반, GitHub Actions로 GitHub Pages에 배포됩니다.

- 사이트: https://minsuk-ji.github.io/minsuk-notes/
- 포트폴리오(별도 사이트): https://minsuk-ji.github.io/

## 글 쓰기

`src/content/posts/`에 마크다운 파일을 추가하면 새 글이 됩니다. 프런트매터 스키마는 `src/content.config.ts` 참고.

```yaml
---
title: '글 제목'
description: '목록/RSS에 노출될 한 줄 설명'
date: 2026-09-03
category: study # study | project | daily
tags: ['nvm', 'shell']
draft: false # true면 어떤 페이지에도 노출되지 않음(비공개 초안용)
---
```

## 사이트에서 바로 글 쓰기/수정하기

https://minsuk-ji.github.io/minsuk-notes/admin/ 에서 로컬에서 git을 안 쓰고도 글을 목록/작성/수정/삭제할 수 있습니다.

- 최초 1회, [fine-grained PAT](https://github.com/settings/personal-access-tokens/new)를 이 레포(`minsuk-notes`)에만, `Contents: Read and write` 권한으로 만들어 붙여넣으면 됩니다.
- 토큰은 그 브라우저의 localStorage에만 저장되고, GitHub API로 직접 요청하는 데만 쓰입니다 — 다른 곳으로 전송되지 않습니다. 비밀번호처럼 취급하고, 공유 기기에서는 로그아웃하세요. 토큰을 잃어버렸거나 노출됐다면 GitHub 설정에서 바로 폐기(revoke)할 수 있습니다.
- 저장하면 `main`에 바로 커밋되고, GitHub Actions가 자동으로 다시 빌드/배포합니다(수십 초 소요).

## 프로젝트 구조

```text
├── src/
│   ├── content/posts/   # 글 (마크다운)
│   ├── layouts/Post.astro
│   ├── pages/
│   │   ├── index.astro       # 홈 (전체 글 목록 + 카테고리 필터)
│   │   ├── about.astro
│   │   ├── posts/[...slug].astro
│   │   ├── tags/[tag].astro
│   │   └── rss.xml.js
│   └── components/
├── astro.config.mjs      # site/base 경로 설정
└── .github/workflows/deploy.yml
```

## 명령어

| 명령어            | 설명                                  |
| :----------------- | :------------------------------------ |
| `npm install`       | 의존성 설치                          |
| `npm run dev`       | 로컬 개발 서버 (`localhost:4321`)    |
| `npm run build`     | `./dist/`로 프로덕션 빌드            |
| `npm run preview`   | 빌드 결과 로컬 미리보기              |
| `npx astro check`   | 타입 체크                            |

main 브랜치에 push하면 GitHub Actions가 자동으로 빌드해 GitHub Pages에 배포합니다.
