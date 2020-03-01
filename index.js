// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let update = {}
  update[key] = value
  return Object.assign({}, driver, update)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  let update = {}
  update[key] = value
  return Object.assign(driver,update)
}

function deleteFromDriverByKey(driver, key) {
  const clone = Object.assign({},driver)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
