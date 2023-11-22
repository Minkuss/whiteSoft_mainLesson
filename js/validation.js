document.addEventListener('DOMContentLoaded', function() {
  const inputs = Array.from(document.querySelectorAll(".field__input"));
  // const submitButton = document.querySelector(".field__button");
  document.querySelector(".field__button").disabled = true;

  inputs.forEach((input) => {
    switch (input.id) {
      case "subject":
        input.required = true;
        break;
      case "name":
        input.required = true;
        break;
      case "phone":
        input.required = true;
        break;
    }

    input.addEventListener("input", submitButton);
    input.addEventListener("blur", validate);
  })



  function validate(inputEvent) {
    const input = inputEvent.target;
    const inpValue = input.value;

    const isEmpty = input.required && !inpValue;

    if (isEmpty) {
      input.className = "field__input input--error body-1--normal";
      const label = document.querySelector("label[for=" + input.id + "]");
      label.className = "field__label--error body-3--normal"
    } else {
      input.className = "field__input input body-1--normal";
      const label = document.querySelector("label[for=" + input.id + "]");
      label.className = "field__label body-3--normal"
    }
  }

  function submitButton() {
    inputs.some((input) => {
      if (input.value) {
        console.log("false")
        document.querySelector(".field__button").disabled = false;
      } else {
        console.log("true")
        document.querySelector(".field__button").disabled = true;
        return true;
      }
    })

    inputs.forEach((input) => {
      let value =  input.value.replace(/\D/g, '');

      if (input.id === "phone") {
        value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{4})(\d{1,})/, '+$1 ($2) $3-$4');
      }
      input.value = value;
    })
  }

});