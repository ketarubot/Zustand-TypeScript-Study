# Zustand & TypeScript Study

📌 프로젝트 명세서: Book Tracker Dashboard

개요:
자신이 읽고 있는 책, 읽은 책, 관심 있는 책 등을 관리하는 프론트 전용 대시보드.
CRUD 없이 프론트에서 상태 관리와 UI 최적화 기능을 학습하는 목적.

---

🔹 핵심 학습 목표

| 기술          | 학습 포인트                                      |
| :------------ | :----------------------------------------------- |
| Zustand       | 전역 상태 관리(create, useStore 등)              |
| TypeScript    | interface, optional ?, alias 등 타입 정의        |
| React Hooks   | useMemo, useCallback, React.memo로 렌더링 최적화 |
| 컴포넌트 구조 | 재사용 가능한 카드, 리스트, 필터 컴포넌트        |

---

🔹 기능 명세

1. 책 목록 관리
   - 책 제목, 저자, 상태(읽음/읽는 중/읽고싶음)를 표시
   - Zustand store에서 관리
   - 상태 변경(읽음/읽는 중/읽고싶음) 버튼 구현 → useCallback으로 최적화
2. 책 추가 (프론트 전용)
   - 간단한 입력 필드 + 버튼으로 책 추가
   - useStore addBook 액션 사용
   - props 타입 정의(TypeScript interface)
3. 책 필터링
   - 상태별 필터: 읽음 / 읽는 중 / 읽고싶음
   - useMemo로 필터된 리스트 캐싱
   - React.memo로 개별 BookCard 재렌더링 방지
4. 책 요약 카드
   - 책 제목 + 저자 + 상태 표시
   - React.memo 적용
   - props 타입 지정(TypeScript interface)
   - 상태 변경 시만 렌더링
5. 간단 통계
   - 총 책 수, 읽은 책 수, 읽고 싶은 책 수
   - useMemo로 계산
