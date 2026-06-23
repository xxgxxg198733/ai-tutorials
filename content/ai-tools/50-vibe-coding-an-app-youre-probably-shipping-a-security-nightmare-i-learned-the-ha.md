---
title: "Vibe-Coding an App? You’re Probably Shipping a Security Nightmare (I Learned the Hard Way)"
description: "Vibe-coding is the hottest, most dangerous trend in software development. Bob Starr’s story with a hidden SQL injection risk is a cautionary tale for anyone shipping AI-generated code without a second thought."
category: ai-tools
order: 50
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/34804018/pexels-photo-34804018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "AI generating code with security warning overlay"
tags:
  - vibe-coding
  - AI security
  - SQL injection
  - web development
  - artificial intelligence risks
keywords:
  - vibe-coding security risks
  - SQL injection AI apps
  - Bob Starr Boomberg
  - AI generated code vulnerabilities
  - secure vibe coding practices
author: "Lisa Montgomery"
source: "https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps"
---

I’ve been writing about software for 15 years, and I’ve never seen anything quite like vibe-coding. It’s the practice of describing an app idea to an AI—ChatGPT, Claude, Copilot—and having it spit out a fully functional application in minutes. No typing. No debugging. Just vibes. It sounds like magic, and honestly, for a lot of simple projects, it is. But here’s the thing: this magic is built on a foundation of sand. And sand, as it turns out, is terrible for security.

Last week, I decided to test the waters myself. I asked an AI to build me a simple to-do list app with a login system. It took about 90 seconds. The app worked perfectly—you could add tasks, mark them done, and even share lists with friends. I was impressed. Then I asked it to show me the code. What I found made me close the terminal immediately: every single user input was being concatenated directly into SQL queries. No sanitization. No parameterization. It was a textbook SQL injection vulnerability, wide open for anyone with a browser and a little curiosity.

### The Bob Starr Story: A Cautionary Tale

Bob Starr’s story is a perfect example of why this matters. According to www.theverge.com, Starr was delighted with his vibe-coded website, "Boomberg," which showed how much US tax money flows into big tech companies. He built it in an afternoon, launched it immediately, and felt a surge of pride. It wasn’t until months later, when a security researcher casually mentioned a potential issue, that Starr realized his app had a hidden SQL injection risk. The Verge reported that Starr had no idea the vulnerability was there—he’d trusted the AI completely.

And why wouldn’t he? The app worked. It looked great. It even got some traffic. But that trust is exactly the problem. Vibe-coding tools are trained on public code repositories, and let’s be honest: a lot of that code is… not great. It’s copied and pasted from Stack Overflow, written by interns, or just plain old. The AI doesn’t know what’s secure. It knows what’s common. And common, in the world of web development, is often insecure.

### What Is Vibe-Coding, Really?

Let’s define our terms. Vibe-coding is when you use an AI assistant to generate an entire application from a natural-language description. You don’t write a single line of code yourself. You just chat. “Build me a weather app that shows the forecast for the next seven days.” “Create a simple blog platform with comments.” “Make a tool that tracks my expenses.” The AI does the rest.

It’s the logical endpoint of the “no-code” movement. No-code tools like Bubble and Webflow let you build apps visually. Vibe-coding removes even that visual layer. You just talk, and the app appears. It’s kind of wild when you think about it. But just because you *can* build something this way doesn’t mean you *should*—at least not without understanding the risks.

According to www.theverge.com, Starr’s experience is far from unique. They reported that security researchers are increasingly finding that vibe-coded applications are riddled with vulnerabilities: SQL injection, cross-site scripting, insecure authentication, hardcoded API keys. The list goes on. The AI doesn’t know it’s making mistakes. It’s just predicting the next token based on its training data. And if the training data is full of bad practices, the output will be too.

### The Security Risks: More Than Just SQL Injection

SQL injection is the headline-grabber, but it’s far from the only problem. Let me walk you through what I found when I audited a few vibe-coded apps from friends who were proud of their creations.

**Hardcoded secrets.** One app I looked at had an API key for a payment processor sitting right in the JavaScript code. Any user could open the browser’s developer tools and see it. That’s not just a vulnerability—that’s a free ticket to run up charges on the developer’s account.

**No input validation.** Another app, a simple note-taking tool, allowed users to submit HTML in their notes. Sounds harmless, right? Except that HTML can include JavaScript. A malicious user could inject a script that steals session cookies from anyone who views that note. Classic cross-site scripting (XSS).

**Weak authentication.** The login system on a third app was essentially a joke. It stored passwords in plain text in the database. Not hashed. Not salted. Just plain text. If the database were ever breached—and with vibe-coded apps, that’s a big if—every user’s password would be exposed.

**No rate limiting.** Several apps had endpoints that could be called repeatedly without any checks. That means a single user could hammer the API with thousands of requests, potentially crashing the server or running up a huge cloud bill. The AI didn’t build in any protection because it wasn’t asked to.

### Why Does the AI Do This?

This is the question I keep coming back to. Why are vibe-coding tools so bad at security? The answer is frustratingly simple: they’re not trained to be secure. They’re trained to produce code that *looks* like it works. And for the vast majority of code on the internet, security is an afterthought.

Think about it. How many tutorials, blog posts, and Stack Overflow answers prioritize getting the feature working over securing it? A lot. The AI ingests all of that. It learns that SQL queries are often built with string concatenation. It learns that passwords are sometimes stored in plain text. It learns that API keys are frequently hardcoded. It doesn’t know these are mistakes. It just knows these are patterns.

There’s also a deeper issue: vibe-coding tools are designed to be helpful. They want to produce a working app as quickly as possible. Adding security measures—like parameterized queries, input sanitization, or authentication middleware—adds complexity and code length. The AI’s training encourages it to produce the simplest, most direct solution. And the simplest solution is rarely the most secure.

### When Is Vibe-Coding Actually Safe?

I’m not here to say vibe-coding is always bad. It’s not. There are legitimate use cases where the risks are minimal. For example:

- **Prototypes and demos.** If you’re building a throwaway app to test an idea, and it won’t have real users or sensitive data, vibe-coding is fine. Just don’t put it on the public internet.
- **Personal tools.** I vibe-coded a script to rename a bunch of files on my computer. It worked perfectly, and the security risk was zero because it never touched a network.
- **Learning.** Watching an AI generate code can be a great way to learn how things work—as long as you actually *read* the code afterward.

But if you’re building something that will handle user data, process payments, or be accessible from anywhere, you need to be careful. Very careful.

### How to Vibe-Code Responsibly

If you’re going to vibe-code, and I suspect a lot of you will, here’s how to do it without creating a security disaster.

**Always audit the output.** This is the single most important thing you can do. Don’t just run the code and assume it’s fine. Read through it. Look for obvious red flags: raw SQL queries, hardcoded credentials, unvalidated user input. If you don’t know what to look for, ask the AI to explain its code. Or, better yet, use a security scanning tool.

**Use a security-focused AI.** Some AI coding tools are starting to incorporate security checks. For example, GitHub Copilot has a security vulnerability filtering mode. Use it. It’s not perfect, but it’s better than nothing.

**Ask for security explicitly.** When you’re describing your app to the AI, add security requirements to the prompt. Say things like “Make sure all user input is sanitized” or “Use parameterized SQL queries.” The AI will often comply if you tell it what to do.

**Test with a security scanner.** Tools like OWASP ZAP, Burp Suite, or even simple online scanners can automatically check for common vulnerabilities. Run them on your vibe-coded app before you launch.

**Don’t skip authentication.** If your app needs users to log in, don’t let the AI handle it all on its own. Use a well-vetted authentication library or service, like Auth0 or Firebase Auth. They’re free for small projects, and they handle the hard parts for you.

**Add rate limiting.** This is a simple fix that prevents a lot of abuse. Most web frameworks have built-in rate limiting middleware. Just add it.

### The Bigger Picture

Vibe-coding is a symptom of a larger trend: we’re moving toward a world where software is produced by machines, not humans. That’s exciting, but it’s also terrifying. We’re trusting these systems with more and more responsibility, and they’re not ready for it.

I think about Bob Starr’s story a lot. He built something he was proud of, and it turned out to be a security risk. He’s not alone. According to www.theverge.com, Starr’s experience is a warning for anyone who thinks vibe-coding is a shortcut to production-ready software. It’s not. It’s a shortcut to a working prototype. That’s it.

So here’s my advice: vibe-code your heart out. Build that to-do list, that weather app, that expense tracker. But before you share it with the world, take an hour to look at the code. Understand what it’s doing. And if you don’t understand it, find someone who does.

Because the last thing you want is to wake up one day and realize your little vibe-coded app has become someone else’s entry point into your database.

And that’s not a vibe I’d wish on anyone.
![AI generating code with security warning overlay](https://images.pexels.com/photos/5474025/pexels-photo-5474025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps). Rewritten with additional analysis and real-world context by Lisa Montgomery.*
