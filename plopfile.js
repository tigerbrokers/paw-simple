const path = require('path')

module.exports = plop => {
    const cwd = process.cwd()

    plop.setGenerator('default', {
        description: 'this is a basic project with tiger-cdn',
        prompts: [{
            type: 'input',
            name: 'name',
            message: '项目名称'
        }, {
            type: 'input',
            name: 'desc',
            message: '项目描述'
        }],
        actions: data => {
            const workdir = path.join(cwd, data.name)
            const actions = [{
                type: 'addMany',
                destination: workdir,
                templateFiles: [
                    'templates/**/*',
                    'templates/**/.*',
                ]
            }]

            return actions
        }
    })
}
