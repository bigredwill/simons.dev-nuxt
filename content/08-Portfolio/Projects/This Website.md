---
date: 2024-06-23
---
Built with [Quartz](https://quartz.jzhao.xyz/). It's a static site generator for [Obsidian.](https://obsidian.md/)

I have Quartz set up to publish a folder within my Obsidian vault. The vault is just a folder on my computer. The file based workflow of Obsidian makes it simple to use these notes for other things, like hosting a website. 

![](Pasted%20image%2020240623110112.png)

This page is called `This Website.md` and lives in the Projects folder.

### How I set up my site:
1. Set up a new [Quartz.js](https://quartz.jzhao.xyz/) project
2. Navigate to the project root directory.
3. Create a symbolic link from the directory in your vault to the `content` directory in your Quartz project.

For me, I use iCloud to sync/backup Obsidian, the symbolic link looks like 
```zsh
ln -s /Users/home/Library/Mobile\ Documents/iCloud~md~obsidian/Documents/vault/08-Portfolio/ content
```

4. Currently I am using Vercel to deploy to https://simons.dev. It's a one liner `vercel deploy`.