---
title: SDK 示例
description: Python 和 Node.js 的 OpenAI SDK 接入示例，含流式输出和图片生成。
---

# SDK 示例

用 OpenAI SDK 的兼容模式接入。Key 放环境变量，代码中不写明文 Key。

## Python

安装：

```bash
pip install openai
```

调用：

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["ZZM_API_KEY"],
    base_url="https://zzmapi.zzmsgdsg.xyz/v1",
)

completion = client.chat.completions.create(
    model="gpt-5.4-mini",
    messages=[{"role": "user", "content": "用一句话介绍 ZZM API"}],
)

print(completion.choices[0].message.content)
```

### Python 流式输出

```python
stream = client.chat.completions.create(
    model="gpt-5.4-mini",
    stream=True,
    messages=[{"role": "user", "content": "分点说明如何排查 API 请求失败"}],
)

for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)
```

## Node.js

安装：

```bash
npm install openai
```

调用：

```js
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ZZM_API_KEY,
  baseURL: 'https://zzmapi.zzmsgdsg.xyz/v1'
})

const completion = await client.chat.completions.create({
  model: 'gpt-5.4-mini',
  messages: [{ role: 'user', content: '写一段 80 字以内的接入说明' }]
})

console.log(completion.choices[0].message.content)
```

### Node.js 流式输出

```js
const stream = await client.chat.completions.create({
  model: 'gpt-5.4-mini',
  stream: true,
  messages: [{ role: 'user', content: '请连续输出 5 个短句' }]
})

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content
  if (text) process.stdout.write(text)
}
```

## Responses API

Codex 使用 Responses API：

```js
const response = await client.responses.create({
  model: 'gpt-5.4',
  input: '用一句话说明 Responses API 的用途'
})

console.log(response.output_text)
```

## 图片生成

```js
const image = await client.images.generate({
  model: 'gpt-image-2',
  prompt: '一个干净的蓝绿色 Z 字母应用图标，白色背景',
  size: '1024x1024',
  quality: 'low',
  n: 1
})

console.log(image.data[0])
```
