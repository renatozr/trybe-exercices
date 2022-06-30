import { model } from "mongoose";
import { TournamentSchema, ITournament } from "../schemas/Tournament";

class TournamentModel {
  constructor(private tournamentModel = model<ITournament>('tournaments', TournamentSchema)) { }

  public async findAll(filters: object): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.find(filters);

    return tournaments;
  }

  public async findByYear(year: Number): Promise<ITournament | null> {
    const tournament = await this.tournamentModel.findOne({ year });

    return tournament;
  }

  public async create(tournament: ITournament): Promise<ITournament> {
    const createdTournament = await this.tournamentModel.create(tournament);

    return createdTournament;
  }

  public async updateById(id: string, tournamentData: object): Promise<ITournament | null> {
    const updatedTournament = await this.tournamentModel.findByIdAndUpdate(id, tournamentData, { new: true });

    return updatedTournament;
  }

  public async excludeById(id: string): Promise<ITournament | null> {
    const excludedTournament = await this.tournamentModel.findByIdAndDelete(id);

    return excludedTournament;
  }

  public async findByRunnerUp(runnerUp: string): Promise<ITournament[]> {
    const tournaments = await this.tournamentModel.find({ runnerUp });

    return tournaments;
  }
}

export default TournamentModel;