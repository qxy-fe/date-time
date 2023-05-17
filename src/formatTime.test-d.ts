import { assertType, describe, expectTypeOf, it } from 'vitest'
import { formatTime } from './formatTime'
import type dayjs from 'dayjs'
import type { FormatTimeOptions } from './formatTime'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(formatTime).returns.toBeString()
  })

  it('should params type match', () => {
    assertType<(time: dayjs.ConfigType, options?: FormatTimeOptions) => string>(formatTime)
  })
})
