export function lsWrite(key, data) {
  return localStorage.setItem(key, JSON.stringify(data))
}

export function lsRead(key) {
  const oldData = localStorage.getItem(key)
  return oldData ? JSON.parse(oldData) : false
}