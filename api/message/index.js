// module.exports = async function (context, req) {
//     context.res.json({
//         text: "Hello from the API"
//     });
// };

module.exports = async function (context, req) {
    context.log("JavaScript HTTP trigger function processed a request.");
  
    const authorization = req.headers["authorization"];
    if (authorization && authorization === "BearerSecret") {
        context.res = {
        // body: { text: "Hello from the API" },
        body: { text: "Hello from the API + " + JSON.stringify(req.headers) },
        };
    }
    else {
        // context.res = {
        //   status: 401,
        //   body: "Unauthorized",
        // };
        context.res = {
            body: { text: "Fail + " + JSON.stringify(req.headers) },
        };
      }
  };