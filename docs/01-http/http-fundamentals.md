<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [HTTP Fundamentals](#http-fundamentals)
  - [What is HTTP?](#what-is-http)
  - [Why Does HTTP Exist?](#why-does-http-exist)
  - [Brief History of HTTP](#brief-history-of-http)
    - [HTTP/0.9 (1991)](#http09-1991)
    - [HTTP/1.0 (1996)](#http10-1996)
    - [HTTP/1.1 (1997)](#http11-1997)
    - [HTTP/2 (2015)](#http2-2015)
    - [HTTP/3 (2022)](#http3-2022)
  - [Client-Server Architecture](#client-server-architecture)
    - [Client](#client)
    - [Server](#server)
  - [Visual Overview](#visual-overview)
  - [Stateless Communication](#stateless-communication)
    - [Why is Statelessness Important?](#why-is-statelessness-important)
  - [Request-Response Model](#request-response-model)
    - [Step 1: Client Sends Request](#step-1-client-sends-request)
    - [Step 2: Server Processes Request](#step-2-server-processes-request)
    - [Step 3: Server Sends Response](#step-3-server-sends-response)
  - [Request Lifecycle](#request-lifecycle)
  - [Real-World Example](#real-world-example)
    - [Browser Request](#browser-request)
    - [Server Response](#server-response)
  - [Key Takeaways](#key-takeaways)
  - [Backend Engineering Relevance](#backend-engineering-relevance)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# HTTP Fundamentals

## What is HTTP?

HTTP stands for **HyperText Transfer Protocol**.

It is the communication protocol used by clients and servers to exchange information over the internet.

Think of HTTP as a language that allows two computers to understand each other.

Examples:

- Browser requesting a webpage
- Mobile app requesting user data
- Frontend requesting data from an API
- Payment gateway communicating with a backend service

Without HTTP, web applications could not communicate.

---

## Why Does HTTP Exist?

Imagine opening a browser and typing:

```text
https://example.com
```

Your browser needs a standard way to ask:

> "Please send me the homepage."

The server also needs a standard way to respond.

HTTP provides these rules.

It defines:

- How requests are sent
- How responses are returned
- How errors are communicated
- How resources are identified

---

## Brief History of HTTP

### HTTP/0.9 (1991)

The first version.

Features:

- Only GET requests
- No headers
- Only HTML documents

Example:

```text
GET /index.html
```

Very limited.

---

### HTTP/1.0 (1996)

Introduced:

- Headers
- Status codes
- Multiple content types

Example:

```http
GET / HTTP/1.0
```

Each request opened a new TCP connection.

---

### HTTP/1.1 (1997)

Major improvements:

- Persistent connections
- Host header
- Better caching
- Chunked transfers

This version powered the web for decades.

Example:

```http
GET / HTTP/1.1
Host: example.com
```

---

### HTTP/2 (2015)

Designed for performance.

Features:

- Multiplexing
- Header compression
- Server push (largely deprecated in modern browsers)
- Binary protocol

Benefits:

- Faster page loading
- Reduced latency

---

### HTTP/3 (2022)

Built on QUIC instead of TCP.

Benefits:

- Faster connection setup
- Better reliability
- Improved performance on unstable networks

Used by:

- Modern browsers
- Large-scale web applications
- CDNs

---

## Client-Server Architecture

HTTP follows a Client-Server model.

### Client

A client initiates requests.

Examples:

- Browser
- Mobile app
- CLI tool
- Frontend application

Examples:

```text
Chrome
Firefox
Postman
curl
React App
```

---

### Server

A server receives requests and returns responses.

Examples:

```text
Node.js Server
Express API
Django Backend
NestJS Application
Nginx
Apache
```

---

## Visual Overview

```text
[ Client ] --HTTP Request--> [ Server ]

[ Client ] <--HTTP Response-- [ Server ]
```

The client always starts the conversation

---

## Stateless Communication

HTTP is stateless.

This means:

Each request is independent.

The server does not automatically remember previous requests.

Example:

Request #1:

```http
GET /profile
```

Request #2:

```http
GET /settings
```

The server treats them as separate requests.

---

### Why is Statelessness Important?

Benefits:

- Simpler architecture
- Better scalability
- Easier load balancing

Challenges:

- User authentication
- Shopping carts
- User sessions

Solutions:

- Cookies
- Sessions
- JWT Tokens
- Database persistence

---

## Request-Response Model

HTTP works through requests and responses.

### Step 1: Client Sends Request

Example:

```http
GET /users/1 HTTP/1.1
Host: api.example.com
```

The request contains:

- Method
- URL
- Headers
- Optional body

---

### Step 2: Server Processes Request

Server:

- Receives request
- Validates data
- Executes business logic
- Queries database if necessary

---

### Step 3: Server Sends Response

Example:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": 1,
    "name": "John"
}
```

---

## Request Lifecycle

```text
User clicks button
        |
        v
Browser creates HTTP request
        |
        v
Request sent across network
        |
        v
Server receives request
        |
        v
Application processes request
        |
        v
Database queried (optional)
        |
        v
Response generated
        |
        v
Response sent back
        |
        v
Browser displays result
```

This cycle happens millions of times every second across the internet.

---

## Real-World Example

You visit:

```text
https://github.com
```

### Browser Request

```http
GET / HTTP/1.1
Host: github.com
```

### Server Response

```http
HTTP/1.1 200 OK
Content-Type: text/html
```

The browser receives HTML, CSS, JavaScript, and images, then renders the page.

---

## Key Takeaways

- HTTP stands for HyperText Transfer Protocol.
- HTTP is the foundation of web communication.
- HTTP uses a Client-Server architecture.
- HTTP is stateless.
- Communication happens through requests and responses.
- HTTP evolved from 0.9 → 1.0 → 1.1 → 2 → 3.
- Every API request ultimately follows the HTTP request-response lifecycle.

---

## Backend Engineering Relevance

As a Backend Engineer, HTTP is one of the most important concepts to master because:

- REST APIs are built on HTTP.
- GraphQL runs over HTTP.
- Authentication uses HTTP headers and cookies.
- Microservices communicate using HTTP.
- API gateways process HTTP traffic.
- Load balancers route HTTP requests.

Understanding HTTP deeply is a prerequisite for mastering backend engineering.

