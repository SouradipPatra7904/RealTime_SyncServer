const app = require('express')();

app.get('/', (req, res) => {
  res.send('<h1>Server is running</h1>');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

export default app;