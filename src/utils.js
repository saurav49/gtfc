const validateEmail = (email) => {
  const validEmailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return validEmailRegex.test(email);
};

const validatePassword = (password) => {
  const validPasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  return validPasswordRegex.test(password);
};

const isMatch = (password, confirmPassword) => {
  return password === confirmPassword ? true : false;
};

const validatePhoneNumber = (number) => {
  var phonenoRegx = /^\d{10}$/;
  return phonenoRegx.test(number);
};

export { validateEmail, validatePassword, isMatch, validatePhoneNumber };
