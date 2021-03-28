import {
  ApiResponse,
  executeRequest,
} from './index';
import { Service } from '../pages/services/types';

export function getServicesList(): Promise<ApiResponse<Array<Service>>> {
  return executeRequest('services');
}
