import { filterServices } from '../utils';
import { services } from './assets/services';

describe('Services Filter', () => {
  it('should return only one item if filtered by it`s name', () => {
    const filter = services[0].name;
    const filteredServices = filterServices(services, filter);

    expect(filteredServices.length).toEqual(1);
  });
  it('should return all items if filtered by empty', () => {
    const filter = '';
    const filteredServices = filterServices(services, filter);

    expect(filteredServices.length).toEqual(services.length);
  });
});
