module.exports = {
    // dbUrl: 'mongodb+srv://leewoo:1234@cluster0-y7ipg.mongodb.net/leewoo',
    dbUrl: 'mongodb://localhost:27017/leewoo',
    // dbUrl: 'mongodb://localhost:27017/nemv',
    admin: {
        id: 'leewoo',
        pwd: '123456',
        name: '관리자'
    },
    jwt: {
        secretKey: '아주 어려운 토큰 발급용 키',
        issuer: 'xxx.com',
        algorithm: 'HS256',
        expiresIn: 60 * 3, // 기본 3분
        expiresInRemember: 60 * 60 * 24 * 7, // 기억하기 눌렀을 때 7일
        expiresInDiv: 3, // 토큰시간 나누는 기준,
        subject: '유저정보'
    }
};
