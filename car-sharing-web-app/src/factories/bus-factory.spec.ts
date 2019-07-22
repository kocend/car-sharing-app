import { BusFactory } from './bus-factory';

describe('BusFactory', () => {
  it('should create an instance', () => {
    expect(new BusFactory()).toBeTruthy();
  });
});
