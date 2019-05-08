module.exports = {
    apps: [{
        name: 'memv',   ///플젝이름
        script: './bin/www', //노드실행파일 위치
        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        instances: 1, //인스턴스갯수
        autorestart: true, //재시작
        watch: false, //코드가 변화되었을때 재시작
        max_memory_restart: '1G', //메모리 1기가넘으면 재시작
        env: {
            NODE_ENV: 'development',
            PORT: 3000
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 80
        }
    }],

    deploy: {
        production: {
            user: 'node',
            host: '212.83.163.1',
            ref: 'origin/master',
            repo: 'git@github.com:repo.git',
            path: '/var/www/production',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
