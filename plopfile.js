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
        }, {
            type: 'input',
            name: 'dist',
            default: 'dist/',
            message: '构建结果目录'
        }],
        actions: data => {
            const workdir = path.join(cwd, data.name.toLowerCase())
            const d = file => path.join(workdir, file || '/')

            // Ensure path end with slash to upload files propertly
            data.dist = data.dist.replace(/\/?$/, '/')

            const actions = [{
                type: 'addMany',
                destination: d(),
                templateFiles: [
                    'templates/**/*',
                    'templates/**/.*',
                ],
                globOptions: {}
            }]

            return actions
        }
    })
}
