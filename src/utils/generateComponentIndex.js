/**
 * @description parses the directory supplied as an argument and generates relevant
 *              imports / export statements dependencing on directory contents for
 *              a component
 * @param {__dirname} directory (pass Node.js __dirname)
 */
module.exports = directory => {
  const fs = require('fs')
  const files = fs.readdirSync(directory)

  // Additional validation of filenames
  const checkStartsWithLowerCaseCharacter = fileName => {
    const firstCharacter = fileName.charAt(0)
    if (firstCharacter !== firstCharacter.toLowerCase()) {
      throw new Error(`${fileName} doesn't start with a lowercase character`)
    }
  }

  files.forEach(file => {
    checkStartsWithLowerCaseCharacter(file)
  })
  // End of additional validation of filenames

  const componentName = directory.split('/').pop()
  const componentNamePascalCase =
    componentName.charAt(0).toUpperCase() + componentName.slice(1)

  const generatedLinesOfCode = []

  generatedLinesOfCode.push(
    `import ${componentNamePascalCase} from './${componentName}.component.js';`
  )

  if (files.indexOf(`${componentName}.connect.js`) !== -1) {
    generatedLinesOfCode.push(
      `import connect from './${componentName}.connect.js';`
    )
    generatedLinesOfCode.push(
      `export default connect(${componentNamePascalCase});`
    )
  } else {
    generatedLinesOfCode.push(`export default ${componentNamePascalCase};`)
  }
  return generatedLinesOfCode.map(line => line).join(' ')
}
