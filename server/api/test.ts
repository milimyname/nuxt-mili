export default defineEventHandler(async (event) => {
  // ... Do whatever you want here

  // Return a response
  return {
    statusCode: 200,
    body: "Hello, World!",
  };
});
