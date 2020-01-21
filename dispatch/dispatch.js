const { exec } = require("child_process")

const dispatch = message => {
  return new Promise((res, rej) => {
    exec(`bash ${__dirname}/dispatch.sh "${message}"`, (error, stdout) => {
      if (error) rej(error)
      else res(stdout)
    })
  })
}

module.exports = dispatch
