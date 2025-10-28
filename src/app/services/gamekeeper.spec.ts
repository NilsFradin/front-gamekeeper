import { TestBed } from '@angular/core/testing';

import { GamekeeperService } from './gamekeeper';

describe('Gamekeeper', () => {
  let service: GamekeeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamekeeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
