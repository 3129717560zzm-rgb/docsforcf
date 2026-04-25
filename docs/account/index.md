---
title: 账号与社群
description: 控制台入口、创建令牌、充值、QQ群、微信群和售后说明。
---

# 账号与社群

账号、令牌、充值、社群入口都在这里。活动、倍率、额度看控制台和群公告。

## 账号入口

<div class="zzm-link-list">
  <a href="https://zzmapi.zzmsgdsg.xyz">控制台首页</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/login">登录控制台</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/token">创建令牌</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/playground">操练场</a>
  <a href="https://zzmapi.zzmsgdsg.xyz/console/topup">充值与余额</a>
  <a href="https://qm.qq.com/q/wKACZYaaTS">zzmapi 付费群</a>
</div>

## 创建令牌

进入 [创建令牌](https://zzmapi.zzmsgdsg.xyz/console/token)，每个软件单独建 Key。完整 Key 不要发给别人，提问只给前后几位。

创建后先到 [操练场](https://zzmapi.zzmsgdsg.xyz/console/playground) 测试模型，再配置第三方软件。

## 充值与余额

进入 [充值页面](https://zzmapi.zzmsgdsg.xyz/console/topup)，按控制台提示充值。充值后看余额，再用短请求测一次。

余额没变，带这些信息联系售后：

- 账号 ID 或登录邮箱。
- 支付时间和金额。
- 控制台订单截图。
- 不要发送完整 API Key。

## 调用日志

请求失败先看控制台调用日志。日志能看到：

- 请求是否到达 ZZM API。
- 使用了哪个模型。
- 是否余额不足或模型无权限。
- 上游是否返回错误。

## 邀请返利

控制台有邀请链接就用自己的专属链接。返利比例、到账时间和抵扣范围看控制台与群公告。

## 学生折扣

学生认证、长期折扣、活动福利看群公告。这里不写固定折扣，避免过期。

## 售后群

QQ群入口：[zzmapi 付费群](https://qm.qq.com/q/wKACZYaaTS)

<div class="zzm-qr-wrap">
  <div>
    <h2>微信群二维码</h2>
    <p>扫码加入微信群。提问时请带软件名称、模型名、报错截图和控制台日志时间，不要发送完整 API Key。</p>
  </div>
  <img class="zzm-qr" src="/wechat-group.png" alt="zzmapi 微信群二维码" />
</div>

## 提问时请带截图

带软件名称、模型名、报错截图、控制台调用日志时间。完整 API Key 不要发。
