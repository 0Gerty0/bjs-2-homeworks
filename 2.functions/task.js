function getArrayParams(...arr) {
  /* Если аргументов нет, сразу возвращаем нули*/
  if (arr.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (const value of arr) {
    if (value < min) min = value;
    if (value > max) max = value;
    sum += value;
  }

  const avg = Number((sum / arr.length).toFixed(2));

  return { min, max, avg };
}

/* ---------- Насадки-преобразователи ---------- */

/* 1. Суммирование элементов */
function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0);
}

/* 2. Разница max - min */
function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

/* 3. Разница сумм чётных и нечётных элементов */
function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement  = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement  += num;
    }
  }

  return sumEvenElement - sumOddElement;
}

/* 4. Среднее значение чётных элементов */
function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement   = 0;
  let countEvenElement = 0;

  for (const num of arr) {
    if (num % 2 === 0) {
      sumEvenElement   += num;
      countEvenElement += 1;
    }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

/* ---------- Агрегатор мясорубки ---------- */

/*
 * makeWork(arrOfArr, func) — прогоняет каждую «порцию мяса»
 * (вложенный массив) через выбранную насадку-func и
 * возвращает наибольший результат.
 */
function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const innerArr of arrOfArr) {
    const result = func(...innerArr);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }

  return maxWorkerResult;
}
