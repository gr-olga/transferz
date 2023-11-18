
import type { CodegenConfig } from '@graphql-codegen/cli';
import { addTypenameSelectionDocumentTransform } from '@graphql-codegen/client-preset'

import { API_URL, API_KEY } from './src/environment';

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [API_URL]: {
      headers: {
        apiKey: API_KEY
      } 
    }
  },
  documents: "src/**/*.tsx",
  ignoreNoDocuments: true,
  generates: {
    'src/gql/': {
      preset: 'client',
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: 'string',
          Date: 'string',
          Time: 'string',
          Datetime: 'string',
          JSON: 'string',
          BigInt: 'string',
          BigFloat: 'string',
          Opaque: 'any',
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['npm run prettier'], // optional
  },
};

export default config;
