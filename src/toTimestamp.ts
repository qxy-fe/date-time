import dayjs from 'dayjs'
import type { UnixOptions } from './types'

export type ToTimestampOptions = UnixOptions

export function toTimestamp(time: dayjs.ConfigType, options: ToTimestampOptions = {}) {
  const { isUnix = true } = options
  return isUnix ? dayjs(time).unix() : dayjs(time).valueOf()
}
