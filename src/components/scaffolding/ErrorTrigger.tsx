import { useEffect, useState } from 'react';

export function ErrorTrigger() {
  const [dice] = useState(Math.random());
  useEffect(() => {
    console.log(dice);
    if (dice < 0.5) {
      throw Error();
    }
  });
  return <p>nothing happen</p>;
}
