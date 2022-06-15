import needle from 'needle';
require('dotenv').config();

const twitterApiUrlFollowers = 'https://api.twitter.com/2/users';
const token = process.env.BEARER_TOKEN;

export async function getFollowersCount(id:string) {
  const params = {
    "ids":id,
    "user.fields":"public_metrics"
  };
  const res = await needle("get", twitterApiUrlFollowers, params, {
    headers: {
      "User-Agent": "TwitterApi",
      authorization:  `Bearer ${token}`,
    },
  });
  if (res.body) {
    return res.body;
  } else {
    throw new Error("Unsucessful request");
  }
}