const express = require('express');

// express 객체를 app에 넣어준다.
const app = express();

// port라는 변수에 process.env.PORT || 3051 넣어준다.
app.set('port', process.env.PORT || 3051);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트애서 대기중');
});