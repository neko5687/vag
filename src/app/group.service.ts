import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
/**
 * The GroupService is responsible for managing the name of the current group and the state of questions within it.
 * @class
 * @Injectable
 */
export class GroupService {
  private groupName : string = "";
  public hasQuestions: boolean = false;
  public groupNameChanged: Subject<string> = new Subject<string>();

  /**
   * Returns the name of the current group.
   * @public
   * @returns {string} The name of the current group.
   */
  getGroupName() : string{
    return this.groupName;
  }

  /**
   * Sets the name of the current group and emits an event to notify subscribers of the change.
   * @param {string} name - The new name of the current group.
   * @public
   * @returns {void}
   */
  setGroupName(name: string) {
    this.groupName = name;
    this.groupNameChanged.next(this.groupName);
  }

}
