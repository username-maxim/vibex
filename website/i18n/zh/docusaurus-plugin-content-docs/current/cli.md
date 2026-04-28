---
sidebar_position: 3
---

# CLI 参考

## 用法

```bash
vibex <file.vibe> [选项]
```

## 选项

| 选项 | 默认值 | 说明 |
|------|--------|------|
| `-o <output>` | `a.out` | 输出二进制文件名 |
| `--arch <arch>` | `arm64` | 目标架构：`arm64` 或 `x86_64` |
| `--model <model>` | `gpt-4o` | 覆盖 LLM 模型 |
| `--work` | 关闭 | 保留临时目录 |
| `--seed <n>` | 随机 | 固定编译 seed |

## 环境变量

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `VIBEX_BASE_URL` | `https://api.openai.com/v1` | OpenAI 兼容接口地址 |
| `VIBEX_API_KEY` | — | API 密钥 |
| `VIBEX_MODEL` | `gpt-4o` | 编译器模型 |
| `VIBEX_ARCH` | `arm64` | 默认目标架构 |

## 示例

```bash
vibex hello.vibe -o hello
vibex hello.vibe -o hello --seed 42
vibex hello.vibe -o hello --work
```
