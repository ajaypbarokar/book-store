import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

const APP_PREFIX = 'APP_';

@Injectable()
export class LocalStorageService {
  constructor(private loggerService: LoggerService) {}

  setItem(key: string, value: any) {
    const jsonString = JSON.stringify(value);
    this.loggerService.log(`${key} : ${jsonString}`);
    localStorage.setItem(`${APP_PREFIX}${key}`, jsonString);
  }

  getItem(key: string) {
    return JSON.parse(localStorage.getItem(`${APP_PREFIX}${key}`));
  }
}
