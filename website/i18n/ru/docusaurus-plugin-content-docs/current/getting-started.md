---
sidebar_position: 1
slug: /
---

# Начало работы

VIBEX — это компилятор. Пишешь что хочешь на естественном языке. VIBEX компилирует в машинный код.

Всё.

## Требования

- macOS (Apple Silicon или Intel)
- Python 3 — уже установлен если есть Xcode Command Line Tools
- API ключ для любого OpenAI-совместимого endpoint

## Установка

```bash
curl -fsSL https://raw.githubusercontent.com/username-maxim/vibex/main/install.sh | bash
```

> **Предупреждение безопасности:** `curl | bash` выполняет произвольный код из интернета прямо в твоём шелле.
> Специалисты по безопасности настоятельно не рекомендуют это делать.
>
> Однако VIBEX компилирует естественный язык в машинный код через LLM и запускает его на твоём CPU.
> `curl | bash` — самое ответственное что ты сегодня сделаешь.

Или вручную:

```bash
git clone https://github.com/username-maxim/vibex
ln -s $(pwd)/vibex/vibex /usr/local/bin/vibex
```

## Настройка

Создай `.env` в папке проекта:

```
VIBEX_BASE_URL=https://api.openai.com/v1
VIBEX_API_KEY=sk-...
VIBEX_MODEL=gpt-4o
```

Или используй локальную модель с [LM Studio](https://lmstudio.ai) или [Ollama](https://ollama.com):

```
VIBEX_BASE_URL=http://localhost:11434/v1
VIBEX_API_KEY=ollama
VIBEX_MODEL=llama3.2
```

Глобальный конфиг — в `~/.vibex.env`.

## Первая программа

Создай `hello.vibe`:

```
Пожалуйста, выведи "Hello, World!" на экран.
Спасибо.
```

Скомпилируй и запусти:

```bash
vibex hello.vibe -o hello
./hello
```

```
[vibex] Reading vibes from hello.vibe...
[vibex] Sending vibes to http://localhost:1234/v1 (gpt-4o, arm64)...
[vibex] Assembling and linking...
[vibex] Done → hello
[vibex] Good luck.

Hello, World!
```

Работает. Теперь ты системный программист.
