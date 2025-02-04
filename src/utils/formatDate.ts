import dayjs from "dayjs";
import custonParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(custonParseFormat)

export function FormatDate(date: string): string {
   return dayjs(date, 'DD/MM/YYYY').format('YYYY-MM-DD')
}