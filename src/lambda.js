import { Lambda, ListFunctionsCommand } from "@aws-sdk/client-lambda";

/* 
This code uses callbacks to handle asynchronous function responses.
It currently demonstrates using an async-await pattern. 
AWS supports both the async-await and promises patterns.
For more information, see the following: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/calling-services-asynchronously.html
https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html 
*/

exports.main = async (event, context, callback) => {
  return {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      msg: "Success",
      event,
      context,
      callback,
    }),
  };
};
