const getUser = async ({ id }: { id: string }) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await data.json();
  const result = user.find((item: { id: string }) => String(item.id) === id);
  return result;
};

export default getUser;
