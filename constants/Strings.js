const localizedStrings = {
  authkey: 'Auth_Response',
  sucess: 'Success',
  error: 'Error',
  emptyvalues: 'Need to select atleast one value',
  db_save_sucess: 'Data saved successfully',
  ok: 'Ok',
  login: {
    useridandpasswordmand: 'User Id and password is required',
    useridmand: 'User Id is required',
    passwordmand: 'Password is required',
  },
  signup: {
    allFieldsRequired: 'Please fill in all the fields!',
    passwordLength:
      'Password must be of 6 characters and must contain one numeric character!',
    passwordMatch: 'Passwords do not match!',
    emailMatch: 'Enter a valid Email ID!',
    agreeTerms: 'Please agree to the terms',
  },
};

const non_localizedString = {
  //strings which are not to be localized should be here
  authkey: 'Auth_Response',
  rememberKey: 'rememberkey',
};

const error_message = {
  // error messages
};

const stringconstants = {
  ...localizedStrings,
  ...non_localizedString,
  ...error_message,
};

export default stringconstants;
