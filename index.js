import express from 'express';
import ejs from 'ejs'

const app = express();
const port = 3000;


app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get('/', (req, res)=>
	{
		res.render("index.ejs");
	});
app.get('/about-us', (req, res)=>
{
	res.render("about-us.ejs")

});
app.get('/faq', (req, res)=>
{
	res.render("faq.ejs")

});
app.get('/resources', (req, res)=>
{
	res.render("resources.ejs")

});
app.get('/careers', (req, res)=>
{
	res.render("careers.ejs")

});
app.get('/tenders', (req, res)=>
{
	res.render("tenders.ejs")

});
app.get('/tips', (req, res)=>
{
	res.render("tips.ejs")

});
app.get('/contact', (req, res)=>
{
	res.render("contact.ejs")

});
app.get('/privacy-policy', (req, res)=>
{
	res.render("privacy-policy.ejs")

});
app.get('/tou', (req, res)=>
{
	res.render("tou.ejs")

});
app.listen(port,
console.log(`App running at port ${port}`)
	);
