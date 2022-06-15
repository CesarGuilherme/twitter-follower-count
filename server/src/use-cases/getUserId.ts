import needle from 'needle';
require('dotenv').config();

const token = process.env.BEARER_TOKEN;

export async function getUserId(user:string) {
  const twitterApiUrlAccountID = `https://api.twitter.com/2/users/by/username/${user}`;
  const res = await needle("get", twitterApiUrlAccountID, {
    headers: {
      "User-Agent": "TwitterApi",
      authorization:  `Bearer ${token}`,
    },
  });
  if (res.body) {
    console.log(res.body);
    return res.body;
  } else {
    throw new Error("Unsucessful request");
  }
}