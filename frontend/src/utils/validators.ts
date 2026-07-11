export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const isValidPhone = (value: string) =>
  /^(\+?250|0)?7[0-9]{8}$/.test(value.replace(/\s/g, ""));

export const isStrongPassword = (value: string) =>
  value.length >= 8 && /[A-Za-z]/.test(value) && /[0-9]/.test(value);

export const passwordsMatch = (password: string, confirm: string) =>
  password === confirm;

export const isRequired = (value: unknown) =>
  value !== undefined && value !== null && String(value).trim().length > 0;

export const maxLength = (value: string, max: number) => value.length <= max;
export const minLength = (value: string, min: number) => value.length >= min;
