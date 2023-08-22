import { useRef, useState } from "react";

export default function useValidateForm() {
  const [errors, setErrors] = useState({
    exist: true,
    name: "",
    email: "",
    phone: "",
    _subject: "",
    mesage: "",
  });
  const inputName = useRef(true);
  const inputEmail = useRef(true);
  const inputPhone = useRef(true);
  const inputSubject = useRef(true);
  const inputMesage = useRef(true);

  function validate(data) {
    let errors = {};
    const regExpEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const regExpText = /^[A-Za-z ]+$/;

    const { name, email, phone, _subject, mesage } = data;

    if (inputName.current) {
      errors.exist = true;
      inputName.current = name === "";
    } else if (!name || !regExpText.test(name) || name.length > 15) {
      errors.name = true;
    }

    if (inputEmail.current) {
      errors.exist = true;
      inputEmail.current = email === "";
    } else if (!email || !regExpEmail.test(email)) {
      errors.email = true;
    }

    if (inputPhone.current) {
      errors.exist = true;
      inputPhone.current = phone === "";
    } else if (!phone || isNaN(phone) || phone.length > 15) {
      errors.phone = true;
    }

    if (inputSubject.current) {
      errors.exist = true;
      inputSubject.current = _subject === "";
    } else if (
      !_subject ||
      !regExpText.test(_subject) ||
      _subject.length > 30
    ) {
      errors._subject = true;
    }

    if (inputMesage.current) {
      errors.exist = true;
      inputMesage.current = mesage === "";
    } else if (!mesage || !regExpText.test(mesage)) {
      errors.mesage = true;
    }

    setErrors({ ...errors, exist: Object.keys(errors).length > 0 });
  }
  return { validate, errors };
}
