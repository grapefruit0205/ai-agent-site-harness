# 문서 읽기 지도

하네스 전체를 처음부터 읽을 필요는 없다. 목적에 맞는 경로를 선택한다.

## 포트폴리오와 하네스를 이해할 때

1. [하네스 아키텍처](architecture/harness.md): 사람, 계획, 작업, 검증, 검토, 복구가 어떻게 이어지는지 본다.
2. [원본 이력 지도](phases/history-map.md): Git으로 증명할 수 있는 내용과 소급해 주장하지 않는 내용을 구분한다.
3. [역할과 권한](orchestration/roles.md): 작업 에이전트와 읽기 전용 검토 에이전트의 경계를 확인한다.
4. [검증과 복구 ADR](adr/0003-verification-and-recovery.md): 완료 보고보다 실행 증거를 우선한 이유를 읽는다.
5. [실패한 단계 복구](runbooks/recover-a-failed-phase.md): 실패를 지우지 않고 다음 시도로 연결하는 절차를 확인한다.

면접이나 발표에서는 위 문서와 `git log --graph --all`을 함께 보여주는 편이 좋다.

## 비슷한 프론트엔드 사이트를 만들 때

1. [프론트엔드 AGENTS.md](../frontend/AGENTS.md): 이 저장소의 기준 파일, 디자인 불변 조건, 검증 명령을 확인한다.
2. [인터랙티브 에디토리얼 사이트 Skill](../skills/build-interactive-editorial-site/SKILL.md): 다른 프로젝트에도 적용할 제작 순서를 읽는다.
3. [콘텐츠와 정보 구조](../skills/build-interactive-editorial-site/references/content-architecture.md): 자료를 장면 계약으로 바꾸는 방법을 사용한다.
4. [시각·반응형 시스템](../skills/build-interactive-editorial-site/references/visual-system.md): 타이포그래피, 중앙 축, 모바일, 인터랙션 기준을 사용한다.
5. [검증 계약](../skills/build-interactive-editorial-site/references/verification-contract.md): 콘텐츠와 레이아웃 및 접근성 회귀를 확인한다.

실제 구현을 역추적할 때는 다음 파일을 함께 본다.

| 확인할 내용 | 구현 파일 | 검증 파일 |
| --- | --- | --- |
| 본문 순서와 장면 구조 | `frontend/app/page.tsx` | `frontend/tests/rendered-html.test.mjs` |
| 책 펼침과 권한 시뮬레이션 | `frontend/app/article-interactions.tsx` | `frontend/tests/editorial-board.test.tsx` |
| 색상, 글꼴, 중앙 축, 모바일 | `frontend/app/globals.css` | `frontend/tests/layout-regression.test.mjs` |
| 정적 빌드와 실행 경계 | `frontend/package.json`, `infra/terraform/` | `frontend/tests/package-scripts.test.mjs`, Terraform 계약 테스트 |

## AGENTS.md와 SKILL.md의 역할

`AGENTS.md`는 특정 저장소 안에서 반드시 지켜야 할 파일 위치, 명령, 배포 경계를 정의한다. 프로젝트 구조가 달라지면 함께 수정해야 한다.

`SKILL.md`는 여러 프로젝트에서 반복할 판단 순서를 담는다. 새 저장소에서 이 Skill을 사용하면 자료 정리, 장면 설계, 시각 시스템, 검증 계약을 다시 작성하는 시간을 줄일 수 있다. 현재 Skill 원본은 이 저장소의 `skills/build-interactive-editorial-site/`에 있으며, 개인 Codex Skill로 설치할 때도 이 폴더 전체를 한 단위로 사용한다.
