import { Router } from 'express';

import TournamentController from './controllers/Tournament';

const tournamentController = new TournamentController();

const routes = Router();

routes.route('/tournaments')
  .get(tournamentController.findAll)
  .post(tournamentController.create);
routes.route('/tournaments/:id')
  .put(tournamentController.updateById)
  .delete(tournamentController.excludeById);
routes.route('/tournaments/year/:year')
  .get(tournamentController.findByYear)

export default routes;