const yarnconverter = require("yarn-lock-convert");

let result = {
  dependencies: []
}

const parseLibraryName = name => name.split('@')[0]

const findName = 'webpack'

yarnconverter.toObject().then((yarn)=>{

  Object.keys(yarn).forEach(libraryName => {
    if(parseLibraryName(libraryName) === findName) {
      result.name = parseLibraryName(libraryName)
      result.version=  yarn[libraryName].version
    }
    yarn[libraryName].dependencies &&
    Object.keys(yarn[libraryName].dependencies).forEach(dependenciesKey => {
     if(parseLibraryName(dependenciesKey) === findName) result.dependencies = [...result.dependencies, parseLibraryName(dependenciesKey)]
    })
  console.log('result: ', result)
})});

