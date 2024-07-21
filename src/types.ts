export type TrainData = {
  name: string;
  description: string;
  characteristics: CharacteristicData[];
};

export type CharacteristicData = {
  speed: number;
  force: number;
  engineAmperage: number;
};
