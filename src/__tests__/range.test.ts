import { Range, RangeTo } from '..'

test('Two variables of different types', () => {
  const A: Range<2, 4> = 3
  const B: RangeTo<5> = 3
  expect(A).toBe(B)
})
