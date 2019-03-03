module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/gccc-site/'
        : '/',
    outputDir: '../docs',
};
