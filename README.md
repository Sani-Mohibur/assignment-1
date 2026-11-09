# TypeScript Assignment 1

This repository contains TypeScript implementations demonstrating core language features, along with conceptual guides covering key TypeScript type system concepts.

---

## 📄 Overview of `solutions.ts`

The [`solutions.ts`](./solutions.ts) file demonstrates key TypeScript features and patterns through practical implementations:

- **`multiplyValue`**: Demonstrates optional function parameters (`multiplier?: number`) with fallback default logic.
- **`processInput`**: Uses union types (`string | number | boolean`) and type narrowing via `typeof` and value checks.
- **`formatCoordinate` & `Coordinate`**: Implements tuple types with the `readonly` modifier (`readonly [number, number, string]`) for immutable coordinate formatting.
- **`concatenateArrays`**: Utilizes generic functions (`<T>`) combined with rest parameters to merge multiple arrays of any matching type.
- **`getPopularCourses` & `Course`**: Defines an interface and filters an array of objects based on multiple property conditions.
- **`pluckValues`**: Employs generics with key constraints (`<T, K extends keyof T>`) to safely extract property values from an array of objects.
- **`Employee` & `Manager` Classes**: Demonstrates Object-Oriented Programming (OOP) in TypeScript, including class inheritance (`extends`), constructor parameter properties, and access modifiers (`protected`, `private`).
- **`validateAgeAsync`**: Handles asynchronous operations using `async`/`await`, explicit `Promise<string>` return types, and validation error throwing.

---

## 📚 Conceptual Guides

Explore detailed explanations and comparisons of TypeScript type concepts:

- 🔗 [TypeScript Type Hierarchy (`any`, `unknown`, `never`)](./type-hierarchy.md) – An in-depth look at top types, bottom types, assignability, and type safety.
- 🔗 [Difference Between Type and Interface](./type-vs-interface.md) – A comparative breakdown of syntax, extending vs intersections, declaration merging, and when to use each.
