const express = require('express');
const morgan = require('morgan');

const customerRouter = require('./routes/customerRoutes');
const loanRouter = require('./routes/loanRoutes');
const loanLedgerRouter = require('./routes/loanLedgerRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/', customerRouter);
app.use('/:id', customerRouter);

app.use('/', loanRouter);
app.use('/:id', loanRouter);

app.use('/', loanLedgerRouter);
app.use('/:id', loanLedgerRouter);

module.exports = app;