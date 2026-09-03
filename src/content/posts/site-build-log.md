---
title: '이 노트 사이트를 만든 방식'
description: 'Astro + GitHub Pages(Actions)로 개인 노트 사이트를 구성한 기록 (예시 글)'
date: 2026-09-03
category: project
tags: ['astro', 'github-pages']
---

이 사이트는 [Astro](https://astro.build)의 공식 blog 템플릿을 기반으로, 다음을 바꿔서 만들었습니다.

- 카테고리(`study` / `project` / `daily`)와 `draft` 플래그를 프런트매터에 추가
- 홈 화면에 카테고리 필터 추가
- 태그별 모아보기 페이지(`/tags/{태그}`) 추가
- GitHub Actions로 GitHub Pages에 자동 배포

기존에 쓰던 [Obsidian vault](https://obsidian.md)의 노트를 그대로 끌어오지 않고, 공개하고 싶은 글만 이 레포에 새로 옮겨 쓰는 방식으로 운영합니다.

이 글도 예시이니 자유롭게 바꾸거나 지워도 됩니다.
