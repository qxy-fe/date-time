import { assertType, describe, expectTypeOf, it } from 'vitest'
import { toTimestamp } from './toTimestamp'
import type dayjs from 'dayjs'
import type { ToTimestampOptions } from './toTimestamp'

describe('typecheck', () => {
  it('should return type match', () => {
    expectTypeOf(toTimestamp).returns.toBeNumber()
  })

  it('should params type match', () => {
    assertType<(time: dayjs.ConfigType, options?: ToTimestampOptions) => number>(toTimestamp)
  })
})
