type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form

type Params = Omit<Form, "errors">;
function submitForm(data: Params) {
  console.log("Submitting form with data:", data);
}
const formData: Params = {
  email: "test@example.com",
  firstName: "Tanya",
  lastName: "Dmytyienko",
  phone: "1234567890",
};
submitForm(formData);
