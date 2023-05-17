import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import { formatTime } from './formatTime'

const time = '2020/01/01 12:00:00'
const unixTs = dayjs(time).unix()
const ts = dayjs(time).valueOf()

describe('formatTime', () => {
  it('should match', () => {
    expect(typeof formatTime(Date.now())).toMatchInlineSnapshot('"string"')
    expect(typeof formatTime(Date.now(), { isUnix: true })).toMatchInlineSnapshot('"string"')
    expect(typeof formatTime(Date.now(), { format: 'YYYY-MM-DD' })).toMatchInlineSnapshot(
      '"string"',
    )

    expect(formatTime(unixTs)).toMatchInlineSnapshot('"2020年01月01日12时00分"')
    expect(formatTime(unixTs, { format: 'YYYY-MM-DD hh:mm:ss' })).toMatchInlineSnapshot(
      '"2020-01-01 12:00:00"',
    )

    expect(formatTime(ts, { isUnix: false })).toMatchInlineSnapshot('"2020年01月01日12时00分"')
    expect(formatTime(ts, { isUnix: false, format: 'YYYY-MM-DD hh:mm:ss' })).toMatchInlineSnapshot(
      '"2020-01-01 12:00:00"',
    )
  })
})
