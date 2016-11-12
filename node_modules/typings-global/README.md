# typings-global
@types/node in the right version

## Usage
checks your node version during installation and then installs the best matching @types/node version

To install type

```shell
npm install --save typings-global
```

To gain node instellisense in your project simply type

```typescript
import "typings-global"
``` 

You can then import any node core modules like `path` or `crypto` with intellisense working.
