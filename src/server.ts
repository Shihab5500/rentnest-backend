import app from './app';

const port = process.env.PORT || 5000;

async function main() {
  try {
    app.listen(port, () => {
      console.log(`🚀 RentNest Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to start server', err);
  }
}

main();