function makeUpperCase(input) {
  return input.toUpperCase();
}

const makeUpperCaseV2 = (input) => input.toUpperCase();

const trimAndMakeUpperCase = (input) => {
  const uc = makeUpperCaseV2(input);
  return uc.trim();
};
