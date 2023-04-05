// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  mancJSProfile: any;
  mancJSEvents: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const mancJSProfile = await fetch("https://api.meetup.com/mancjs").then(
    (response) => response.json()
  );

  const mancJSEvents = await fetch("https://api.meetup.com/the-ux-crunch-manchester/events").then(
    (response) => response.json()
  );

  res.status(200).json({ mancJSProfile, mancJSEvents });
}
