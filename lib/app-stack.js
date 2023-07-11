const { Stack, Duration } = require("aws-cdk-lib");
const lambda_service = require("../lib/lambda_service");

/** APP STACK */
class AppStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    new lambda_service.LambdaService(this, "LambdaFn");
  }
}

module.exports = { AppStack };
