"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv/config");

const app = (0, _express.default)(); // Parse incoming request available "req.body"

app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use('/api', _routes.default);
app.use((err, res, next) => {
  res.json({
    err: err.message
  });
});
app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`));