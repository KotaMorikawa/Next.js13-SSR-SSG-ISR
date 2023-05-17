## Getting Started

First, run the development server:

```bash

create .env
MYSQL_ROOT_PASSWORD=admin
MYSQL_DATABASE=13verapp

docker compose up

npm install

npx prisma generate

yarn run dev
```

## api directory version in app directory

app/api/route.ts

```bash

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;
  try {
    const user: Data | null = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  } finally {
    await prisma.$disconnect();
  }
}
```

calling function(ver SSR)

```bash

const getUser = async (id: string) => {
  const data = await fetch('http://localhost:3000/api', {  // エンドポイントが app/api/route.ts
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
```
