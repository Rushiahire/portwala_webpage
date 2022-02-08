const setFormStatus = () => {
  const formSection = document.getElementById("form_section");
  const contactForm = document.getElementById("contact_form");

  if (
    formSection.style.display == "none" &&
    contactForm.style.display == "none"
  ) {
    formSection.style.display = "flex";
    contactForm.style.display = "block";
  } else {
    formSection.style.display = "none";
    contactForm.style.display = "none";
  }
};