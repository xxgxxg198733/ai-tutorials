#!/usr/bin/env python3
"""Fix artifacts from humanization script."""
import re, glob

files = glob.glob('content/*/*.md')
fixed = 0

for filepath in files:
    with open(filepath, 'r') as f:
        content = f.read()
    original = content

    # Fix specific broken phrase
    content = content.replace('make a big difference tos', 'dramatically improves')

    # Remove orphan short punch lines right after headings
    orphans = [
        "Really well, actually.", "Not even close.", "It works.",
        "Big difference.", "Game changer.", "Worth every penny.",
        "Trust me on this.", "I'm not exaggerating.",
        "That's the short version.", "Mileage varies, of course.",
        "Here's why.", "Let me explain."
    ]
    for phrase in orphans:
        # Pattern: heading, newline, orphan phrase, two newlines
        pattern = r'(## [^\n]+\n)\n' + re.escape(phrase) + r'\n\n'
        content = re.sub(pattern, r'\1\n', content)
        # Also: orphan phrase as very first line after frontmatter
        if content.startswith(phrase + '\n'):
            content = content[len(phrase)+1:]

    # Fix sentences starting lowercase after period-space
    # This avoids touching markdown links, code, etc.
    def fix_lowercase(m):
        return '. ' + m.group(1).upper()
    content = re.sub(r'\. ([a-z])', fix_lowercase, content)

    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        fixed += 1

print(f'Fixed artifacts in {fixed} files')
