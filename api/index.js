import express from 'express';
import data from '../src/testData';

const router = express.Router();

const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;

}, {});

router.get('/contests', (req, res) => {
  res.send({ 
    contests: contests
  });
});


router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed bibendum sem. In auctor arcu lacus, ac varius eros aliquet a. Nunc pharetra rhoncus nibh, a dignissim tellus venenatis non. Etiam varius convallis ex quis efficitur. Sed mattis nibh lectus, ac pharetra eros euismod rutrum. Sed efficitur a leo nec accumsan. Integer sollicitudin id sem sed malesuada. Donec efficitur felis non posuere bibendum. Cras at augue dolor. Proin dapibus, magna non viverra hendrerit, sapien odio venenatis purus, ut facilisis urna dui vitae elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ullamcorper et lectus vitae porttitor. Aenean luctus arcu ullamcorper purus sagittis, vel pulvinar orci malesuada.';

  res.send(contest);
});


export default router;
