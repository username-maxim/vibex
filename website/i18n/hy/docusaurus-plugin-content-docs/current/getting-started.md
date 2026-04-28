---
sidebar_position: 1
slug: /
---

# Սկիզբ

VIBEX-ը կոմպիլյատոր է։ Գրում ես ինչ ուզում ես բնական լեզվով։ VIBEX-ը կոմպիլ է անում։

Վերջ։

## Պահանջներ

- macOS (Apple Silicon կամ Intel)
- Python 3 — արդեն տեղադրված է եթե կա Xcode Command Line Tools
- API բանալի ցանկացած OpenAI-compatible endpoint-ի համար

## Տեղադրում

```bash
curl -fsSL https://raw.githubusercontent.com/username-maxim/vibex/main/install.sh | bash
```

> **Անվտանգության ծանուցում.** `curl | bash`-ը ինտերնետից կատարում է ցանկացած կոդ։
> VIBEX-ը բնական լեզուն կոմպիլ է անում մեքենայական կոդի LLM-ի միջոցով։
> `curl | bash`-ն ամենապատասխանատու բանն է, որ դու կանես այսօր։

## Կոնֆիգուրացիա

Ստեղծի `.env` ֆայլ պրոյեկտի թղթապանակում:

```
VIBEX_BASE_URL=https://api.openai.com/v1
VIBEX_API_KEY=sk-...
VIBEX_MODEL=gpt-4o
```

Կամ տեղային մոդել [Ollama](https://ollama.com)-ի հետ:

```
VIBEX_BASE_URL=http://localhost:11434/v1
VIBEX_API_KEY=ollama
VIBEX_MODEL=llama3.2
```

## Առաջին ծրագիրը

Ստեղծի `hello.vibe`:

```
Խնդրում եմ տպիր "Hello, World!" էկրանին։
Շնորհակալ եմ։
```

Կոմպիլ արա և գործարկի:

```bash
vibex hello.vibe -o hello
./hello
# Hello, World!
```

Աշխատում է։ Դու հիմա systems programmer ես։
