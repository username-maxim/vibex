---
sidebar_position: 1
---

# Error Reference

VIBEX has a rich error system designed to communicate exactly what went wrong and who is to blame.

## HallucinationError

```
[vibex] HallucinationError: LLM invented instructions that don't exist.
```

**Cause:** The LLM generated assembly containing instructions or syntax that do not exist in the target architecture.

**Example:**
```asm
mov x30, sp[[#0]]    ; not a real instruction
```

**Solutions:**
- Run again. The LLM may generate valid code next time.
- Use `--work` to inspect the generated assembly.
- Use a larger model. Bigger models hallucinate less.
- Add `DO NOT INVENT SYNTAX` to your `.vibe` file. (We already added this to the compiler. It helps sometimes.)

---

## CloudError

```
[vibex] CloudError: HTTP 401: Unauthorized
```

**Cause:** API key is missing, invalid, or expired.

**Solution:** Check `VIBEX_API_KEY` in your `.env`.

---

```
[vibex] CloudError: Cannot connect to http://localhost:11434/v1: Connection refused
```

**Cause:** Your local LLM server is not running.

**Solution:** Start LM Studio or Ollama.

---

## FileNotFoundError

```
[vibex] hello.vibe: no such file
```

**Cause:** The `.vibe` file does not exist.

**Solution:** Create the file. Write your vibes. Try again.

---

## Bad CPU Type

```
zsh: bad CPU type in executable: ./hello
```

**Cause:** You compiled for `x86_64` on Apple Silicon without Rosetta.

**Solution:**
```bash
softwareupdate --install-rosetta --agree-to-license
```

Or compile for `arm64`:
```bash
vibex hello.vibe -o hello --arch arm64
```

---

## It Compiled But Does The Wrong Thing

This is not an error. This is non-deterministic compilation. Run `vibex` again.

If it keeps doing the wrong thing, your `.vibe` file may be ambiguous. Try being more specific.

Instead of:
```
Do the thing.
```

Try:
```
Print the numbers from 1 to 10, one per line.
```

---

## It Works On My Machine

Classic. Use `--work` to save the generated assembly and share it with your colleagues.

They will not understand it either.
