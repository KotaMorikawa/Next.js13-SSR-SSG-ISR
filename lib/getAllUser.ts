const getAllUser = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  const user = await data.json();
  return user;
};

export default getAllUser;
