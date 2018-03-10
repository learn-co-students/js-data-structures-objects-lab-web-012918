// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  new_driver = {...driver}
  new_driver[key] = value;
  return new_driver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  new_driver = {...driver}
  new_driver[key] = undefined;
  return new_driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  driver[key] = undefined;
  return driver;
}
