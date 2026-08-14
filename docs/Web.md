# Web

## HTTP

### HTTP 协议格式

#### Client 请求

HTTP/1.1 强制要求携带 `Host` 头。

```http
GET / HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5)
Accept: */*
```

#### Server 响应

头信息 + 空行(\r\n) + 响应体（数据）

```http
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 137582
Cache-Control: max-age=3600
Last-Modified: Wed, 05 Aug 1996 15:55:28 GMT
Server: Apache/2.4.54

<html>
<body>Hello World</body>
</html>
```

|                |                |
| :------------- | :------------- |
| Content-Length | 响应体的字节数 |
| Cache-Control  | 控制缓存策略   |

### 请求方式

| 方式      | 描述                             | 关键特性                 |
| :-------- | :------------------------------- | :----------------------- |
| `GET`     | 请求指定的资源                   | 安全、幂等（只读）       |
| `POST`    | 向服务器提交数据                 | 非幂等（常用于**新增**） |
| `HEAD`    | 仅请求响应头部，不获取响应体     | 安全、幂等               |
| `DELETE`  | 删除指定的资源                   | 幂等（成功则无资源）     |
| `PUT`     | 整体替换或创建指定资源           | **幂等**（全量更新）     |
| `PATCH`   | 对资源进行**部分**修改           | **非幂等**（局部更新）   |
| `OPTIONS` | 查询服务器支持的通信选项         | 常用于 CORS 预检请求     |
| `CONNECT` | 建立隧道连接（如 HTTPS 代理）    | 用于代理                 |
| `TRACE`   | 回显服务器收到的请求（回环测试） | 常用于调试               |

## Cookie

HTTP 是无状态协议，Cookie 用于在客户端持久化存储少量信息，以实现会话追踪。

- **传递方式**：
  - 服务器通过响应头 `Set-Cookie: name=value; Path=/; HttpOnly` 下发。
  - 浏览器后续请求自动通过请求头 `Cookie: name=value` 回传。
- **常用属性**：
  - `Domain` / `Path`：控制作用域。
  - `Expires` / `Max-Age`：控制有效期。
  - `Secure`：仅允许 HTTPS 传输。
  - `HttpOnly`：禁止 JavaScript 访问（防 XSS）。
  - `SameSite`：防止 CSRF 攻击（Strict / Lax / None）。
