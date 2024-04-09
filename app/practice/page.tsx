'use client';

import clsx from 'clsx';

export default function Practice() {
  const result = clsx({ a: true, b: true, c: false });
  console.log(result, 'clsx 값');
  return (
    <>
      <h1>연습용 페이지</h1>
    </>
  );
}
