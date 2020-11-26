# range-type

This is type utils to generate type of non-negative integer number in specific range.

## Utils

### Range<From, To>

Returns numeric type which will contain only positive integer values from `From` value to `To` value exclusively.

```typescript
import { Range } from 'range-type'
type D = Range<1, 10> // 1 | 2 | 3 | 4 | 5
```

### RangeTo<N>

Returns numeric type which will contain only positive integer values from `0` to `To` value exclusively.

```typescript
import { RangeTo } from 'range-type'
type C = RangeTo<3> // 0 | 1 | 2
```

## Credits

Based on [npm-typescript-package-boilerplate](https://github.com/93v/npm-typescript-package-boilerplate) with a few changes.
