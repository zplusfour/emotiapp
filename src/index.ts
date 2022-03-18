import express from "express";
const app = express();

app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", (req: express.Request, res: express.Response) => {
  res.render('index', { _id:  req.headers['X-Replit-User-Id'], user: req.headers['X-Replit-User-Name'], roles: req.headers['X-Replit-User-Roles'] });
});

app.listen(3000, () => {
  console.log("hi");
});