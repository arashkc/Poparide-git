// Utility function to convert Arabic numbers to Persian
export function convertToPersianNumbers(number) {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return number
    .toString()
    .split("")
    .map((char) => {
      return persianDigits[parseInt(char)] || char;
    })
    .join("");
}
