---
sidebar_position: 5
---

# 错误参考

## HallucinationError

```
[vibex] HallucinationError: LLM invented instructions that don't exist.
```

**原因：** LLM 生成了不存在的汇编指令。

**解决方案：** 再运行一次。不同的氛围。

---

## CloudError

```
[vibex] CloudError: HTTP 401: Unauthorized
```

**原因：** API 密钥缺失或无效。检查 `VIBEX_API_KEY`。

---

## Bad CPU Type

```
zsh: bad CPU type in executable: ./hello
```

**原因：** 在 Apple Silicon 上编译了 `x86_64` 但没有安装 Rosetta。

**解决方案：**
```bash
softwareupdate --install-rosetta --agree-to-license
```

---

## 编译成功但结果不对

这不是错误。再运行一次。

---

## 在我机器上能跑

经典问题。用 `--work` 保存汇编文件分享给同事。

他们也看不懂。
