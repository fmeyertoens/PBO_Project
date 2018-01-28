import { Process } from './../process/process';
export class ModifyRestdata {
  static modifyProcess(rawProcess: any): Process {
    const id = (rawProcess.process.childs.id).split('https://process.stadt.de/process/');
    return new Process(
      typeof (rawProcess.process.childs.id) === 'string' ? parseInt(id, 10) : rawProcess.process.childs.id,
      rawProcess.process.childs.name,
      rawProcess.process.childs.location,
      rawProcess.process.childs.initiator,
      rawProcess.process.childs.description,
      rawProcess.process.childs.participation,
      rawProcess.process.childs.parent,
    );
  }
}
