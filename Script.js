const form = document.getElementById("placementForm");
const tableBody = document.getElementById("tableBody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const packageValue = document.getElementById("package").value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${company}</td>
    <td>${role}</td>
    <td>${packageValue}</td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  tableBody.appendChild(row);

  // Delete functionality
  row.querySelector(".delete-btn").addEventListener("click", function () {
    row.remove();
  });

  form.reset();
});
