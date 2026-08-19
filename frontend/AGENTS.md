# 프론트엔드 작업 지침

## 기준 파일

- 새 칼럼이나 장면 구조를 설계할 때 `../skills/build-interactive-editorial-site/SKILL.md`와 관련 reference를 먼저 읽는다.
- `app/page.tsx`: FIELDNOTE 001의 본문 순서, 출처, 도표 구조
- `app/fieldnotes/agent-operations/page.tsx`: FIELDNOTE 002의 운영·성과 내용
- `app/article-interactions.tsx`: 책 펼침, 목차, 권한 검증 시뮬레이션
- `app/globals.css`: 색상 토큰, 타이포그래피, 중앙 정렬 축, 반응형 규칙
- `app/layout.tsx`: 한국어 본문·제목·코드용 글꼴과 메타데이터
- `tests/`: 문장, 접근성, 정렬, 모바일, 정적 빌드의 회귀 계약

## 편집·디자인 원칙

- 장마다 먼저 설명할 질문을 하나 정하고 본문과 시각 요소가 같은 답을 가리키게 한다.
- 텍스트 장면과 강한 시각 장면을 번갈아 배치한다. 모든 정보를 카드로 만들지 않는다.
- 한국어 제목은 의미 단위의 `span.section-title-line`으로 줄을 설계한다. 화면 너비에 따라 자연스럽게 풀릴 수 있게 CSS의 `word-break: keep-all`과 `text-wrap`을 함께 유지한다.
- 본문은 왼쪽 정렬하되 `.section-content` 중앙 축을 공유한다. 이미지와 도표는 컨테이너 너비를 넘지 않게 한다.
- 인터랙션은 비교, 순서, 상태 변화처럼 독자의 이해가 달라지는 지점에만 사용한다.
- 키보드 탐색, Escape 닫기, 포커스 복귀, `prefers-reduced-motion`, 모바일 레이아웃을 함께 구현한다.
- 색상은 `globals.css`의 토큰을 바꿔 조정하고 개별 컴포넌트에 임의 색상을 늘리지 않는다.

## 작업 순서와 검증

- 의존성은 `npm ci`로 설치한다.
- 콘텐츠를 바꾸면 근거와 필자의 해석을 구분하고 관련 렌더링 테스트도 함께 갱신한다.
- 레이아웃을 바꾸면 1280px, 820px, 540px 이하 화면에서 가로 넘침과 제목 줄바꿈을 확인한다.
- 완료를 보고하기 전에 `npm run lint`와 `npm test`를 실행한다.
- 비공개 S3와 CloudFront가 사용하는 정적 export를 유지한다.
- 배포 증거가 없으면 D1과 Worker 초기 구성을 프로덕션 백엔드로 설명하지 않는다.
