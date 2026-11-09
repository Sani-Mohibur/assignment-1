# TypeScript Type Hierarchy: `any`, `unknown`, and `never`

## Introduction

TypeScript types relate through assignability. `unknown` is the safe top type, `never` the bottom type, and `any` bypasses normal checks.

## Simplified Type Hierarchy

| Position      | Types                         | Meaning                                                               |
| ------------- | ----------------------------- | --------------------------------------------------------------------- |
| Top type      | `unknown`                     | Can receive a value of any type, but must be checked before use.      |
| Special type  | `any`                         | Bypasses type checking and removes much of TypeScript's safety.       |
| Regular types | `string`, `number`, `boolean` | Describe the kind of value.                                           |
| Literal types | `"admin"`, `42`, `true`       | More specific types of `string`, `number`, and `boolean`.             |
| Bottom type   | `never`                       | Represents a value that cannot exist. It is assignable to every type. |

## How They Work

`unknown` accepts any value, but requires a check before use. `any` allows unchecked operations that can cause runtime errors. `never` represents an impossible value, such as the result of a function that always throws.

```ts
// 1. any
let anyValue: any = "Hello";
console.log(anyValue.toUpperCase());

anyValue = 100;
console.log(anyValue.toFixed(2));

// 2. unknown
let unknownValue: unknown = "Hello";

if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

// 3. never
function processValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    const neverValue: never = value;
    return neverValue;
  }
}
```

## Why Prefer `unknown` Over `any`?

`unknown` is usually preferred for values with an unclear type because it requires a check before use. Use `any` only when you intentionally want to disable type checking.

## Conclusion

Use `unknown` for unclear data, specific types when possible, and `never` for impossible cases. This keeps code safer.
