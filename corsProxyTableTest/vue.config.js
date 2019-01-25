module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'https://openapi.naver.com/v1/search/movie.json',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                },
            }
        }
    }
}

