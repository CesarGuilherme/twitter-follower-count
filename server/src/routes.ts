import express from 'express';
import { getFollowersCount } from './use-cases/getFollowersCount';
import { getUserId } from './use-cases/getUserId';

export const routes = express.Router();

routes.get('/:user', (req, res) => {  
  const { user } = req.params;
  (async () => {
    const id = await getUserId(user);
    if (!id.errors) {
    try {
      const response = await getFollowersCount(id.data.id);
      const info = response.data;
      return res.json(info[0].public_metrics);
      } catch (e) {
        res.send(e);
    }
  } else {
    res.send(id.errors[0].detail);
  }}
  )();
}); 