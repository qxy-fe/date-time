import dayjs from 'dayjs'
import { DEFAULT_FORMAT } from './constants'
import type { FormatOptions, UnixOptions } from './types'

export type FormatTimeOptions = UnixOptions & FormatOptions

export function formatTime(time: dayjs.ConfigType, options: FormatTimeOptions = {}) {
  const { isUnix = true, format = DEFAULT_FORMAT } = options

  return isUnix && typeof time === 'number' // unix timestamp is number
    ? dayjs.unix(time).format(format)
    : dayjs(time).format(format)
}
