import { GET_TRAIN_SCHEDULES } from '../constants';

export function getTrainSchedules() {
  return {
    type: GET_TRAIN_SCHEDULES,
    payload: {
      request: {
        method: 'GET',
        url: '/train-schedules',
      },
    },
  };
}
