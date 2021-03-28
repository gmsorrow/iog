import { Service } from './types';

export const filterServices = (services: Array<Service>, filter: string): Array<Service> => {
  let filteredServices = services;
  if (filter) {
    const lowerCaseFilter = filter.toLowerCase();
    filteredServices = services.filter(
      (service) => service.name
        .toLowerCase()
        .includes(lowerCaseFilter)
    );
  }
  return filteredServices;
};
