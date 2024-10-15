import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const items = [
  {
    title: "نزوى",
    image: "/assets/images/popular-destinations/nizwa.jpg",
    uni_price: 2,
    dio_price: 3.3,
    href: "",
  },
  {
    title: "البريمي",
    image: "/assets/images/popular-destinations/buraimii.jpg",
    uni_price: 5,
    dio_price: 9.5,
    href: "",
  },
  {
    title: "صور",
    image: "/assets/images/popular-destinations/sur.jpg",
    uni_price: 4.2,
    dio_price: 7.1,
    href: "",
  },
  {
    title: "جزيرة مصيرة",
    image: "/assets/images/popular-destinations/maseer.jpg",
    uni_price: 3.6,
    dio_price: 7.2,
    href: "",
  },
  {
    title: "خصب",
    image: "/assets/images/popular-destinations/rustaq.jpg",
    uni_price: 13,
    dio_price: 26,
    href: "",
  },
  {
    title: "صلالة",
    image: "/assets/images/popular-destinations/salalah.jpg",
    uni_price: 8,
    dio_price: 13,
    href: "",
  },
];

export const GridLayout = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      className="min-h-[50dvh] mx-auto grid grid-flow-dense grid-cols-12 gap-x-[3dvw] gap-y-4 select-none"
    >
      {/* <DoubleBlock /> */}
      {items.map((item) => (
        <SingleBlock key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

const SingleBlock = ({
  className,
  title,
  uni_price,
  dio_price,
  image,
  href,
}: {
  className?: string;
  title: string;
  uni_price: number;
  dio_price: number;
  image: string;
  href: string;
}) => {
  const MotionLink = motion(Link);

  return (
    <Block
      whileHover={{
        scale: 0.9,
        rotate: 1,
      }}
      className={cn(
        "col-span-12 md:col-span-4 relative min-h-[50dvh] [&_a]:hover:opacity-100",
        className
      )}
    >
      <img
        src={image}
        alt={`${title} image`}
        className="inset-0 absolute object-fill w-full h-full"
      />

      <h4 className="text-xl font-bold w-fit text-white bg-main/5 px-4 py-1 rounded-full shadow-md absolute top-6 right-4">
        {title}
      </h4>

      <div className="flex flex-col py-2 px-4 bg-main/60 absolute bottom-4 left-4 w-fit rounded-xl">
        <span className="flex gap-4 justify-between text-main-foreground">
          <p>اتجاه واحد</p>
          <p>{uni_price} ر.ع</p>
        </span>
        <span className="flex gap-4 justify-between text-main-foreground">
          <p>ذهابا وإيابا</p>
          <p>{dio_price} ر.ع</p>
        </span>
      </div>

      <MotionLink
        to={href}
        className="opacity-0 duration-500 absolute bottom-6 right-4 text-sm text-white bg-main px-2 py-1 rounded-md"
      >
        عرض المزيد
      </MotionLink>
    </Block>
  );
};

export const Block = ({ className, ...rest }: any) => {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 [box-shadow:5px_6px_14px_0_rgba(0,0,0,0.5)] rounded-xl overflow-hidden min-h-72",
        className
      )}
      {...rest}
    />
  );
};
