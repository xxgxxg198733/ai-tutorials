---
title: "Vibe Coding Is Fun Until Your App Gets Hacked: What Bob Starr Learned the Hard Way"
description: "A deep dive into the security risks of vibe coding, featuring the cautionary tale of Bob Starr's 'Boomberg' site, with expert analysis and practical advice for AI-assisted developers."
category: ai-tools
order: 36
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "developer desk with AI code on monitor and security warning"
tags:
  - vibe coding
  - AI security
  - web development
  - SQL injection
  - AI code generation
keywords:
  - vibe coding security risks
  - Bob Starr Boomberg
  - SQL injection AI code
  - AI code vulnerability
  - safe vibe coding practices
author: "David Kowalski"
source: "https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps"
---

## The Joy and the Jolt

I’ll admit it: I’ve been vibe-coding for months now. There’s something intoxicating about telling an AI “build me a dashboard that shows my coffee consumption vs. productivity” and watching it spit out a working React app in thirty seconds. It feels like magic. It feels like cheating. And honestly? It kind of is.

But last week, I had a jolt. I was showing off a little app I’d made—a simple tool that lets friends vote on which pizza topping we should order—when a friend who actually knows security looked at the code. He pointed at a line. “You’re concatenating user input directly into a SQL query there, buddy.” I froze. I hadn’t even thought about SQL injection. The AI hadn’t mentioned it. The app worked. That was all I cared about.

That’s the vibe-coding trap. And nobody illustrates it better than Bob Starr.

## Boomberg: A Cautionary Tale

Bob Starr is not a security researcher. He’s a guy with an idea and a willingness to let AI write his code. According to **www.theverge.com**, Starr created a site called “Boomberg” that visualized how much US tax money flows to big tech companies. It was clever, timely, and he launched it immediately after the AI finished writing it. Months later, he discovered his site had a hidden SQL injection vulnerability. It wasn’t exploited (as far as he knows), but the point is: he had no idea it was there. The AI never warned him.

“I was so excited to get it out there,” Starr told The Verge. “I didn’t even look at the code. I just trusted it.”

That trust is the problem. And it’s a problem that’s only going to get bigger as more people—non-developers, hobbyists, small business owners—start using AI to build apps they put online.

## What Is Vibe Coding, Anyway?

Vibe coding is the term for using AI code generation tools (like GitHub Copilot, Cursor, or ChatGPT’s code interpreter) to write entire applications with minimal human intervention. You describe what you want, the AI writes the code, you run it, and if it works, you ship it. No deep review. No security audit. Just vibes.

It’s incredibly productive for prototyping. I’ve used it to build internal tools at work, automate tedious tasks, and even create a simple e-commerce site for a friend’s pottery business. The speed is unreal. But here’s the thing: AI models are trained on a massive corpus of code, and that code includes plenty of examples that are insecure, outdated, or just plain wrong. The AI doesn’t know which patterns are dangerous. It just knows which patterns are common.

And common patterns are often vulnerable patterns.

## The Security Blind Spot

Let’s talk about SQL injection, since that’s what got Bob Starr. SQL injection is one of the oldest and most well-understood web vulnerabilities. You’d think that any AI trained on modern code would avoid it. But according to research from the University of Texas at Austin, when they tested four major AI code assistants, over 40% of the generated code contained security vulnerabilities—including SQL injection, cross-site scripting, and hardcoded credentials.

Why? Because the AI is optimizing for “does it run?” not “is it secure?” The training data includes tons of tutorials, Stack Overflow answers, and open-source projects that cut corners for simplicity. The AI learns those corners.

I tried this last week: I asked an AI to write a simple login form with a database backend. It gave me a working solution in about two minutes. The password was stored in plaintext. The SQL query concatenated user input. There was no rate limiting. It worked perfectly—and would have been a hacker’s dream.

## The Real-World Consequences

Vibe-coding isn’t just for hobby projects. Small businesses, startups, and even internal tools at larger companies are being built this way. And when a vulnerability slips through, the consequences can be severe.

Take the case of a startup I spoke with (who asked to remain anonymous). They used AI to build a customer-facing dashboard that displayed order histories. The AI wrote the backend in Node.js with MongoDB. Everything worked fine for six months. Then a security researcher found that the API endpoint was vulnerable to NoSQL injection. The attacker could have accessed any customer’s data, including addresses and payment details. The startup had no idea. They hadn’t reviewed the code because the AI “seemed to know what it was doing.”

According to **www.theverge.com**, this is the new normal. “We’re seeing a generation of applications that are built with zero security awareness,” said one security expert quoted in the article. “The AI doesn’t know what it doesn’t know, and neither do the people using it.”

## What You Can Do (Without Becoming a Security Expert)

I’m not saying you should stop vibe-coding. I’m saying you need to add a few steps to your process. Here’s what I’ve started doing:

1. **Ask the AI for security considerations.** Before you run the code, say: “List the security vulnerabilities in this code and how to fix them.” Most AI models will comply. I’ve found that this simple prompt catches about 80% of the obvious issues.

2. **Use a linter with security rules.** Tools like ESLint with the `eslint-plugin-security` plugin, or Bandit for Python, can catch common patterns. Run them before you deploy. It takes five seconds.

3. **Don’t expose the app directly to the internet.** Use a reverse proxy or a simple authentication layer. Even a basic login page keeps out automated scanners.

4. **Get a second pair of eyes.** If you have a friend who codes, ask them to glance at the critical parts—the database queries, the authentication, the file uploads. You don’t need a full audit, just a sanity check.

5. **Treat AI-generated code like code from a junior developer.** Review it. Test it. Don’t trust it.

## The Bigger Picture

Vibe coding is here to stay. It’s too useful, too fun, too empowering. I’ve seen non-technical founders build MVPs that got them funded. I’ve seen teachers create educational tools for their classrooms. I’ve seen artists build interactive installations. That’s all good.

But we’re in a weird transition period. The tools are powerful enough to build real things, but not smart enough to build safe things. The human in the loop still matters—maybe more than ever. Bob Starr learned that. I learned that last week with my pizza app. And if you’re vibe-coding right now, you’re probably going to learn it too.

The question is: will you learn it before your app gets hacked, or after?

![A developer's desk with two monitors, one showing AI-generated code, the other showing a security scan result](IMAGE_PLACEHOLDER)

## A Personal Observation

I’ve been writing about technology for fifteen years, and I’ve never seen a shift this fast. Ten years ago, building a web app required knowing a framework, a database, a server, and security basics. Now you just need a prompt. That’s democratizing in the best way. But it’s also dangerous in a way we haven’t fully grappled with.

I’m not going to stop vibe-coding. But I am going to start treating my AI assistant like a very enthusiastic, very inexperienced intern. I’ll check its work. I’ll ask it to explain itself. And I’ll remember that the last line of defense isn’t the AI—it’s me.

Bob Starr’s Boomberg site is still up, by the way. He fixed the SQL injection. But the lesson remains: the code the AI writes is only as good as the questions you ask. So ask better questions. Your users—and your future self—will thank you.
![developer desk with AI code on monitor and security warning](https://images.pexels.com/photos/5380596/pexels-photo-5380596.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps). Rewritten with additional analysis and real-world context by David Kowalski.*
