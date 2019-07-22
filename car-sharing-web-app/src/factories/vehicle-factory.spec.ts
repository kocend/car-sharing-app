import { VehicleFactory } from './vehicle-factory';

describe('VehicleFactory', () => {
  it('should create an instance', () => {
    expect(new VehicleFactory()).toBeTruthy();
  });
});
