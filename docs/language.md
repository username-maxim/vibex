---
sidebar_position: 1
---

# Language Reference

A `.vibe` file is a plain text file. Write what you want the program to do. VIBEX figures out the rest.

## Syntax

There is no syntax. Write sentences. The compiler is an LLM.

```
Print the numbers from 1 to 10.
```

```
Read a name from stdin and say hello to it.
```

```
Sort a list of integers and print the result.
```

## Comments

Lines starting with `#` are passed to the LLM as context. Use them wisely — the compiler reads them.

```
# This is performance-critical. Do not use naive algorithms.
Sort 10 million integers as fast as possible.
```

```
# TODO: add error handling
# (the compiler will probably ignore this too)
Read a file and print its contents.
```

## Pragmas

Pragmas are special instructions that affect compilation behavior.

### `OPTIMIZE: chill`
Keep it simple. Prioritize readability over performance.

```
OPTIMIZE: chill
Calculate the sum of an array.
```

### `OPTIMIZE: grindset`
Maximum performance. The compiler may use clever tricks.

```
OPTIMIZE: grindset
Sort 10 million integers.
```

### `OPTIMIZE: vibes only`
Undefined behavior. Compilation outcome is non-deterministic.

### `trust me bro`
Disables safety checks. The compiler may use unsafe operations, skip bounds checking, and generally do things that would make a senior engineer uncomfortable.

```
Read directly from memory address 0x0.
trust me bro.
```

## Politeness

Adding `please` and `thank you` to your program has been shown to improve output quality. This is not a joke. LLMs respond better to polite prompts.

```
Please print "Hello, World!" to the screen.
Thank you.
```

vs.

```
print hello world
```

The polite version compiles better. We don't make the rules.

## Non-Determinism

The same `.vibe` file may compile to different assembly on each run. This is a feature. It keeps you on your toes.

If yesterday's binary worked and today's doesn't, try compiling again. Different vibes.
