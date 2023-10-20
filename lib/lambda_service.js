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
      functionName: "reprocessor-lambda",
      bundling: {
        minify: false,
        externalModules: ["aws-sdk"],
      },
      environment: {
        REGION: "us-west-2",
        ACCOUNT: "1878473783",
        RETRY: "false",
        SWITCHOVER: "true",
        INSTANCE_COUNT: "3",
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
