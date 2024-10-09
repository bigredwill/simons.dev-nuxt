---
date: 2024-09-30
featured: true
description: Hacking on OSC.LINK, a control interface for realtime interaction between a mobile or desktop browser, and the OSC protocol.
image: /attachments/osc-link-image.png
---
Hacking on [osc.link](https://osc.link).  

Github Repository: https://github.com/laubsauger/osc.link.

`~~ Project in progress ~~`

> OSC.LINK is a control interface for realtime interaction between a mobile or desktop browser, and the OSC protocol. It was designed for the rapid-prototyping of multi-user media installations, and simple extensible deployment for mobile phone interaction without the cumbersome steps of joining a network, downloading an app, or signing up for an account.


3 pieces I'm working on:

### 1. Frontend: React, Vite, Clerk, Sass
- Added Vite for easier building
- Use Clerk for authentication
- Updated UI for private sessions.

### 2. Backend: Express, socket.io, sequelize + Sqlite
- added Sqlite for dynamic backend.
- integrated with Clerk
### 3. Electron Client: Electron, electron-forge
- Added Clerk for authentication and updated UI to account for private sessions.


![](../../public/attachments/osc-link-image.png)