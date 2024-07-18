import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  externals: ['dayjs'],
  rollup: {
    emitCJS: true,
    esbuild: {
      charset: 'utf8',
    },
  },
})
