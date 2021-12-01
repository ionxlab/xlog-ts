/**
 * The LogConfig class
 */
export class LogConfig {
  public printDate: boolean = true
  public printTime: boolean = true
  public printMilliTime: boolean = true
  public printName: boolean = true
  public printLevel: boolean = true
  public printTag: boolean = true

  /**
   * Construct a LogConfig
   * @param {boolean} printDate
   * @param {boolean} printTime
   * @param {boolean} printMilliTime
   * @param {boolean} printName
   * @param {boolean} printLevel
   * @param {boolean} printTag
   */
  constructor(printDate?: boolean, printTime?: boolean, printMilliTime?: boolean, printName?: boolean, printLevel?: boolean, printTag?: boolean) {
    if(printDate != null)
      this.printDate = printDate;
    if(printTime != null)
      this.printTime = printTime;
    if(printMilliTime != null)
      this.printMilliTime = printMilliTime;
    if(printName != null)
      this.printName = printName;
    if(printLevel != null)
      this.printLevel = printLevel;
    if(printTag != null)
      this.printTag = printTag;
  }
}
