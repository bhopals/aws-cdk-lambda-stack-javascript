const { Aws, CfnOutput } = require("aws-cdk-lib");
const { Construct } = require("constructs");
const path = require("path");

const lambda = require("aws-cdk-lib/aws-lambda");
const { NodejsFunction } = require("aws-cdk-lib/aws-lambda-nodejs");

class LambdaService extends Construct {
  constructor(scope, id) {
    super(scope, id);

    const handler = new NodejsFunction(this, "LambdaHandler", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "main",
      entry: path.join(__dirname, "/../src/lambda.js"),
      functionName: "lambda-fn",
      bundling: {
        minify: false,
        externalModules: ["aws-sdk"],
      },
      environment: {
        REGION: "us-east-1",
        ACCOUNT: "1878473782",
        RETRY: "false",
        environment: "production",
      },
    });

    const fnUrl = handler.addFunctionUrl({
      authType: lambda.FunctionUrlAuthType.NONE,
    });

    new CfnOutput(this, "TheUrl", {
      value: fnUrl.url,
    });
  }
}

module.exports = { LambdaService };
