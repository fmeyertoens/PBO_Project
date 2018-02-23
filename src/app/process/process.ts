export class Process {
  constructor(
  public id: number,
  public name: string,
  public location: string,
  public initiator: string,
  public description: string,
  public participation: string,
  public parent: string,
  ) {}
}
