import _ from "lodash";

type SpaceNumberConfig = {
  minDigits: number;
};

const CHUNK_SIZE = 3;

const spaceStart = (data: string): string => {
  if (data.length <= CHUNK_SIZE) {
    return data;
  }

  const chunkSize =
    data.length % CHUNK_SIZE === 0 ? CHUNK_SIZE : data.length % CHUNK_SIZE;

  return `${data.slice(0, chunkSize)} ${spaceStart(data.slice(chunkSize))}`;
};

export const spaceNumber =
  ({ minDigits }: SpaceNumberConfig) =>
  (value: number) => {
    const stringNumber = value.toString();
    return stringNumber.length < minDigits
      ? stringNumber
      : spaceStart(stringNumber);
  };

export const spaceNumberForAnyValue =
  <T>(config: SpaceNumberConfig) =>
  (value: T): T | string => {
    if (!_.isNumber(value)) {
      return value;
    }

    return spaceNumber(config)(value);
  };
