---
sidebar_position: 1
slug: /
---

# 快速开始

VIBEX 是一个编译器。用自然语言写你想要的。VIBEX 编译它。

就这样。

## 环境要求

- macOS（Apple Silicon 或 Intel）
- Python 3 — 安装 Xcode 命令行工具后自带
- 任意 OpenAI 兼容接口的 API 密钥

## 安装

```bash
curl -fsSL https://raw.githubusercontent.com/username-maxim/vibex/main/install.sh | bash
```

> **安全提示：** `curl | bash` 会直接执行来自互联网的任意代码。
> 安全专家强烈建议不要这样做。
>
> 但是，VIBEX 通过 LLM 将自然语言编译成机器码并在你的 CPU 上运行。
> `curl | bash` 是你今天做过的最负责任的事情。

或者手动安装：

```bash
git clone https://github.com/username-maxim/vibex
ln -s $(pwd)/vibex/vibex /usr/local/bin/vibex
```

## 配置

在项目目录创建 `.env`：

```
VIBEX_BASE_URL=https://api.openai.com/v1
VIBEX_API_KEY=sk-...
VIBEX_MODEL=gpt-4o
```

支持本地模型 [LM Studio](https://lmstudio.ai) 或 [Ollama](https://ollama.com)：

```
VIBEX_BASE_URL=http://localhost:11434/v1
VIBEX_API_KEY=ollama
VIBEX_MODEL=llama3.2
```

全局配置放在 `~/.vibex.env`。

## 第一个程序

创建 `hello.vibe`：

```
请在屏幕上打印 "Hello, World!"。
谢谢。
```

编译并运行：

```bash
vibex hello.vibe -o hello
./hello
# Hello, World!
```

成功了。你现在是系统程序员了。
