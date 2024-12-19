import { defineFunction } from '@aws-amplify/backend';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Runtime } from 'aws-cdk-lib/aws-lambda';

export const funcWithSsm = defineFunction({
  name: 'funcWithSsm',
  entry: './func-src/handler_with_ssm.ts',
});

export const funcWithAwsSdk = defineFunction({
  name: 'funcWithAwsSdk',
  entry: './func-src/handler_with_aws_sdk.ts',
});

export const funcWithSchedule = defineFunction({
  name: 'funcWithSchedule',
  entry: './func-src/handler_with_aws_sqs.ts',
  schedule: '* * * * ?',
});

export const funcNoMinify = defineFunction({
  name: 'funcNoMinify',
  entry: './func-src/handler_no_minify.ts',
  bundling: {
    minify: false,
  },
});

export const funcProvided = defineFunction((scope) => {
  return new NodejsFunction(scope, 'funcProvided', {
    entry:
      './packages/integration-tests/src/test-projects/advanced-auth-and-functions/amplify/func-src/handler_provided.ts',
    runtime: Runtime.NODEJS_18_X,
  });
});

export const funcCustomEmailSender = defineFunction({
  name: 'funcCustomEmailSender',
  entry: './func-src/handler_custom_email_sender.ts',
});
