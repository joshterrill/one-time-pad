exports.legend = [
  {
    'letter': 'A',
    'value': 1
  },
  {
    'letter': 'B',
    'value': 2
  },
  {
    'letter': 'C',
    'value': 3
  },
  {
    'letter': 'D',
    'value': 4
  },
  {
    'letter': 'E',
    'value': 5
  },
  {
    'letter': 'F',
    'value': 6
  },
  {
    'letter': 'G',
    'value': 7
  },
  {
    'letter': 'H',
    'value': 8
  },
  {
    'letter': 'I',
    'value': 9
  },
  {
    'letter': 'J',
    'value': 10
  },
  {
    'letter': 'K',
    'value': 11
  },
  {
    'letter': 'L',
    'value': 12
  },
  {
    'letter': 'M',
    'value': 13
  },
  {
    'letter': 'N',
    'value': 14
  },
  {
    'letter': 'O',
    'value': 15
  },
  {
    'letter': 'P',
    'value': 16
  },
  {
    'letter': 'Q',
    'value': 17
  },
  {
    'letter': 'R',
    'value': 18
  },
  {
    'letter': 'S',
    'value': 19
  },
  {
    'letter': 'T',
    'value': 20
  },
  {
    'letter': 'U',
    'value': 21
  },
  {
    'letter': 'V',
    'value': 22
  },
  {
    'letter': 'W',
    'value': 23
  },
  {
    'letter': 'X',
    'value': 24
  },
  {
    'letter': 'Y',
    'value': 25
  },
  {
    'letter': 'Z',
    'value': 26
  }
];

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