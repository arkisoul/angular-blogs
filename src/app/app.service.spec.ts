import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have name = calc', () => {
    expect(service.name).toEqual('calc');
  })

  it('should return sum of a = 10 + b = 20', () => {
    expect(service.add(10, 20)).toBe(30);
    expect(service.getOperations().getValue()).toEqual(['add'])
  })
  
  it('should return difference of a = 10 + b = 20', () => {
    expect(service.substract(10, 20)).toBe(10);
    expect(service.getOperations().getValue()).toEqual(['substract'])
  })
  
  it('should be an empty array', () => {
    expect(service.getOperations().getValue()).toEqual([])
  })

  it('should have add in operations array', () => {
    expect(service.add(10, 20)).toBe(30);
    expect(service.getOperations().getValue()).toEqual(['add'])
  })
  
  it('should have substract in operations array', () => {
    expect(service.substract(10, 20)).toBe(10);
    expect(service.getOperations().getValue()).toEqual(['substract']);
  });
});