const createTable = document.querySelector(".btn-draw");

const handleError = (dom) => {
  const elm = document.querySelector(dom);
  elm.style.border = "1px solid red";
  let showError = document.querySelector(`${dom} + p`); //elm +
  showError.innerHTML = "*The field is required";
};

createTable.addEventListener("click", (e) => {
  let countRow = +document.querySelector("#inp-row");
  let countCol = +document.querySelector("#inp-col");

  if (!countRow || !countCol) {
    // set require

    if (!countRow) {
      handleError("#inp-row");
    }
    if (!countCol) {
      handleError("#inp-col");
    }
    return;
  }

  let table = document.querySelector(".wrap");
  let widthItem = 100 / countCol;

  for (let i = 1; i <= countRow.value; i++) {
    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 1; j <= countCol.value; j++) {
      let item = document.createElement("div");
      console.log(item);
      item.classList.add("item");
      item.style.width = `${widthItem}%`;
      item.style.height = "50px";
      row.appendChild(item);
    }

    table.appendChild(row);
  }
});
