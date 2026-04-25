---
title: SDK 示例
description: Python、Node.js 与流式输出示例。
---

# SDK 示例

下面用 OpenAI SDK 的兼容写法。Key 放环境变量，不要写进公开代码。

创建令牌入口：[https://zzmapi.zzmsgdsg.xyz/console/token](https://zzmapi.zzmsgdsg.xyz/console/token)

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
    messages=[
        {"role": "user", "content": "用三句话介绍 ZZM API。"}
    ],
)

print(completion.choices[0].message.content)
```

## Python 流式输出

```python
import os
from openai import OpenAI

client = OpenAI(
    api_key=os.environ["ZZM_API_KEY"],
    base_url="https://zzmapi.zzmsgdsg.xyz/v1",
)

stream = client.chat.completions.create(
    model="gpt-5.4-mini",
    stream=True,
    messages=[
        {"role": "user", "content": "分点说明如何排查 API 请求失败。"}
    ],
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
  messages: [
    { role: 'user', content: '写一段 80 字以内的接入说明。' }
  ]
})

console.log(completion.choices[0].message.content)
```

## Node.js 流式输出

```js
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ZZM_API_KEY,
  baseURL: 'https://zzmapi.zzmsgdsg.xyz/v1'
})

const stream = await client.chat.completions.create({
  model: 'gpt-5.4-mini',
  stream: true,
  messages: [
    { role: 'user', content: '请连续输出 5 个短句。' }
  ]
})

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content
  if (text) process.stdout.write(text)
}
```

## Responses

Codex 会走 Responses API。SDK 也可以这样测：

```js
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ZZM_API_KEY,
  baseURL: 'https://zzmapi.zzmsgdsg.xyz/v1'
})

const response = await client.responses.create({
  model: 'gpt-5.4-mini',
  input: '用一句话说明 Responses API 的用途。'
})

console.log(response.output_text)
```

Responses 不通，就先用 Chat Completions 排查。

## 图片生成

```js
import OpenAI from 'openai'

const client = new OpenAI({
  apiKey: process.env.ZZM_IMAGE_API_KEY,
  baseURL: 'https://zzmapi.zzmsgdsg.xyz/v1'
})

const image = await client.images.generate({
  model: 'gpt-image-2',
  prompt: '一个干净的蓝绿色 Z 字母应用图标，白色背景',
  size: '1024x1024',
  quality: 'low',
  n: 1
})

console.log(image.data[0])
```
