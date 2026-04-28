---
sidebar_position: 5
---

# Справочник ошибок

## HallucinationError

```
[vibex] HallucinationError: LLM invented instructions that don't exist.
```

**Причина:** LLM сгенерировал ассемблер с инструкциями которых не существует.

**Решение:** Запусти снова. Другие вайбы.

---

## CloudError

```
[vibex] CloudError: HTTP 401: Unauthorized
```

**Причина:** API ключ отсутствует или неверный. Проверь `VIBEX_API_KEY`.

---

```
[vibex] CloudError: Cannot connect to http://localhost:11434/v1
```

**Причина:** Локальный LLM сервер не запущен.

---

## Bad CPU Type

```
zsh: bad CPU type in executable: ./hello
```

**Причина:** Скомпилировано под `x86_64` на Apple Silicon без Rosetta.

**Решение:**
```bash
softwareupdate --install-rosetta --agree-to-license
```

---

## Компилируется но делает не то

Это не ошибка. Запусти ещё раз.

---

## Works on My Machine

Классика. Используй `--work` чтобы сохранить ассемблер и показать коллегам.

Они тоже не поймут.
