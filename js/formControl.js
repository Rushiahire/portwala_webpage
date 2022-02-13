
let formStatus = false;
const setFormStatus = () => {
  const formSection = document.getElementById("form_section");
  const contactForm = document.getElementById("contact_form");
  formStatus = !formStatus
  if (formStatus) {
    formSection.classList.add("forms_section_visible");
    contactForm.classList.add("contact_visible");
  } else {
    contactForm.classList.remove("contact_visible");
    formSection.classList.remove("forms_section_visible");
  }
};


