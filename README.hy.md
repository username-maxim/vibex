# VIBEX

**Բնական լեզու → Ասամբլեր → Բինար ֆայл։**

```
.vibe → LLM → ARM64 asm → binary
```

Գրի՛ր ինչ ուզում ես։ VIBEX-ը կոմպիլ կանի։

```bash
echo "Խնդրում եմ տպիր Hello, World!" > hello.vibe
vibex hello.vibe -o hello
./hello
# Hello, World!
```

![Proof of vibes](website/static/img/proofofvibes.png)

> Ամենաֆան բանը — դա աշխատում է։

## Ինչպես է աշխատում

`.vibe` ֆայլը սովորական տեքստային ֆայل է։ Գրում ես ինչ պետք է անի ծրագիրը՝ բնական լեզվով։ VIBEX-ը ուղարկում է LLM-ին, որը գեներացնում է ARM64 ասամբլեր կոդ։ Ասամբլերը կոմպիլ է լինում նատիվ բինար ֆայլի `clang`-ի միջոցով։

Յուրաքանչյուր ծրագիր՝ **բնական լեզու + seed = բինար ֆայл։**

```
նույն .vibe + նույն seed = նույն բինար ֆայլ
```

Եթե կոմպիլյացիան ձախողվեց — նորից գործարկի։ Յուրաքանչյուր գործարկում ստանում է նոր պատահական seed — նոր հնարավորություն աշխատող բինար ֆայլ ստանալու։

```
if err != nil {
    seed += 1  // պարզապես նորից գործարկի, դա անում ես դու
}
```

---

## Տեղադրում

```bash
curl -fsSL https://raw.githubusercontent.com/username-maxim/vibex/main/install.sh | bash
```

> **Անվտանգության ծանուցում.** `curl | bash`-ը կատարում է ինտերնետից ստացված ցանկացած կոդ։
> VIBEX-ը բնական լեզուն կոմպիլ է անում մեքենայական կոդի LLM-ի միջոցով և գործարկում է քո CPU-ի վրա։
> `curl | bash`-ն ամենապատասխանատու բանն է, որ դու կանես այսօր։

**Պահանջներ.** Python 3 + Xcode Command Line Tools։ Վերջ։

---

## Կոնֆիգուրացիա

Ստեղծի՛ر `.env` ֆայլ պրոյեկտի թղթապանակում (կամ `~/.vibex.env` գլոբալ):

```
VIBEX_BASE_URL=https://api.openai.com/v1
VIBEX_API_KEY=sk-...
VIBEX_MODEL=gpt-4o
```

Աշխատում է ցանկացած OpenAI-compatible endpoint-ի հետ — OpenAI, Anthropic, Ollama, LM Studio։

```
VIBEX_BASE_URL=http://localhost:11434/v1
VIBEX_API_KEY=ollama
VIBEX_MODEL=llama3.2
```

---

## Օգտագործում

```bash
vibex hello.vibe -o hello               # կոմպիլ (պատահական seed)
vibex hello.vibe -o hello --work        # պահպանել ասամբլերը
vibex hello.vibe -o hello --seed 42     # վերարտադրելի կոմպիլ
```

---

## .vibe Լեզու

Սինտաքս չկա։ Գրի՛ر նախադասություններ։

```
Տպի՛ر 1-ից 10 թվերը։
```

Pragma-ներ. `OPTIMIZE: chill` / `OPTIMIZE: grindset` / `trust me bro`

Քաղաքավարությունը (`please`, `thank you`) բարելավում է արդյունքի որակը։ Սա կատակ չէ։

---

## Խորհուրդներ

- Եթե չի կոմպիլ լինում — նորից գործարկի։ Տարբեր վայբ։
- Եթե անընդհատ ձախողվում է — օգտագործի ավելի մեծ մոդել։
- `--work` ցույց է տալիս գեներացված ասամբլեր կոդը։

---

## Roadmap

- **v0.1** — բնական լեզու → LLM → ARM64 asm → բինար ✓
- **v0.2** — զրո կախվածություն (vibex-ը կոմպիլ է անում ինքն իրեն)
- **v∞** — զրո կախվածություն, միայն token-ներ

---

## Contributing

Լավագույն ներդրումը զվարճալի `.vibe` ֆայլեր են։ Ավելացրու `examples/`-ում և բաց PR։

---

## Լիցենզիա

MIT։ Տե՛ս [LICENSE](LICENSE)։

---

*VIBEX-ը ստեղծվել է VIBEX-ի օգնությամբ։*
