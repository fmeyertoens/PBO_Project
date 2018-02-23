export class Process {
  constructor(
  public id: number,
  public name: string,
  public location: string,
  public initiator: string,
  public participation: string,
  public description: string,
  public parent: string,
  ) {}
}
