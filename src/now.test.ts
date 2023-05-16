import { describe, expect, it } from 'vitest'
import { now } from './now'

describe('now', () => {
  it('should match', () => {
    expect(typeof now()).toBe('number')
    expect(typeof now({ isUnix: true })).toBe('number')
  })
})
