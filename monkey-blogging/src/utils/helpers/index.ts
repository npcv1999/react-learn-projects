export const getLastName = (name: string) => {
  const names = name.split(" ");
  return names[names.length - 1];
};
