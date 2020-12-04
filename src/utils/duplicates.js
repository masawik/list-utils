export function delDuplicates(list) {
  const before = list.length
  let set = new Set(list)
  const result = Array.from(set)
  const after = result.length

  return {
    list: result,
    difference: before - after
  }
}