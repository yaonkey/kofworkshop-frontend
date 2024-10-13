const ParamsValidator = {
  string: (value: string): boolean => {
    if (
      !value.includes("<") &&
      !value.includes("{") &&
      !value.includes("[") &&
      !value.includes("&") &&
      value.length > 1
    ) {
      return true;
    }
    return false;
  },
  unsignedNumber: (value: number): boolean => {
    if (value > 0) {
      return true;
    }
    return false;
  },
};

export default function validate(params: object): boolean {
  for (const [key, value] of Object.entries(params)) {
    if (params.hasOwnProperty(key)) {
      if (typeof value === "string") {
        if (!ParamsValidator.string(value)) {
          return false;
        }
      } else if (typeof value === "number") {
        if (!ParamsValidator.unsignedNumber(value)) {
          return false;
        }
      }
    }
  }
  return false;
}
