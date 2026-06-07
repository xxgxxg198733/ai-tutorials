#!/usr/bin/env python3
"""
Humanize AI-generated markdown articles.
Applies transformations to break AI detection patterns while preserving content meaning.
"""

import re
import random
import sys
import os

# ── Pattern Replacements ──────────────────────────────────────────

AI_PHRASES = {
    # Formal → natural
    "it is important to note that": random.choice([
        "here's the thing:", "worth knowing:", "something to keep in mind:",
        "important:", "one thing I've noticed:",
    ]),
    "it is worth noting that": random.choice([
        "also worth mentioning:", "I should add:",
        "one more thing:", "by the way:",
    ]),
    "in today's digital landscape": random.choice([
        "these days", "right now", "in 2026", "currently",
    ]),
    "in today's fast-paced world": random.choice([
        "these days", "nowadays", "",
    ]),
    "in the rapidly evolving": random.choice([
        "in the fast-changing", "as this space evolves,", "",
    ]),
    "delve into": random.choice([
        "dig into", "explore", "look at", "get into",
    ]),
    "unlock the power of": random.choice([
        "get more from", "make the most of", "tap into", "use effectively",
    ]),
    "revolutionize": random.choice([
        "change", "transform", "shake up", "improve",
    ]),
    "transformative technology": random.choice([
        "powerful tool", "useful tech", "game-changer",
    ]),
    "harness the power of": random.choice([
        "use", "leverage", "work with", "take advantage of",
    ]),
    "has revolutionized": random.choice([
        "has changed", "has transformed", "has shaken up",
    ]),
    "boost your productivity": random.choice([
        "get more done", "save time", "work faster",
    ]),
    "streamline your workflow": random.choice([
        "smooth out your workflow", "cut the friction", "make work flow better",
    ]),
    "dramatically improve": random.choice([
        "seriously improve", "make a big difference to", "noticeably boost",
    ]),
    "comprehensive guide": random.choice([
        "complete walkthrough", "full guide", "hands-on guide", "in-depth look",
    ]),
    "as we have explored": random.choice([
        "so there you have it", "that's the overview", "",
    ]),
    "furthermore": random.choice([
        "also", "plus", "on top of that", "and",
    ]),
    "moreover": random.choice([
        "also", "what's more", "beyond that",
    ]),
    "additionally": random.choice([
        "also", "plus", "one more thing:",
    ]),
    "consequently": random.choice([
        "so", "as a result", "that means",
    ]),
    "nevertheless": random.choice([
        "still", "even so", "that said",
    ]),
    "in conclusion": random.choice([
        "to wrap up", "bottom line:", "so where does that leave us?",
    ]),
    "it is essential to": random.choice([
        "you need to", "make sure you", "don't skip",
    ]),
    "it is crucial to": random.choice([
        "you really should", "it's critical to", "don't overlook",
    ]),
    "a wide range of": random.choice([
        "many", "lots of", "a variety of", "all kinds of",
    ]),
    "in order to": random.choice([
        "to", "so you can",
    ]),
    "due to the fact that": random.choice([
        "because", "since",
    ]),
    "in the event that": random.choice([
        "if", "when",
    ]),
    "has the ability to": random.choice([
        "can", "is able to",
    ]),
    "the vast majority of": random.choice([
        "most", "the great majority of",
    ]),
    "a significant number of": random.choice([
        "many", "a lot of",
    ]),
    "in the context of": random.choice([
        "for", "with", "when it comes to",
    ]),
    "it has become increasingly": random.choice([
        "it's gotten", "it's become",
    ]),
    "the landscape of": random.choice([
        "the world of", "the field of", "",
    ]),
    "exponentially": random.choice([
        "rapidly", "fast", "at an incredible pace",
    ]),
    "paradigm shift": random.choice([
        "big change", "shift", "transformation",
    ]),
}

CONTRACTION_MAP = [
    (r"\bit is\b", "it's"),
    (r"\bthat is\b", "that's"),
    (r"\bdo not\b", "don't"),
    (r"\bdoes not\b", "doesn't"),
    (r"\bcannot\b", "can't"),
    (r"\bwill not\b", "won't"),
    (r"\bhave not\b", "haven't"),
    (r"\bhas not\b", "hasn't"),
    (r"\byou are\b", "you're"),
    (r"\bwe are\b", "we're"),
    (r"\bthey are\b", "they're"),
    (r"\bthere is\b", "there's"),
    (r"\bwhat is\b", "what's"),
    (r"\bwho is\b", "who's"),
    (r"\bI am\b", "I'm"),
    (r"\bI have\b", "I've"),
    (r"\byou have\b", "you've"),
    (r"\bwe have\b", "we've"),
    (r"\bthey have\b", "they've"),
    (r"\bwould not\b", "wouldn't"),
    (r"\bshould not\b", "shouldn't"),
    (r"\bcould not\b", "couldn't"),
    (r"\bdid not\b", "didn't"),
    (r"\bwas not\b", "wasn't"),
    (r"\bwere not\b", "weren't"),
    (r"\bare not\b", "aren't"),
    (r"\bis not\b", "isn't"),
]

# ── Personal voice insertions ──────────────────────────────────────

PERSONAL_PHRASES = [
    "I've found that",
    "In my experience,",
    "What surprised me was",
    "I'll be honest:",
    "Here's what I've noticed:",
    "From what I've seen,",
    "I've been using this for a while now, and",
    "Something I wish I'd known earlier:",
    "Here's the thing:",
    "I learned this the hard way:",
    "My take:",
    "Honestly,",
    "The way I see it,",
    "After testing this extensively,",
    "I was skeptical at first, but",
    "Here's a real example from my own use:",
    "Let me give you a concrete example.",
    "I remember the first time I tried this—",
    "A friend asked me about this recently, and",
]

RHETORICAL_QUESTIONS = [
    "Sounds simple, right?",
    "But does it actually work that way?",
    "Is it worth the effort?",
    "So what does this mean in practice?",
    "Why does this matter?",
    "Sound familiar?",
    "But is that the whole story?",
    "What's the catch?",
    "Does this live up to the hype?",
    "So where does that leave us?",
    "Too good to be true?",
    "But how do you actually use this?",
]

SHORT_PUNCH_LINES = [
    "It works.",
    "Really well, actually.",
    "Not even close.",
    "Here's why.",
    "Let me explain.",
    "Big difference.",
    "Game changer.",
    "Worth every penny.",
    "Trust me on this.",
    "I'm not exaggerating.",
    "That's the short version.",
    "Mileage varies, of course.",
]

SECTION_TRANSITIONS = [
    "But here's where things get interesting.",
    "That's the theory. In practice?",
    "Now for the part that actually matters.",
    "Let's get into the details.",
    "Here's where most people get it wrong.",
    "So how do you actually use this thing?",
    "That's the big picture. Now let's zoom in.",
    "Enough context. Let's talk specifics.",
    "This is where the magic happens.",
    "But there's a catch.",
]

# ── Key Takeaways alternatives ──────────────────────────────────────

TAKEAWAY_ALTERNATIVES = [
    "\n## What I'd Tell My Past Self\n\n",
    "\n## The Short Version\n\n",
    "\n## Bottom Line\n\n",
    "\n## So, Should You Try It?\n\n",
    "\n## My Honest Take\n\n",
    "\n## What Actually Matters\n\n",
    "\n## If You Only Remember One Thing\n\n",
    "\n## The TL;DR\n\n",
]

def humanize_text(content):
    """Apply humanization transformations to content."""

    # 1. Replace AI phrases
    for ai_phrase, replacement in AI_PHRASES.items():
        pattern = re.compile(re.escape(ai_phrase), re.IGNORECASE)
        if pattern.search(content):
            # Only replace first occurrence
            content = pattern.sub(replacement, content, count=1)

    # 2. Apply contractions (selectively, about 40% of opportunities)
    for pattern_str, replacement in CONTRACTION_MAP:
        p = re.compile(pattern_str, re.IGNORECASE)
        matches = list(p.finditer(content))
        for match in matches:
            if random.random() < 0.4:
                content = content[:match.start()] + replacement + content[match.end():]

    # 3. Inject personal phrases at paragraph starts (about 25% of paragraphs)
    paragraphs = content.split('\n\n')
    new_paragraphs = []
    for i, para in enumerate(paragraphs):
        if (para.startswith('##') or para.startswith('#') or
            para.startswith('!') or para.startswith('---') or
            len(para.strip()) < 50):
            new_paragraphs.append(para)
            continue

        # 25% chance to prepend a personal phrase to body paragraphs
        if random.random() < 0.25 and i > 3:
            phrase = random.choice(PERSONAL_PHRASES)
            # Add phrase at the start if it doesn't already start with something similar
            if not any(para.strip().startswith(p.split()[0]) for p in PERSONAL_PHRASES):
                para = phrase + " " + para[0].lower() + para[1:]

        new_paragraphs.append(para)

    content = '\n\n'.join(new_paragraphs)

    # 4. Add 1-2 rhetorical questions at section boundaries
    sections = re.split(r'\n(## .+)\n', content)
    if len(sections) > 3:
        # sections[0] = before first h2, sections[1] = first h2 heading, etc.
        new_sections = [sections[0]]
        for j in range(1, len(sections), 2):
            heading = sections[j]
            body = sections[j+1] if j+1 < len(sections) else ""

            # Add rhetorical question at end of section (30% chance)
            if random.random() < 0.3 and len(body) > 200:
                q = random.choice(RHETORICAL_QUESTIONS)
                body = body.rstrip() + f"\n\n{q}"

            # Add short punch line after heading (20% chance)
            if random.random() < 0.2:
                punch = random.choice(SHORT_PUNCH_LINES)
                body = punch + "\n\n" + body.lstrip()

            new_sections.append(heading)
            new_sections.append(body)

        content = '\n'.join(new_sections)

    # 5. Replace "Key Takeaways" heading with variety
    takeaways_patterns = [
        r'\n## Key Takeaways\n',
        r'\n### Key Takeaways\n',
        r'\n## Key Takeaways:\n',
    ]
    for pattern_str in takeaways_patterns:
        if re.search(pattern_str, content):
            replacement = random.choice(TAKEAWAY_ALTERNATIVES)
            content = re.sub(pattern_str, replacement, content)

    # 6. Replace "Key Takeaways" list items — add personal commentary
    # Find bullet lists under takeaways-like headings
    lines = content.split('\n')
    in_takeaways = False
    new_lines = []
    for line in lines:
        if any(alt.strip().replace('#', '').strip().lower() in line.lower()
               for alt in TAKEAWAY_ALTERNATIVES):
            in_takeaways = True
        elif line.startswith('##') and in_takeaways:
            in_takeaways = False

        if in_takeaways and line.strip().startswith('- '):
            # 50% chance to add personal spin to takeaway item
            if random.random() < 0.5:
                spins = [
                    " (this one actually surprised me)",
                    " — game changer in my workflow",
                    " — your experience may differ, but this worked for me",
                    " — took me a while to figure this out",
                    " — wish I'd known this six months ago",
                ]
                line = line.rstrip() + random.choice(spins)

        new_lines.append(line)

    content = '\n'.join(new_lines)

    return content


def process_file(filepath):
    """Read, humanize, and write a markdown file."""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split frontmatter and body
    parts = content.split('---', 2)
    if len(parts) < 3:
        print(f"  SKIP (no frontmatter): {filepath}")
        return

    frontmatter = parts[1]
    body = parts[2]

    # Humanize only the body
    humanized_body = humanize_text(body)

    # Reassemble
    new_content = '---' + frontmatter + '---' + humanized_body

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"  ✓ {os.path.basename(filepath)}")


def main():
    content_dir = sys.argv[1] if len(sys.argv) > 1 else 'content'

    random.seed(42)  # Reproducible but varied

    for root, dirs, files in os.walk(content_dir):
        for file in sorted(files):
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                process_file(filepath)


if __name__ == '__main__':
    main()
