import { assertType, describe, expectTypeOf, it } from 'vitest'
import { now } from './now'
import type { NowOptions } from './now'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(now).returns.toBeNumber()
  })

  it('should params type match', () => {
    assertType<(options?: NowOptions) => number>(now)
  })
})
