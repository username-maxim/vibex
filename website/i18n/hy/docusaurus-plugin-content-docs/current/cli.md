---
sidebar_position: 3
---

# CLI տeղekatvu

## Ogtahgordzum

```bash
vibex <file.vibe> [draosher]
```

## Draoshner

| Draosh | Lrakanum | Bnunagrutyun |
|--------|----------|--------------|
| `-o <output>` | `a.out` | Arkhunki anun |
| `--arch <arch>` | `arm64` | `arm64` kam `x86_64` |
| `--model <model>` | `gpt-4o` | LLM model |
| `--work` | anjantvatz | Paхpanel temp papak |
| `--seed <n>` | пaтахakan | Ամragurel seed |

## Sharavasayin переменnier

| Переменная | Lrakanum | Bnunagrutyun |
|-----------|----------|--------------|
| `VIBEX_BASE_URL` | `https://api.openai.com/v1` | API endpoint |
| `VIBEX_API_KEY` | — | API banaли |
| `VIBEX_MODEL` | `gpt-4o` | Model |
| `VIBEX_ARCH` | `arm64` | Architektura |

## Оринакнер

```bash
vibex hello.vibe -o hello
vibex hello.vibe -o hello --seed 42
vibex hello.vibe -o hello --work
```
