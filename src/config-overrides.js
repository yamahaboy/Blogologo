module.exports = {

    jest: function (config) {
        config.preset = "ts-jest"
        config.moduleFileExtensions = ['js', 'jsx', 'ts', 'tsx']
        config.moduleDirectories = ['node_modules', 'src/**']


        return config
    }
}