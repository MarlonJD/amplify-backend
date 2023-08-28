## API Report File for "@aws-amplify/backend-deployer"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { UniqueBackendIdentifier } from '@aws-amplify/plugin-types';

// @public
export interface BackendDeployer {
    // (undocumented)
    deploy: (uniqueBackendIdentifier?: UniqueBackendIdentifier, deployProps?: DeployProps) => Promise<void>;
    // (undocumented)
    destroy: (uniqueBackendIdentifier?: UniqueBackendIdentifier) => Promise<void>;
}

// @public
export class BackendDeployerFactory {
    static getInstance(): BackendDeployer;
}

// @public (undocumented)
export type DeployProps = {
    hotswapFallback?: boolean;
    method?: 'direct';
};

// (No @packageDocumentation comment for this package)

```