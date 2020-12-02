function parseTemplate(string) {
  const stringList = []
  const regExp = /{([\w\d]+)}/

  while (string) {
    const variable = string.match(regExp)
    if (variable) {
      if (variable.index) {
        const separator = string.substr(0, variable.index)
        stringList.push({type: 'separator', value: separator})
        string = string.substr(variable.index)
      }

      string = string.replace(variable[0], '')
      stringList.push({type: 'var', value: variable[1]})
    } else {
      stringList.push({type: 'separator', value: string})
      break
    }
  }
  return stringList
}

export function stringParser(template, strings) {
  const templateAsList = parseTemplate(template)
  const stringValues = []

  for (let stringItem of strings) {
    let prevVar
    const stringObj = {}

    for (let templateItem of templateAsList) {
      if (templateItem.type === 'var') {
        prevVar = templateItem.value
      } else if (templateItem.type === 'separator') {
        const separator = templateItem.value
        const separatorIndex = stringItem.indexOf(separator)
        if (prevVar) {
          stringObj[prevVar] = stringItem.substr(0, separatorIndex)
        }
        stringItem = stringItem.substr(separatorIndex + separator.length)
      }
    }
    const lastItem = templateAsList[templateAsList.length - 1]
    if (lastItem.type === 'var') {
      stringObj[lastItem.value] = stringItem
    }
    stringValues.push(stringObj)
  }

  return stringValues
}

export function stringInserter(template, strings) {
  const templateAsList = parseTemplate(template)

  const stringList = []
  for (let stringsItem of strings) {
    let string = ''
    for (let templateItem of templateAsList) {
      if (templateItem.type === 'var') {
        string = string + stringsItem[templateItem.value]
      } else if (templateItem.type === 'separator') {
        string = string + templateItem.value
      }
    }
    stringList.push(string)
  }

  return stringList
}

// const strings = [
//   '192.168.1.1:80:velloso3:Vfhjp2012',
//   '192.168.1.2:83:vellos4o3:Vfhjp2012',
//   '192.168.1.3:85:vel5oso3:Vfhjp5012'
// ]
//
// const inputTemplate = '{ip}:{port}:{login}:{password}'
// const parsedStrings = stringParser(inputTemplate, strings)
//
// const outputTemplate = ';;;{ip};;;;;;{login};;{port};{password};;;'
//
// console.log(stringInserter(outputTemplate, parsedStrings))

