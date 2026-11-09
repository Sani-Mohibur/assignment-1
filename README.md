# TypeScript Assignment 1

This repository contains solutions to TypeScript practice problems along with conceptual guides covering key TypeScript type system concepts.

---

## 📄 Overview of `solutions.ts`

The [`solutions.ts`](./solutions.ts) file demonstrates key TypeScript features and problem-solving patterns through 8 distinct problems:

1. **Problem 1 (`multiplyValue`)**: Demonstrates optional function parameters (`multiplier?: number`) with fallback default logic.
2. **Problem 2 (`processInput`)**: Uses union types (`string | number | boolean`) and type narrowing via `typeof` and value checks.
3. **Problem 3 (`formatCoordinate`)**: Implements tuple types with `readonly` modifier (`readonly [number, number, string]`) for immutable coordinate formatting.
4. **Problem 4 (`concatenateArrays`)**: Utilizes generic functions (`<T>`) combined with rest parameters to merge multiple arrays of any matching type.
5. **Problem 5 (`getPopularCourses`)**: Defines a `Course` interface and filters an array of objects based on multiple property conditions.
6. **Problem 6 (`pluckValues`)**: Employs generics with key constraints (`<T, K extends keyof T>`) to safely extract property values from an array of objects.
7. **Problem 7 (`Employee` & `Manager`)**: Demonstrates Object-Oriented Programming (OOP) in TypeScript, including class inheritance (`extends`), constructor parameter properties, and access modifiers (`protected`, `private`).
8. **Problem 8 (`validateAgeAsync`)**: Handles asynchronous operations using `async`/`await`, explicit `Promise<string>` return types, and validation error throwing.

---

## 📚 Conceptual Guides

Explore detailed explanations and comparisons of TypeScript type concepts:

- 🔗 [TypeScript Type Hierarchy (`any`, `unknown`, `never`)](./type-hierarchy.md) – An in-depth look at top types, bottom types, assignability, and type safety.
- 🔗 [Difference Between Type and Interface](./type-vs-interface.md) – A comparative breakdown of syntax, extending vs intersections, declaration merging, and when to use each.
