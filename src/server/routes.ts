import * as express from 'express';

import DB from './db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

router.get('/api/word', async (req, res) => {
    try {
        let word = await DB.Word.get();
        res.json(word);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;