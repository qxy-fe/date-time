import { describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import { toTimestamp } from './toTimestamp'

const ts = 1577851200000
const time = dayjs(ts).format('YYYY/MM/DD hh:mm:ss')

describe('toTimestamp', () => {
  it('should match', () => {
    expect(typeof toTimestamp(Date.now())).toMatchInlineSnapshot('"number"')
    expect(typeof toTimestamp(Date.now(), { isUnix: false })).toMatchInlineSnapshot('"number"')

    expect(toTimestamp(ts)).toMatchInlineSnapshot('1577851200')
    expect(toTimestamp(time)).toMatchInlineSnapshot('1577851200')
    expect(toTimestamp(time, { isUnix: false })).toMatchInlineSnapshot('1577851200000')
  })
})
