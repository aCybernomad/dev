const Koa = require('koa');
const axios = require('axios');
const views = require('koa-views');
const path = require('path');

const app = new Koa();

// Set up EJS as the template engine
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }));

app.use(async (ctx) => {
  const apiUrl = 'http://api.open-notify.org/iss-now.json';

  // Make the API call using Axios
  const response = await axios.get(apiUrl);

  // Extract latitude and longitude from the response data
  const { message, iss_position } = response.data;

  if (message === 'success' && iss_position) {
    const { latitude, longitude } = iss_position;

    // Render the index.ejs template with latitude and longitude
    await ctx.render('index', {
      latitude,
      longitude,
    });
  } else {
    // Respond with an error message
    ctx.status = 500;
    ctx.body = { error: 'API request failed' };
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
