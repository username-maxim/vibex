---
sidebar_position: 3
---

# Справочник CLI

## Использование

```bash
vibex <file.vibe> [флаги]
```

## Флаги

| Флаг | По умолчанию | Описание |
|------|-------------|----------|
| `-o <output>` | `a.out` | Имя выходного бинарника |
| `--arch <arch>` | `arm64` | Архитектура: `arm64` или `x86_64` |
| `--model <model>` | `gpt-4o` | Переопределить модель LLM |
| `--work` | выкл | Сохранить temp директорию |
| `--seed <n>` | случайный | Зафиксировать seed компиляции |

## Переменные окружения

| Переменная | По умолчанию | Описание |
|-----------|-------------|----------|
| `VIBEX_BASE_URL` | `https://api.openai.com/v1` | OpenAI-совместимый endpoint |
| `VIBEX_API_KEY` | — | API ключ |
| `VIBEX_MODEL` | `gpt-4o` | Модель компилятора |
| `VIBEX_ARCH` | `arm64` | Архитектура по умолчанию |

## Примеры

```bash
vibex hello.vibe -o hello
vibex hello.vibe -o hello --seed 42
vibex hello.vibe -o hello --work
VIBEX_MODEL=llama3.2 vibex hello.vibe -o hello
```
