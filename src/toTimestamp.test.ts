import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import { toTimestamp } from './toTimestamp'

const time = '2020/01/01 12:00:00'
const ts = dayjs(time).valueOf()

describe('toTimestamp', () => {
  it('should match', () => {
    expect(typeof toTimestamp(Date.now())).toMatchInlineSnapshot('"number"')
    expect(typeof toTimestamp(Date.now(), { isUnix: false })).toMatchInlineSnapshot('"number"')

    expect(toTimestamp(ts)).toMatchInlineSnapshot('1577851200')
    expect(toTimestamp(time)).toMatchInlineSnapshot('1577851200')
    expect(toTimestamp(time, { isUnix: false })).toMatchInlineSnapshot('1577851200000')
  })
})
