import { testFn } from './fn'

export const enum Test {
  TEST = 'TEST'
}

console.log(typeof testFn)
console.log(__VERSION__, __BROWSER__, __DEV__)
console.log(process.env)
console.log(Test.TEST)

export * from './fn'
