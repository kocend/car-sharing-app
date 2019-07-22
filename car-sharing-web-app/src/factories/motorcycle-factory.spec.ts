import { MotorcycleFactory } from './motorcycle-factory';

describe('MotorcycleFactory', () => {
  it('should create an instance', () => {
    expect(new MotorcycleFactory()).toBeTruthy();
  });
});
