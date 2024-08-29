import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname)));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Greska! ');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server je na portu ${PORT}`);
});

export default app;
