import TournamentModel from "../models/Tournament";
import { ITournament } from "../schemas/Tournament";

class TournamentService {
  constructor(private tournamentModel = new TournamentModel()) { }

  public async findAll(filters: object): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.findAll(filters);

    return tournaments;
  }

  public async findByYear(year: Number): Promise<ITournament | null> {
    const tournament = await this.tournamentModel.findByYear(year);

    return tournament;
  }

  public async create(tournament: ITournament): Promise<ITournament> {
    const createdTournament = await this.tournamentModel.create(tournament);

    return createdTournament;
  }

  public async updateById(id: string, tournamentData: object): Promise<ITournament | null> {
    const updatedTournament = await this.tournamentModel.updateById(id, tournamentData);

    return updatedTournament;
  }

  public async excludeById(id: string): Promise<ITournament | null> {
    const excludedTournament = await this.tournamentModel.excludeById(id);

    return excludedTournament;
  }

  public async findByRunnerUp(runnerUp: string): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.findByRunnerUp(runnerUp);

    return tournaments;
  }
}

export default TournamentService;