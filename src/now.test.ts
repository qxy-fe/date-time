import { describe, expect, it } from 'vitest'
import { now } from './now'

describe('now', () => {
  it('should match', () => {
    expect(typeof now()).toMatchInlineSnapshot('"number"')
    expect(typeof now({ isUnix: true })).toMatchInlineSnapshot('"number"')
  })
})
