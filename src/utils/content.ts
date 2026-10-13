// Template placeholders look like "[YOUR SCHOOL]" — treat those as not filled in yet
export const isFilled = (value?: string): value is string =>
  !!value && !/\[[^\]]*\]/.test(value);
