import React from 'react';
import Input from '../../uikit/Input';
import { Service } from './types';

interface ServiceItemProps {
  serviceItem: Service;
  activatePromo: (id: number) => void;
}

const ServiceItem = (props: ServiceItemProps) => {
  const { serviceItem, activatePromo } = props;

  return (
    <div className="service-block">
      <div className="service-item">
        <div className="column mr24">
          <span className="service-name">{serviceItem.name}</span>
          <span className="service-description">{serviceItem.description}</span>
        </div>
        <div className="row">
          <div className="column mr24">
            <Input
              label="PROMOCODE"
              defaultValue={serviceItem.promocode}
              showClipboardCopy
            />
          </div>
          <div className="column flex-end">
            <button
              type="button"
              className={`blue-button ${serviceItem.activated && 'disabled'}`}
              onClick={() => activatePromo(serviceItem.id)}
              disabled={serviceItem.activated}
            >
              Activate bonus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
