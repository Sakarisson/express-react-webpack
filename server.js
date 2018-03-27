import express from 'express';
import webpack from 'webpack';
import path from 'path';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';

const compiler = webpack(webpackConfig);

const app = express();
app.use(webpackMiddleware(compiler));

const api = express.Router();

api.get('/', (req, res) => {
  res.send({
    greeting: 'Hello'
  });
});

api.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.use('/api', api);

app.use('*', function (req, res) {
  res.sendFile(path.join(compiler.outputPath, 'index.html'));
});

app.listen(4000, () => {
  console.log('Listening');
});
