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
