const container = document.querySelector(".container")

const elements = [
  { tag: "p", content: "content 1" },
  { tag: "div", content: "content 2" },
  { tag: "section", content: "content 3" },
  { tag: "footer", content: "content 4"}
];

const div = document.createElement("div")

for (let i = 0; i < elements.length; i++) {
  let { tag, content } = elements[i];
  let tagCreated = document.createElement(tag)
  tagCreated.innerHTML = content
  div.appendChild(tagCreated)
}

container.appendChild(div)
