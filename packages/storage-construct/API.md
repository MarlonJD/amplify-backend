## API Report File for "@aws-amplify/storage-construct"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AmplifyOutputWriter } from '@aws-amplify/plugin-types';
import { Construct } from 'constructs';
import { OutputStorageStrategy } from '@aws-amplify/plugin-types';

// @public
export class AmplifyStorage extends Construct implements AmplifyOutputWriter {
    constructor(scope: Construct, id: string, props: AmplifyStorageProps);
    storeOutput(outputStorageStrategy: OutputStorageStrategy): void;
}

// @public (undocumented)
export type AmplifyStorageProps = {
    versioned?: boolean;
};

// (No @packageDocumentation comment for this package)

```