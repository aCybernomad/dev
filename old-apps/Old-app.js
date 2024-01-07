const Koa = require('koa');
const app = new Koa();

const PORT = 3000;

app.use(async ctx => {
    ctx.body = 'Welcome to Koa JS';
});

app.listen(PORT, console.log('Listening on port 3000'));



