import React from 'react';
import { Service } from './types';
import ServiceItem from './ServiceItem';
import { filterServices } from './utils';

interface ServiceListProps {
  services: Array<Service> | void;
  filter: string;
  activatePromo: (id: number) => void;
}

const ServiceList = (props: ServiceListProps) => {
  const { services, filter, activatePromo } = props;

  if (
    !Array.isArray(services)
    || !services.length
  ) {
    return null;
  }

  const filteredServices = filterServices(services, filter);

  return (
    <>
      {
        filteredServices.map((serviceItem) => (
          <ServiceItem
            key={serviceItem.id}
            serviceItem={serviceItem}
            activatePromo={activatePromo}
          />
        ))
      }
    </>
  );
};

export default ServiceList;
