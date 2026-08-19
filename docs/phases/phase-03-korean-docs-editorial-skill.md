---
id: phase-03
title: 하네스 문서 한국어화와 에디토리얼 Skill 추출
status: reviewing
base: main
branch: phase/03-korean-docs-editorial-skill
worktree: ../ai-agent-site-harness-phase-03
verify:
  - npm run verify
acceptance:
  - 하네스가 직접 소유한 설계와 운영 문서를 한국어로 읽을 수 있다
  - 목적별 문서 읽기 순서와 실제 구현 및 테스트의 연결을 확인할 수 있다
  - 다른 프로젝트에서 재사용할 에디토리얼 사이트 Skill이 유효한 구조를 갖춘다
  - 프론트엔드 AGENTS가 기준 파일과 디자인 및 검증 불변 조건을 설명한다
  - 사이트와 AWS 리소스를 배포하거나 변경하지 않는다
---

# 목표

하네스 설계와 운영 문서를 한국어로 통일한다. 현재 사이트에서 반복해 쓸 수 있는 콘텐츠 구조, 시각 시스템, 접근성, 검증 기준을 프로젝트 독립적인 Skill로 추출한다.

## 범위

- 루트 README와 하네스 소유 문서 및 작업 지침 번역
- 목적별 문서 읽기 지도 추가
- `build-interactive-editorial-site` Skill과 필요한 reference 작성
- 기존 프론트엔드, 인프라, 오케스트레이션 코드의 동작 유지

## 경계

- 칼럼 본문과 화면 디자인은 변경하지 않는다.
- AWS 리소스, DNS, CloudFront, S3를 변경하지 않는다.
- 기존 사이트의 고유 문구와 시각 자산을 재사용 Skill의 보편 규칙으로 만들지 않는다.
