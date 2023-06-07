import semver from 'semver'

const latestSameDayPatch = semver.maxSatisfying(
  ['3.20230605.1', '3.20230605.0'],
  '~3.20230605.0'
)
console.log(latestSameDayPatch)
console.log(semver.inc('3.3.2', 'prepatch', 'beta'))
let test = true
// test = test || false
test ||= false
console.log(test)
