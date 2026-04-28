---
sidebar_position: 1
---

# CLI Reference

## Usage

```bash
vibex <file.vibe> [flags]
```

## Flags

| Flag | Default | Description |
|------|---------|-------------|
| `-o <output>` | `a.out` | Output binary name |
| `--arch <arch>` | `arm64` | Target architecture: `arm64` or `x86_64` |
| `--model <model>` | `gpt-4o` | Override the LLM model |
| `--work` | off | Keep temp directory and print its path |

## Environment Variables

Configure via `.env` in your project directory, `~/.vibex.env` globally, or as shell env vars.

| Variable | Default | Description |
|----------|---------|-------------|
| `VIBEX_BASE_URL` | `https://api.openai.com/v1` | OpenAI-compatible API endpoint |
| `VIBEX_API_KEY` | — | API key (`OPENAI_API_KEY` also works) |
| `VIBEX_MODEL` | `gpt-4o` | Model to use as compiler |
| `VIBEX_ARCH` | `arm64` | Default target architecture |

## Examples

```bash
# Basic usage
vibex hello.vibe -o hello

# Use a specific model
vibex hello.vibe -o hello --model gpt-4o

# Compile for x86_64 (requires Rosetta on Apple Silicon)
vibex hello.vibe -o hello --arch x86_64

# Keep temp files for debugging
vibex hello.vibe -o hello --work

# Use a local model
VIBEX_BASE_URL=http://localhost:11434/v1 VIBEX_MODEL=llama3.2 VIBEX_API_KEY=ollama \
  vibex hello.vibe -o hello
```

## Inspecting Generated Assembly

Use `--work` to keep the temp directory:

```bash
vibex hello.vibe -o hello --work
# [vibex] WORK=/var/folders/.../vibex_work_xxx/
# assembly is at /var/folders/.../vibex_work_xxx/program.s
```
