import { checkForName } from "./nameChecker";
function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("url").value;
  checkForName(formText);

  console.log("::: Form Submitted :::");
  let request = {
    theText: formText,
  };

  fetch("/testing", {
    method: "POST",
    body: JSON.stringify(request),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then(function (res) {
      document.getElementById("results").innerHTML = res.polarity;
      console.log(res);
      alert(dataText);
    });
}

export { handleSubmit };
