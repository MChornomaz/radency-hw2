export function extractDatesFromString (inputString: string): string[] {
  const datePattern = /\b(\d{1,2}[-/]\d{1,2}[-/]\d{4}|\d{4}[-/]\d{1,2}[-/]\d{1,2})\b/g
  const dates = inputString.match(datePattern)

  const formattedDates = (Array.isArray(dates) ? dates : []).map((date: string) => {
    const parts = date.split(/[-/]/)
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`
  })
  return formattedDates
}
