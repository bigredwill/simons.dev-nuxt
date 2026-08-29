---
date: 2025-06-02
tags:
  - code
  - work
featured: true
image: attachments/skateboard-fyi-dark-square.png
description: Creating a searchable archive of skateboarding's documented history, enabling researchers, skate nerds, and future skaters to explore decades of skateboarding culture, photography, and editorial content.
title: skateboard.fyi - June 2025 Update
---

![](../../public/attachments/banner-sk8.png)


I'm committing full time to this project. June 30 is my deadline for shipping a functioning MVP.

https://skateboard.fyi
#### The goal
To create a searchable archive of skateboarding's documented history, enabling researchers, skate nerds, and future skaters to explore decades of skateboarding culture, photography, and editorial content.
#### MVP Features
- Importing of scanned PDFs
- Full text search for Thrasher Magazine.
- Crowdsource platform for text correction and tagging.

#### Tech Stack
- **Frontend:** Next.js with TypeScript, Tailwind, React
- **Backend:** PayloadCMS, PostgreSQL
- **Infrastructure:** Self-hosted deployment using Docker, Cloudflare Zero Trust tunnels, and the Cloudflare CDN
- **Processing Pipeline:** Google Vision API for OCR and feature detection

#### Background
The initial question that prompted this project was "how can I see all of Atiba's photos?" [Atiba](https://www.instagram.com/atibaphoto/) is a photographer, who started out documenting skateboarding in the 90's. His style was forward thinking and influenced the look and direction of lifestyle and action sports documentation. He was featured on [Epicly Later'd](https://www.youtube.com/watch?v=Qw7-hCfxRV4). 

So, I googled Atiba, and he has a personal site, and an instagram, but there is no timeline of his work. How cool would that be, to see a timeline of a photographer's work?

There is a project called [Look Back Library](https://lookbacklibrary.org/) who's goal is to create a physical archive of all skateboard magazines. They also install mini-libraries in skate shops and community spaces so that kids and kids-at-heart can browse through skateboarding history. I got in touch with them in the fall, and am hoping for a future collaboration to fill holes in the digital collection.

#### Collecting Mags
Skateboard magazines are partially online. I have all the Thrasher Magazines from 1981 to 2012. Thrasher Magazine has a partial archive, and many scans are of lower quality. Low quality scans mean text is pixelated which makes OCR difficult.

I have searched through some shadow libraries, the Internet Archive, and Google, and have found a few sources for mags. Someone previously tried to create an archive site using Google's Blogger platform. It was a good attempt, but is already suffering from [link rot](https://en.wikipedia.org/wiki/Link_rot). The pdfs were uploaded to Mega or Box, and some were taken down, or the account they were uploaded to is no longer available.

I'd like to collaborate with the Look Back Library to digitally scan the rest.

#### Am I making money?
Let me get this out of the way: I do not intend to make money from skateboard.fyi (though I would take some donations for hosting costs.) Beyond being a research platform, the other goal for the project is to preserve skateboard media in a robust way. I would really like to upload the pdfs to the Internet Archive, but I have not looked too much in to that.

I'm not certain what the copyright is on old magazines. Some of the magazines are out of print. This is tbd. For now, it's just a personal project.


#### What's Next?
I'd like to get the MVP done by the end of the month. That means working end-to-end with just the Thrasher archive.