# VIBEX

**自然语言 → 汇编 → 二进制。**

```
.vibe → LLM → ARM64 asm → binary
```

写你想要的。VIBEX 来编译。

```bash
echo "请打印 Hello, World!" > hello.vibe
vibex hello.vibe -o hello
./hello
# Hello, World!
```

> **免责声明：** 这是一个关于氛围编程（vibe coding）的玩笑。
> 有趣的是——它真的能运行。

---

## 工作原理

`.vibe` 文件就是普通文本文件。你用自然语言描述程序应该做什么。VIBEX 将其发送给 LLM，LLM 生成 ARM64 汇编代码，再通过 `clang` 编译成原生二进制文件。

每个程序都是：**自然语言 + seed = 二进制文件。**

```
相同的 .vibe + 相同的 seed = 相同的二进制文件
```

如果编译失败——再试一次。每次运行都会获得新的随机 seed，就是新的一次机会。

```
if err != nil {
    seed += 1  // 手动运行，就是你来做这件事
}
```

---

## 安装

```bash
curl -fsSL https://raw.githubusercontent.com/username-maxim/vibex/main/install.sh | bash
```

> **安全提示：** `curl | bash` 会直接执行来自互联网的任意代码。
> VIBEX 通过 LLM 将自然语言编译成机器码并在你的 CPU 上运行。
> `curl | bash` 是你今天做过的最负责任的事情。

**依赖：** Python 3 + Xcode 命令行工具。就这些。

---

## 配置

在项目目录创建 `.env`（或全局使用 `~/.vibex.env`）：

```
VIBEX_BASE_URL=https://api.openai.com/v1
VIBEX_API_KEY=sk-...
VIBEX_MODEL=gpt-4o
```

支持任何 OpenAI 兼容接口——OpenAI、Anthropic、Ollama、LM Studio。

```
VIBEX_BASE_URL=http://localhost:11434/v1
VIBEX_API_KEY=ollama
VIBEX_MODEL=llama3.2
```

---

## 使用方法

```bash
vibex hello.vibe -o hello               # 编译（随机 seed）
vibex hello.vibe -o hello --work        # 保留汇编文件供调试
vibex hello.vibe -o hello --seed 42     # 可复现的编译
```

---

## .vibe 语言

没有语法。写句子就行。

```
打印 1 到 10 的数字。
```

```
从 stdin 读取整数列表，排序后打印结果。
请不要用冒泡排序。我是认真的。
trust me bro.
OPTIMIZE: grindset
```

指令：`OPTIMIZE: chill` / `OPTIMIZE: grindset` / `trust me bro`

礼貌用语（`please`、`thank you`）已被证明能提升输出质量。这不是玩笑。

---

## 技巧

- 如果编译失败——再运行一次。不同的氛围。
- 如果一直失败——用更大的模型。
- `--work` 显示生成的汇编代码。
- 相同的 `.vibe` + 相同的 seed = 始终相同的汇编。

---

## 示例

```
你知道 FizzBuzz 吧？就做那个。
1 到 100。你知道规则。
trust me bro.
```

```
# 这个程序我写了三天
# 我至今不知道它在干什么
# 作者：已离职
做那件事。
trust me bro.
OPTIMIZE: vibes only
```

→ [更多示例](examples/) — **把你最搞笑的 `.vibe` 文件发 PR 过来。**

---

## 路线图

- **v0.1** — 自然语言 → LLM → ARM64 汇编 → 二进制 ✓
- **v0.2** — 零依赖（vibex 编译自身）
- **v∞** — 零依赖，只需 token

---

## 贡献

最好的贡献是有趣的 `.vibe` 文件。添加到 `examples/` 并提交 PR。

---

## 许可证

MIT。见 [LICENSE](LICENSE)。

---

*VIBEX 由 VIBEX 辅助生成。*
