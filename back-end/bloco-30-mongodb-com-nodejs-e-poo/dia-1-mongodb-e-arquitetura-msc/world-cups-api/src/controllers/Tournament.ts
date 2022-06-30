import { Request, Response } from "express";
import TournamentService from "../services/Tournament";

class TournamentController {
  constructor(private tournamentService = new TournamentService()) { }

  public findAll = async (req: Request, res: Response): Promise<Response> => {
    const filters = req.query;

    const tournaments = await this.tournamentService.findAll(filters);

    return res.status(200).json(tournaments);
  }

  public findByYear = async (req: Request, res: Response): Promise<Response> => {
    const year = parseInt(req.params.year);

    const tournament = await this.tournamentService.findByYear(year);

    if (tournament === null) return res.status(404).json({ message: 'There was no world cup in this year.' });

    return res.status(200).json(tournament);
  }

  public create = async (req: Request, res: Response): Promise<Response> => {
    const tournament = req.body;

    const createdTournament = await this.tournamentService.create(tournament);

    return res.status(201).json(createdTournament);
  }

  public updateById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const tournamentData = req.body;

    const updatedTournament = await this.tournamentService.updateById(id, tournamentData);

    if (updatedTournament === null) return res.status(404).json({ message: 'Tournament not found.' });

    return res.status(200).json(updatedTournament);
  }

  public excludeById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    const excludedTournament = await this.tournamentService.excludeById(id);

    if (excludedTournament === null) return res.status(404).json({ message: 'Tournament not found.' });

    return res.status(200).json(excludedTournament);
  }
}

export default TournamentController;