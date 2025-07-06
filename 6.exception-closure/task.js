// ---------- Задача 1. Форматтер чисел ----------
//
// Преобразует значение в число и выбрасывает ошибку,
// если результат преобразования — NaN.
// @param {string|number} value
// @returns {number}
// @throws {Error} «Невалидное значение»
function parseCount(value) {
  const parsed = Number.parseFloat(value);
  if (Number.isNaN(parsed)) {
    throw new Error('Невалидное значение');
  }
  return parsed;
}

// Валидирует значение, возвращая либо число,
// либо сам объект Error, полученный из parseCount.
// @param {string|number} value
// @returns {number|Error}
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (err) {
    return err; // возвращаем именно объект ошибки, а не выбрасываем дальше
  }
}

// ---------- Задача 2. Треугольник ----------

class Triangle {
  // @param {number} a
  // @param {number} b
  // @param {number} c
  // @throws {Error} «Треугольник с такими сторонами не существует»
  constructor(a, b, c) {
    // Проверка неравенства треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }

    // Полупериметр нужен только для площади, поэтому рассчитываем сразу
    const s = (a + b + c) / 2;

    // Закрепляем вычисляемые свойства так,
    // чтобы их нельзя было переопределить присваиванием
    Object.defineProperties(this, {
      perimeter: {
        enumerable: true,
        get: () => a + b + c,
      },
      area: {
        enumerable: true,
        get: () => Number(Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(3)),
      },
    });
  }
}

// Пытается создать и вернуть объект Triangle.
// Если создание невозможно — возвращает «заглушку» с геттерами,
// которые сообщают об ошибке, и их также нельзя перезаписать.
// @param {number} a
// @param {number} b
// @param {number} c
// @returns {Triangle|{area:string,perimeter:string}}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    // «Заглушка» с неперезаписываемыми геттерами
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      },
    };
  }
}

// Экспортируйте функции и класс, если используете модули.
// module.exports = { parseCount, validateCount, Triangle, getTriangle };
