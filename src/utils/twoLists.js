export function getIntersections(a, b) {
  return a.filter(num => b.includes(num));
}

export function getAMinusB(a, b) {
  return a.filter(i => !b.includes(i))
}

export function getWithoutIntersections(a, b) {
  return a.filter(i => !b.includes(i))
          .concat(b.filter(i => !a.includes(i)))
}
// TODO при стилизации реализовать красивые подсказки.
// TODO добавить утилиты для работы с базами почт