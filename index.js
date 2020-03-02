
const driver = {};

function updateDriverWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]:v});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, k, v) {
  return Object.assign(obj, {[k]:v});
}

function deleteFromDriverByKey(obj, k) {
  newObj = Object.assign({}, obj);
  return delete newObj[k];
}

function destructivelyDeleteFromDriverByKey(obj, k) {
  return delete obj[k];
}