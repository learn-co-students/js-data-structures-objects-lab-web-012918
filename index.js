const driver = {};

function updateDriverWithKeyAndValue () {
  driverWithData = Object.assign({}, driver);
  driverWithData.name = 'Sam';
  driverWithData.address = '11 Broadway';
  return driverWithData;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey (driver, key) {
  driverWithData = Object.assign({}, driver);
  console.log(driverWithData)
  delete driverWithData[key];
  return driverWithData;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];
  return driver;
}
