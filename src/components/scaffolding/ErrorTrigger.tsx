import { useEffect, useState } from 'react';

export function ErrorTrigger() {
  const [dice] = useState(Math.random());
  useEffect(() => {
    console.log(dice);
    if (dice < 0.5) {
      throw new Error("This is fine.");
    }
  });
  return <p>nothing happen</p>;
}
