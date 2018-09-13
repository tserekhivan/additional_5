module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;
  let arr = str.split("");
  return del(arr, bracketsConfig);
}

function del(arr, bracketsConfig) {
  let retval = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0] && arr[i+1] == bracketsConfig[j][1]) {
        arr.splice(i, 2);
        if (arr.length == 0) {
          retval =  true;
        } else {
          retval = del(arr, bracketsConfig);
        }
      }
    }
  }
  if (retval == true) return true;
  else return false;
}
