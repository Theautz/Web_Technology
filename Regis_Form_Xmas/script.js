document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("regisForm");
  const resultdiv = document.getElementById("result");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements["name"].value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const interests = Array.from(
      form
        .querySelectorAll('input[name="Interests"]:checked'))
        .map((checkbox) => checkbox.value);
    const country = form.elements["country"].value;

    resultdiv.innerHTML = `
            <p>Name: ${name}</p> 
            <p>Gender: ${gender}</p> 
            <p>Interests: ${interests.join(", ")}</p>
            <p>Country: ${country}</p>`;
  });
});
