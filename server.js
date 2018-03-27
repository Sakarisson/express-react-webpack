import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

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

app.listen(4000, () => {
  console.log('Listening');
});
