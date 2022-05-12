import { mkdir } from 'fs/promises'
import { parallel, series } from 'gulp'
import { run } from './utils/process'
import { epOutput } from './utils/paths'
import { runTask, withTaskName } from './utils/gulp'

export * from './modules'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),
  parallel(
    runTask('buildModules')
    // runTask('buildFullBundle'),
    // runTask('generateTypesDefinitions'),
  )
)
