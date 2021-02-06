export interface Ohm {
  client: any;
  comment: string;
  description: Description;
  history: DataHistory[];
  id: string;
  status: Status;
  trackingId: string;
}

export type Status = 'CREATED' | 'PREPARING' | 'READY' | 'IN_DELIVERY' | 'DELIVERED' | 'REFUSED';

export interface Client {
  address: string;
  name: string;
}

export interface Description {
  amperes: number;
  volts: number;
}

export interface DataHistory {
  state: Status;
  at: string;
}
