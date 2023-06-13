// module.exports = async function (context, req) {
//   context.res = {
//     // status: 200, /* Defaults to 200 */
//     body: { text: "Hello from the API" },
//   };
// };

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const authorization = req.headers["Authorization"];
  if (authorization && authorization === "BearerSecret") {
    context.res = {
      body: { text: "Hello from the API" },
    };
  }
  else {
    context.res = {
      status: 401,
      body: "Unauthorized",
    };
  }
};