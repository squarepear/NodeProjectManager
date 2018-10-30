import cmd from 'node-cmd'
import semver from 'semver'

export default {
  checkInstalled (version) {
    cmd.get('nodebrew ls', (err, data) => {
      if (err) throw err

      data = data.split('\n')

      data.pop()
      data.pop()
      data.pop()

      let output = false

      data.forEach((ver) => {
        if (semver.eq(ver, version)) output = true
      })

      return output
    })
  },
  runUsingVersion (file, version) {
    let command = `nodebrew exec ${version} -- node "${file.replace(
      ' ',
      '\\ '
    )}"`
    let process = cmd.get(command)
    return process
  }
}
