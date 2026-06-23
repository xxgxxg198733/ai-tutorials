/**
 * 20 fake American author names.
 * One randomly assigned per article to simulate human authorship.
 */

const AUTHORS = [
  "James Whitfield",
  "Sarah Chen-Morrison",
  "Michael Reeves",
  "Emily Hartwell",
  "David Kowalski",
  "Jennifer O'Donnell",
  "Robert Chang",
  "Lisa Montgomery",
  "Thomas Blackwell",
  "Rachel Feinberg",
  "Christopher Ames",
  "Nicole Priestley",
  "Andrew Delgado",
  "Megan Carver",
  "Daniel Hirsch",
  "Laura Stephenson",
  "Kevin Nakamura",
  "Amanda Fletcher",
  "Brian Holloway",
  "Jessica Drummond",
];

let _index = 0;

export function nextAuthor(): string {
  const author = AUTHORS[_index % AUTHORS.length];
  _index++;
  return author;
}

/** For frontmatter: `author: "Name"` */
export function authorLine(): string {
  return nextAuthor();
}
