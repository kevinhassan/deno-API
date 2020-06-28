export const excludedAttributes = (attributes: Array<string>): Object =>
  attributes.reduce((acc, value) => {
    return {
      ...acc,
      [value]: undefined,
    };
  }, {});
