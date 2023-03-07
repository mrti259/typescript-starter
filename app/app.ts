import express from 'express';

export function app() {
    const self = express();

    self.get('/', (req, res) => {
        return res.send(true);
    });

    return self;
}
