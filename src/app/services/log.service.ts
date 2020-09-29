import { Injectable } from '@angular/core';

// Dekorator Injectable umożliwia wstrzykiwanie innego serwisu
@Injectable()
export class LogService {
  logger(log: string): void {
    console.log(log);
  }
}
