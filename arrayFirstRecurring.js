function firstRecurCharacter(array) {
  if(!array || typeof array !== 'object' || array.length < 2) {
    return 'something went wrong';
  }
  let map = {};

  for(let i = 0; i < array.length; i++) {
    if(map[array[i]]) {
      return array[i];
    }
    map[array[i]] = true;
  }
  return undefined;
}

function firstRecurCharacter2(array) {
  if(!array || typeof array !== 'object' || array.length < 2) {
    return 'something went wrong';
  }
  let min = Number.MAX_SAFE_INTEGER;
  let el ;
  for(let i = 0; i < array.length-1; i++) {
    for(let j = i+1; j < array.length ; j++) {
      if(array[i] === array[j] && (j - i) < min) {
        min = j - i;
        el = array[i];
      }
    }
  }
  return el;
}

firstRecurCharacter([2, 1, 1, 2, 2, 3, 5])
