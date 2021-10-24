import { TestBed } from '@angular/core/testing';

import { DataModulesService } from './data-modules.service';

describe('DataModulesService', () => {
  let service: DataModulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataModulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
