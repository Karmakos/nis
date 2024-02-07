import express from 'express';
import ejs from 'ejs'
import path from 'path'; 
import { fileURLToPath } from 'url';
const router = express.Router();

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Something went wrong!');
  });
  

router.get('/', (req, res)=>
	{
		res.render("index.ejs");
	});
router.get('/about-us', (req, res)=>
{
	res.render("about-us.ejs")

});
router.get('/faq', (req, res)=>
{
	res.render("faq.ejs")

});
router.get('/resources', (req, res)=>
{
	res.render("resources.ejs")

});
router.get('/careers', (req, res)=>
{
	res.render("careers.ejs")

});
router.get('/tenders', (req, res)=>
{
	res.render("tenders.ejs")

});
router.get('/tips', (req, res)=>
{
	res.render("tips.ejs")

});
router.get('/contact', (req, res)=>
{
	res.render("contact.ejs")

});
router.get('/privacy-policy', (req, res)=>
{
	res.render("privacy-policy.ejs")

});
router.get('/tou', (req, res)=>
{
	res.render("tou.ejs")

});
app.use('/.netlify/index', router);
app.listen(port,
console.log(`App running at port ${port}`));
