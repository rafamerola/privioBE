import { Router } from 'express';
import { Papel } from './model';
export const router = Router();
router.get('/papel', async, function (req, res, next) {
    try {
        const repository = await, getProductRepository = ();
        const allPapers = await, repository, find = ();
        res.send(allPapers);
    }
    catch (err) {
        return next(err);
    }
});
router.get('/papel/:id', async, function (req, res, next) {
    try {
        const repository = await, getProductRepository = ();
        const papel = await, repository, find = ({ id: req.params.id });
        res.send(papel);
    }
    catch (err) {
        return next(err);
    }
});
router.post('/papel', async, function (req, res, next) {
    try {
        const repository = await, getProductRepository = ();
        const papel = new Papel();
        papel.sigla = req.body.sigla;
        papel.descricao = req.body.descricao;
        const result = await, repository, save = (papel);
        res.send(result);
    }
    catch (err) {
        return next(err);
    }
});
router.post('/papel/:id', async, function (req, res, next) {
    try {
        const repository = await, getProductRepository = ();
        const papel = await, repository, findOne = ({ id: req.params.id });
        papel.sigla = req.body.sigla;
        papel.descricao = req.body.descricao;
        const result = await, repository, save = (papel);
        res.send(result);
    }
    catch (err) {
        return next(err);
    }
});
router.delete('/papel/:id', async, function (req, res, next) {
    try {
        const repository = await, getProductRepository = ();
        await;
        repository.delete({ id: req.params.id });
        res.send('OK');
    }
    catch (err) {
        return next(err);
    }
});
