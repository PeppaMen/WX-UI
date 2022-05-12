import { computed, getCurrentInstance } from 'vue'
import { fromPairs } from 'lodash-unified'
import { debugWarn } from '@wx-ui/utils'

import type { ComputedRef } from 'vue'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: string[]
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export const useAttrs = (
  params: Params = {}
): ComputedRef<Record<string, unknown>> => {
  const { excludeListeners = false, excludeKeys = [] } = params
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  const instance = getCurrentInstance()
  if (!instance) {
    debugWarn(
      'use-attrs',
      'getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function'
    )
    return computed(() => ({}))
  }

  return computed(() =>
    fromPairs(
      Object.entries(instance.proxy?.$attrs!).filter(
        ([key]) =>
          !allExcludeKeys.includes(key) &&
          !(excludeListeners && LISTENER_PREFIX.test(key))
      )
    )
  )
}
