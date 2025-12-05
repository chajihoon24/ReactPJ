
/*============================================================================
버튼 컴포넌트

    BasicButton : 파라미터로 내용을 표시하는 기본버튼
    SubmitButton : 제출버튼
    SearchButton : 검색버튼

==============================================================================*/


export function BasicButton({ children, ...props }) {
  return (
    <button className="btn-basic" {...props}>
      {children}
    </button>
  );
}

export function SubmitButton({ children, ...props }) {
  return (
    <button className="btn-submit" {...props}>
      {children}
    </button>
  );
}

export function SearchButton({ children, ...props }) {
  return (
    <button className="btn-search" {...props}>
      {children}
    </button>
  );
}