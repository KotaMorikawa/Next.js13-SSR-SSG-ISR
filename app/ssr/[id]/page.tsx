const getUser = async (id: string) => {
  const data = await fetch('http://localhost:3000/api/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
    }),
    cache: 'no-store',
  })
    .then((res) => {
      if (!res.ok) throw new Error(`${res.status}`);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};

const page = async ({ params }: { params: Params }) => {
  const data: Data = await getUser(params.id);
  return (
    <div>
      <p>SSR</p>
      <div className="flex space-x-2">
        <p>id: {data?.id}</p>
        <p>name: {data?.name}</p>
        <p>age: {data?.age}</p>
        <p>type: {data?.type}</p>
      </div>
    </div>
  );
};

export default page;
