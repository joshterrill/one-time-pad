exports.legend = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((ch,i)=>{
  return {letter: ch, value: i}
})
 
exports.search = function(key, legendArray) {
  for (var i=0; i < legendArray.length; i++) {
    if (legendArray[i].letter === key) {
      return legendArray[i].value;
    }
  }
}

exports.reverse = function(key, legendArray) {
  for (var i=0; i < legendArray.length; i++) {
    if (legendArray[i].value === key) {
      return legendArray[i].letter;
    }
  }
}