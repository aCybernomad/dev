const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

app.use(async (ctx) => {
  try {
    const apiUrl = 'http://api.open-notify.org/iss-now.json';

    // Make the API call using Axios
    const response = await axios.get(apiUrl);

    // Extract latitude and longitude from the response data
    const { message, iss_position } = response.data;

    if (message === 'success' && iss_position) {
      const { latitude, longitude } = iss_position;

      // Respond with latitude and longitude
      ctx.body = {
        latitude,
        longitude,
      };

    } else {
      // Respond with an error message
      ctx.status = 500;
      ctx.body = { error: 'API request failed' };
    }
  } catch (error) {
    console.error('Error:', error.message);
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
