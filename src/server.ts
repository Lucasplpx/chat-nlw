import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (req, res) => {
  res.json({ ok: 'Olá nlw 05' });
});

app.post('/users', (req, res) => {
  res.json({ ok: 'Post users.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
