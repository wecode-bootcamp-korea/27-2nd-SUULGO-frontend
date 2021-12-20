export default function filterTextInfo(userData) {
  const userArray = Object.entries(userData);
  const userTextArray = userArray.filter(el => el[0].includes('text'));

  return userTextArray;
}

export function filterTagFromUserData(userData) {
  const tag = Object.values(userData).flat(Infinity);
  const arrOfObject = tag.filter(el => typeof el === 'object');
  const arrOfKeys = arrOfObject.map(el => Object.keys(el)).flat(Infinity);

  return arrOfKeys;
}
