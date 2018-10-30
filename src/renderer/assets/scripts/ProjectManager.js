import fs from 'fs'
import path from 'path'

export default {
  getAllProjectsData (projectDirectoryPath) {
    let projects = []
    let dirArray = fs.readdirSync(projectDirectoryPath)

    dirArray.forEach((dirName) => {
      let dir = fs.statSync(path.join(projectDirectoryPath, dirName))

      if (dir.isDirectory() && !dirName.startsWith('.')) {
        let projectData = this.getProjectData(
          path.join(projectDirectoryPath, dirName)
        )
        if (projectData != null) projects.push(projectData)
      }
    })
    return projects
  },
  getProjectData (projectPath) {
    let filePath = path.join(projectPath, 'package.json')
    if (fs.existsSync(filePath)) {
      let project = JSON.parse(fs.readFileSync(filePath))
      project['path'] = projectPath
      return project
    } else {
      return null
    }
  }
}
