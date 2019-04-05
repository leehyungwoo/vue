# leewoo
node express mongo vue

# config파일 세팅방법
```javascript
module.exports = {
    dbUrl: 'mongodb://localhost:27017/leewoo',
};

```
이런식으로 디비 연결 문자열을 작성해야 웹서버가 정상 구동됨.
배포시에 반드시 config그 ignore처리하기.
## sh 실행방법
```
sh bs.sh
```
## pm2 init  
+ 하면,Ecosystem File
```code
https://pm2.io/doc/en/runtime/guide/ecosystem-file/
```

## pm2 startup :서버컴퓨터라 리부팅되어도 pm2실행
```code
https://pm2.io/doc/en/runtime/guide/startup-hook/
```

## pm2 install pm2-logrotate
```code
https://pm2.io/doc/en/runtime/guide/log-management/#rotating-logs
```

