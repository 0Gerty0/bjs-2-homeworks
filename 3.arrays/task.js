/*Задача 1. Сравнение массивов*/
function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((value, index) => value === arr2[index])
  );
}

/*Задача 2. Средний возраст пользователей одного пола*/
function getUsersNamesInAgeRange(users, gender) {
  const filtered = users.filter(user => user.gender === gender);

  if (filtered.length === 0) {
    return 0;
  }

  const sumAges = filtered.reduce((sum, user) => sum + user.age, 0);
  return sumAges / filtered.length;
}
