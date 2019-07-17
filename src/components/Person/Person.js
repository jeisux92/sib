import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./Person.module.scss";

const Person = () => {
  const [formPerson, setForm] = useState({
    username: {
      inputType: "text",
      config: {
        placeholder: "name",
        type: "text",
      },
      value: "",
      validation: {
        required: true,
        minLength: 4,
        maxLength: 10,
      },
      valid: true,
      touched: false,
    },
    password: {
      inputType: "text",
      config: {
        type: "password",
        autoComplete: "password",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    email: {
      inputType: "text",
      config: {
        placeholder: "your@email.com",
        type: "email",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    name: {
      inputType: "text",
      config: {
        type: "text",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    lastname: {
      inputType: "text",
      config: {
        type: "text",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    ubicacion: {
      inputType: "text",
      config: {
        placeholder: "Bogotá",
        type: "text",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
    perfil: {
      inputType: "text",
      config: {
        placeholder: "",
        type: "text",
      },
      value: "",
      validation: {},
      valid: true,
      touched: false,
    },
  });
  const changedHandler = (element, e) => {
    let form = { ...formPerson };
    let formElement = { ...form[element] };
    formElement.value = e.target.value;

    formElement.valid = validateForm(formElement.value, formElement.validation);

    form[element] = formElement;

    setForm(form);
  };

  const validateForm = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value && isValid;
    }

    if (rules.minLength) {
      isValid = value.length <= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    return isValid;
  };
  const formInputs = Object.keys(formPerson).map(fPKey => (
    <Input
      label={fPKey}
      inputKey={fPKey}
      inputType={formPerson[fPKey].inputType}
      config={formPerson[fPKey].config}
      changed={changedHandler}
      value={formPerson[fPKey].value}
      key={fPKey}
    />
  ));

  const submitHandler = () => {};
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.PersonForm}>{formInputs}</div>
    </form>
  );
};

export default Person;
