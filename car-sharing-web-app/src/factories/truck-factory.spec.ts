import { TruckFactory } from './truck-factory';

describe('TruckFactory', () => {
  it('should create an instance', () => {
    expect(new TruckFactory()).toBeTruthy();
  });
});
