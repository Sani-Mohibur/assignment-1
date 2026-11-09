# Difference Between Interface and Type in TypeScript

In TypeScript, both interface and type define data structures or types. But they have some differences.

## 1. Syntax

### Interface

In an Interface, the = sign is never used. It directly creates a blueprint for an object.

```ts
interface Car {
  brand: string;
}
```

### Type

When writing a Type, = is used.

```ts
type Car = {
  brand: string;
};
```

## 2. Extending

### Interface

Interfaces use `extends`:

```ts
interface ElectricCar extends Car {
  battery: number;
}
```

### Type

Types use `&` (intersection):

```ts
type ElectricCar = Car & {
  battery: number;
};
```

## 3. Declaration Merging

Interfaces support declaration merging. Multiple interfaces with the same name are automatically combined.

```ts
interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const car: Car = { brand: "BMW", model: "M5" };
```

Type aliases do not support declaration merging.

## 4. Complex Types

Type aliases can be used to create many complex types that are not possible with Interface. For example:

- Union type
- Intersection
- Conditional types
- Primitive alias

Example:

```ts
type Status = "success" | "error";
type Point = [number, number]; // Tuple
```

## 5. Usage Guidelines

### ✅ Use Interface when:

- You are writing code in an Object-Oriented Programming (OOP) style.
- You want to use the benefits of declaration merging.

### ✅ Use Type when:

- You need to create Union, Intersection, or Conditional types.
- You need to create aliases for primitive types.

## 6. Conclusion

Both Interface and Type are useful. Sometimes they perform the same tasks, but their approaches are different. Which one you use depends on the developer. Developers use both according to the project requirements or team preferences.
