const path = requrie('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'main.js'),   // 우리가 작성할 js 들의 모음집
    },
    module: {},
    plugins: {},
    output: {
        filename: 'app.js', // 하나로 합쳐질 js의 파일명
        path: path.join(__dirname, 'dist'),     // 생성될 경로
    },
};