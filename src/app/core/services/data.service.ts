import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {
  constructor(
    private localStorageService: LocalStorageService,
    private loggerService: LoggerService
  ) {}
}
