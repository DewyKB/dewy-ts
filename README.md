# Typescript/Javascript Dewy SDK

## Installing

1. Install the library
```sh
npm install dewy_ts
```
1. Connect to a Dewy instance
```typescript
import { Dewy } from 'dewy_ts';
const dewy = new Dewy({endpoint: “localhost:3000”})
```

For more information about how to use Dewy, see the [README in the main repo](https://github.com/DewyKB/dewy).

## Cutting a new release

1. Setup development environment
    ```sh
    npm install
    ```
1. Run the Dewy service
    ```sh
    docker run dewykb/dewy
    ```
1. Regenerate the client library
    ```sh
    npm run generate-client
    ```
1. Recompile Typescript
    ```sh
    rm -rf dist && npx tsc
    ```
1. Publish to npm
    (You probably want to bump the version number in `package.json` first)

    ```sh
    npm publish --access public
    ```

<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=bafcdbae-2a13-4b8b-a31b-bbe8d9eb1ca9" />
