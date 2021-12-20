export default function filterUserInfoStarsWith(data, startsWith) {
  const userArray = Object.entries(data);
  const userFilteredArray = userArray.filter(el => el[0].includes(startsWith));

  return userFilteredArray;
}

export function filterMatchTagFromUserData(data) {
  const alcoholInfo = filterUserInfoStarsWith(data, 'alcohol').flat(Infinity);
  const filteredMatchTag = alcoholInfo
    .filter(el => typeof el === 'object')
    .map(el => el.name);

  return filteredMatchTag;
}

export function changeDateForm(date) {
  const dateForm =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return dateForm;
}

export function changeDateForm(date) {
  const dateForm =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  return dateForm;
}
