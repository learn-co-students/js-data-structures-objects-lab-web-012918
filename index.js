let driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({}, driver, {[key]:value})
}
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  driver[key]=value
  return driver
}
function deleteFromDriverByKey(driver, key){
  let newThing = Object.assign({}, driver)
  delete newThing[key]
  return key
}
function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
