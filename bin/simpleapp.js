#!/usr/bin/env node

const cdk = require("aws-cdk-lib");
const { AppStack } = require("../lib/app-stack");

const app = new cdk.App();
new AppStack(app, "appStack", {
  /* If you don't specify 'environments', this ssstack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be also be deployed anywhere/region/az/location. */
  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by current configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, regions: process.env.CDK_DEFAULT_REGION, process.env.AWS_REGION },
  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '123456789012', region: 'us-east-1', vpc: '', subnet:'' },
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
});
