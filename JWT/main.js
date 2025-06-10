const express = require('express');
const app = express();
const PORT = 3000;

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'MY-SECRET-KEY';

const { auth } = require('./authMiddleware');

app.get('/getToken', (req, res) => {
  token = jwt.sign({
    type: 'JWT'
  }, SECRET_KEY, {
    expiresIn: '15m', // 만료시간 15분
    issuer: '토큰발급자',
  });

  return res.status(200).json({
    code: 200,
    message: '토큰이 발급되었습니다.',
    token: token
  });
});

app.get('/validToken', auth, (req, res) => {
  return res.status(200).json({
    code: 200,
    message: '토큰은 정상입니다.',
    data: {
      response: "good"
    }
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});