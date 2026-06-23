---
title: "Vibe-Coding Is Fun Until Your App Gets Hacked — Here's What Nobody Tells You"
description: "The thrill of vibe-coding an app in minutes is real. But as one developer discovered with a hidden SQL injection flaw, the security risks are just as real. Here's how to vibe-code without wrecking your project."
category: ai-tools
order: 40
date: 2026-06-23
readingTime: 1
coverImage: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
coverAlt: "developer laptop code security checkmark"
tags:
  - vibe-coding
  - AI security
  - SQL injection
  - web development
  - AI tools
keywords:
  - vibe-coding
  - AI security
  - SQL injection
  - web development risks
  - AI code vulnerabilities
  - secure coding
  - Bob Starr
  - Boomberg
  - The Verge
author: "David Kowalski"
source: "https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps"
---

I spent last weekend vibe-coding a little tool to track my coffee consumption. It took me roughly 45 minutes. I felt like a god. A few days later, I realized I'd left the database wide open — no authentication, no input sanitization, nothing. Anyone with a browser could have dumped my entire caffeine log. Embarrassing? Absolutely. But I'm not alone.

## The Vibe-Coding Gold Rush

Vibe-coding — using AI tools like GitHub Copilot, Cursor, or Claude to generate entire applications from natural language prompts — has become the new creative outlet for non-developers and seasoned coders alike. It's intoxicatingly fast. You describe what you want, and the AI spits out code. You tweak, you test, you launch. The barrier to entry has never been lower.

Bob Starr knows this feeling well. According to www.theverge.com, Starr was delighted with his vibe-coded website "Boomberg," which showed how much US tax money is going to tech companies. He launched it online immediately after making it. It wasn't until months after the site went live that he realized there was a problem: a hidden SQL injection risk. It could have exposed his entire database.

That's the dirty secret of vibe-coding: the code looks right, but it's often wrong in ways that matter.

## The Hidden SQL Injection That Almost Was

Starr's story is a perfect illustration of the gap between "it works" and "it's secure." SQL injection is one of the oldest and most well-documented vulnerabilities in web development. It happens when an application takes user input and plugs it directly into a database query without sanitizing it. A malicious user can type something like `' OR 1=1 --` into a form field and, if the code is vulnerable, the database returns all rows instead of just the one the developer intended.

In Starr's case, the AI generated code that functionally worked — it displayed data, it looked great, it did what he wanted. But it didn't parameterize the SQL queries. That's a classic rookie mistake, and one that AI models are surprisingly prone to making. I've tested this myself: I asked Claude to generate a simple login system, and it produced code with raw SQL concatenation. When I asked it to fix it, it did — but only after I explicitly prompted for security.

Here's the thing: AI models are trained on vast amounts of public code, and a lot of that code is bad. They learn patterns, not principles. They know that a login form usually checks a username and password against a database. They don't inherently know that you should use prepared statements or an ORM to prevent injection. It's not that they can't do it — it's that they default to the simplest path.

## Why Vibe-Coded Apps Are a Security Nightmare

Let's be honest: most people who vibe-code aren't security experts. They're entrepreneurs, designers, hobbyists, and people who just want to ship something fast. And that's fine. But the moment you put something on the internet, you inherit a responsibility to protect your users' data — even if that data is just a list of tax expenditures.

Here are the most common security issues I've seen in vibe-coded apps:

- **SQL injection** (as above) — still the king of vulnerabilities.
- **Hardcoded API keys** — I once saw a vibe-coded weather app that had the developer's AWS credentials in plain text in the JavaScript file. Anyone who viewed the page source could have spun up a fleet of servers on their dime.
- **No authentication** — many vibe-coded apps assume the user is the only person who will ever access the app. That's rarely true.
- **Cross-site scripting (XSS)** — AI loves to generate `innerHTML` assignments without escaping user input.
- **Insecure direct object references** — like letting users access any database record by changing a number in the URL.

According to www.theverge.com, Starr's SQL injection risk was a symptom of a deeper problem: the AI didn't understand the security implications of the code it wrote. It just knew how to make the code compile and run.

## The Speed vs. Security Tradeoff

I get it. You want to ship. You're excited. You've got an idea that could change the world, or at least your morning routine. The last thing you want to do is spend three hours reading OWASP guidelines. But here's the uncomfortable truth: vibe-coding without security awareness is like building a house with a hammer you found on the street — it might stand, but it'll fall over in a strong wind.

I'm not saying you need to become a security expert. I'm saying you need to add one more step to your vibe-coding workflow: a security review. And no, asking the AI to "make this secure" isn't enough. I tried that. The AI added a captcha and called it a day. It didn't fix the underlying SQL injection.

## How to Vibe-Code Securely (Without Killing the Vibe)

Look, I still think vibe-coding is incredible. It democratizes software creation in a way we haven't seen since the rise of WordPress. But we need to treat it like power tools — useful, but dangerous if mishandled.

Here's my practical advice:

### 1. Assume Your AI-Generated Code Is Vulnerable

Start with the mindset that the AI wrote the first draft, not the final version. Every piece of code that handles user input, database access, or authentication needs a second look. Run it through a static analysis tool like Semgrep or SonarQube. These tools can catch SQL injection, hardcoded secrets, and XSS in seconds.

### 2. Use an ORM or a Query Builder

If you're vibe-coding a web app, explicitly ask the AI to use an ORM (like Prisma for Node.js, SQLAlchemy for Python, or Entity Framework for C#). ORMs automatically parameterize queries, which eliminates SQL injection. I tested this: when I prompted "use Prisma to query the database," the AI generated safe code. When I left it open, it used raw SQL.

### 3. Never Commit Secrets to Code

Use environment variables. Use a .env file. Never, ever hardcode API keys, database passwords, or tokens. If your vibe-coded app has a `config.js` file with secrets in it, you're one GitHub push away from disaster. I use a simple rule: if I can see the secret in the code, anyone can.

### 4. Add Authentication Early

Even if your app is a single-user tool, add a basic login. It's easy to vibe-code a simple session-based auth or use a service like Clerk or Auth0. The AI can handle this — just prompt it specifically. "Add authentication using JWT tokens" works better than "make this secure."

### 5. Test for the Obvious Stuff

Try to break your own app. Type `' OR 1=1 --` into every input field. Try to guess URLs like `/admin` or `/users/1`. Upload a file with a .php extension. These are the attacks that will happen, and they're the ones AI code is worst at defending against.

### 6. Get a Second Pair of Eyes

If you're not a developer, ask a developer friend to look at your code for five minutes. They'll spot things you (and the AI) missed. I do this with every vibe-coded project, and it's saved me from shipping at least three vulnerabilities.

## The Bigger Picture: AI and the Future of Secure Coding

This isn't just about individual apps. It's about the entire ecosystem of AI-generated software. As more people vibe-code more apps, the attack surface grows. We're going to see a wave of vulnerabilities in small, hobbyist projects that inadvertently expose sensitive data. Some of those projects will be used by real people. Some will be used by attackers.

The tech industry needs to take this seriously. AI coding assistants should include security linters by default. They should flag potential vulnerabilities as they generate code. They should refuse to hardcode secrets. Some of this is happening — GitHub Copilot now has a security vulnerability filtering feature — but it's not enough.

In the meantime, the responsibility falls on us, the vibe-coders. We can't just trust the AI. We have to be skeptical. We have to test. We have to think about what happens when someone tries to break our creation.

## Final Thoughts

I'm still going to vibe-code. I'm going to keep building stupid little tools that make my life marginally better. But I'm also going to keep that security checklist taped to my monitor. Because the worst thing that can happen isn't that my coffee tracker gets hacked — it's that I hurt someone else by being careless.

Bob Starr got lucky. His SQL injection risk was discovered before any real damage was done. But the next person might not be so fortunate. The question is: will you be ready?

![A developer looking at a laptop with code on the screen, a coffee cup nearby, and a green 'secure' checkmark overlay](IMAGE_PLACEHOLDER)

Starr's story is a reminder that vibe-coding isn't just about speed — it's about responsibility. And as the tools get better, our standards have to get better too. Otherwise, we're just building castles on sand.
![developer laptop code security checkmark](https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)


---

*Originally reported by [www.theverge.com](https://www.theverge.com/ai-artificial-intelligence/950844/vibe-coding-security-risks-apps). Rewritten with additional analysis and real-world context by David Kowalski.*
