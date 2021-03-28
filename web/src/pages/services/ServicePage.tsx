import React, {
  useCallback,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import { useImmer } from 'use-immer';
import Input from '../../uikit/Input';
import { getServicesList } from '../../api/services';
import ServiceList from './ServiceList';
import { Service } from './types';

const ServicePage = () => {
  const [servicesFilter, setServicesFilter] = useState('');
  const [services, setServices] = useImmer<Array<Service>>([]);

  const resetFilter = () => {
    setServicesFilter('');
  };

  const {
    isLoading,
    error,
    data,
  } = useQuery(
    'getServices',
    () => getServicesList(),
    {
      onSuccess: (response) => {
        if (!response.error) {
          setServices(response.data);
        }
      },
    }
  );

  const activatePromo = useCallback((id: number) => {
    setServices((nextServices) => {
      const activatedService = nextServices.find((service) => service.id === id);
      if (activatedService != null) {
        activatedService.activated = true;
      }
    });
  }, [services]);

  if (isLoading) {
    return (
      <>Loading ...</>
    );
  }

  if (error || data?.error) {
    return (
      <>Error loading services</>
    );
  }

  return (
    <>
      <span className="page-title">Services</span>
      <div className="service-block">
        <div className="column mr8">
          <Input
            label="FILTER"
            value={servicesFilter}
            onChange={setServicesFilter}
          />
        </div>
        <div className="column mr8 flex-end">
          <button
            type="button"
            className="reset-button"
            onClick={resetFilter}
          >
            Reset
          </button>
        </div>
      </div>
      <ServiceList
        services={services}
        filter={servicesFilter}
        activatePromo={activatePromo}
      />
    </>
  );
};

export default ServicePage;
