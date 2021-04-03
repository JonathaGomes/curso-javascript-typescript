const paragraphsContainer = document.querySelector(".paragraphs");
const paragraphs = document.querySelectorAll("p");

const styles = getComputedStyle(document.body);
const bgBody = styles.backgroundColor;

for (let paragraph of paragraphs) {
  paragraph.style.backgroundColor = bgBody;
  paragraph.style.padding = "10px";
  paragraph.style.color = "#fff"
}