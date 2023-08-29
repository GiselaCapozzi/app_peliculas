export const getFlags =  async () => {
  const result = await fetch('https://flagcdn.com/es/codes.json');
  const data = await result.json();
  return data;
}