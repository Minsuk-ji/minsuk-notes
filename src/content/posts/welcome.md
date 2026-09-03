---
title: '이 사이트에 대해'
description: '노트를 어떻게 정리할지에 대한 첫 글 (예시 글 - 자유롭게 수정/삭제하세요)'
date: 2026-09-03
category: study
tags: ['meta']
---

이 사이트는 공부한 내용, 진행한 프로젝트, 그리고 짧은 데일리 기록을 정리하는 공간입니다.

## 글 쓰는 법

`src/content/posts/` 아래에 마크다운 파일을 하나 추가하면 새 글이 됩니다. 프런트매터는 이렇게 씁니다.

```yaml
---
title: '글 제목'
description: '목록/RSS에 노출될 한 줄 설명'
date: 2026-09-03
category: study # study | project | daily 중 하나
tags: ['nvm', 'shell']
draft: false # true로 두면 어떤 페이지에도 노출되지 않음(비공개 초안용)
---
```

- `category`는 홈 화면의 필터(전체/스터디/프로젝트/데일리)에 쓰입니다.
- `tags`는 `/tags/{태그}` 페이지에서 모아볼 수 있습니다.
- `draft: true`인 글은 빌드/미리보기 어디에도 나타나지 않으므로, 아직 공개하고 싶지 않은 글(예: 일기 초안)에 쓰면 됩니다.

이 글은 예시이니 실제 콘텐츠로 자유롭게 바꾸거나 지워도 됩니다.
