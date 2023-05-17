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

import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json({ name: 'John Doe' });
}
```

