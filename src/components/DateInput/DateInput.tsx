import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import Label from "../ui/label";
import { DateRange } from "react-day-picker";
import { DateProps } from "@/types/types";
import { PopoverClose } from "@radix-ui/react-popover";

export function DateInput({
  className,
  id,
  label,
  register,
  setValue,
  errors,
  defaultValue,
  disableDate,
}: DateProps) {
  const initDate = new Date();
  const [date, setDate] = useState<DateRange | any>(defaultValue || initDate);

  useEffect(() => {
    disableDate && setDate(addDays(new Date(disableDate as string), 3));
  }, [disableDate]);

  const handleDateChange = (newDate: any) => {
    if (newDate) {
      setDate(newDate);

      setValue && setValue(id, format(newDate, "yyyy-MM-dd"));
    }
  };

  return (
    <div>
      <Label id={id} label={label} />
      <div
        className={cn(
          "[&>button]:max-w-none [&>button]:rounded-md [&>button]:border-gray-300 grid gap-2",
          className
        )}
      >
        <Popover>
          <PopoverTrigger asChild {...register(id)} className="max-w-none">
            <Button
              id={id}
              variant={"outline"}
              className={cn(
                "w-full max-w-sm justify-start font-normal border",
                !date && "text-muted-foreground"
              )}
            >
              {date && format(date, "dd-LL-yyyy")}
              <CalendarIcon className="mr-auto h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align={window.innerWidth < 768 ? "center" : "start"}
            className="flex w-auto flex-col space-y-2 p-2"
          >
            <div className="rounded-md border">
              <Calendar
                mode="single"
                initialFocus
                defaultMonth={date}
                selected={date}
                onSelect={handleDateChange}
                numberOfMonths={1}
                dir="ltr"
                className="max-w-72 sm:max-w-none"
                disabled={{
                  before: new Date(disableDate as string),
                }}
              />
            </div>
            <PopoverClose>
              <p className="w-full border rounded-md py-1 bg-white text-main hover:text-main/85">
                تأكيد
              </p>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </div>

      <p
        className={cn(
          "text-xs text-red-500 h-5 transition-opacity",
          errors?.[id] ? "opacity-100" : "opacity-0"
        )}
      >
        تاريخ الرحلة مطلوب
      </p>
    </div>
  );
}
