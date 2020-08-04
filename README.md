# Introduction to Authentication

Guided project for **Node Auth 1** Module.

## Prerequisites

- [DB Browser for SQLite](https://sqlitebrowser.org) installed.
- A rest client like [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm install` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds authentication to the API.


### Lecture Notes

Authentication (AuthN) "Who are you?"
When the web server verifies the identity of a client

Core Principles
- Require strong passwords from the user
- Properly store passwords in the database
- Prevent brute-force attacks against the database
- Create a time complexity by hashing a hash over and over again until it takes too long to generate a rainbow table

Autorization (AuthZ) "What do you want?"
When the web server determines the level of access a client has to a resource

Sessions
- client sends redentials to server
- server creates a session and sends the session ID to client
- client stores the session ID locally
- client includes session ID when calling protected routes
- server verifies session and provides or denies access