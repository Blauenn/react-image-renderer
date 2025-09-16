export const convert_to_roman = (number: number): string => {
  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";
  for (const [value, roman] of romanNumerals) {
    while (number >= value) {
      result += roman;
      number -= value;
    }
  }
  return result;
};

export const day_ordinals = (number: string) => {
  let ordinal: string = "";

  if (number == "1" || number == "21" || number == "31") {
    ordinal = "st";
  } else if (number == "2" || number == "22") {
    ordinal = "nd";
  } else if (number == "3" || number == "23") {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }

  return ordinal;
};
