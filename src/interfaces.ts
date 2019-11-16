export interface FormField {
  value: string;
  error?: string;
}

export interface AgeFormField extends FormField {
  success: boolean;
}

export interface EmailFormField extends FormField {
  success: boolean;
}

export interface Member {
  id: string;
  taken: boolean;
  name: FormField;
  dob: AgeFormField;
  email: EmailFormField;
  org: FormField;
  shirt: FormField;
  diet: FormField;
}
