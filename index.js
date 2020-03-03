// Write your solution in this file!

const driver = {'name': "sam"}

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key){
  driver_clone = Object.assign({}, driver)
  delete driver_clone[key]
  return driver_clone

}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
