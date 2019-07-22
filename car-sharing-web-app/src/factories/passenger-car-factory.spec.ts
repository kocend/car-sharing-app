import { PassengerCarFactory } from './passenger-car-factory';

describe('PassengerCarFactory', () => {
  it('should create an instance', () => {
    expect(new PassengerCarFactory()).toBeTruthy();
  });
});
