import { cn } from "@/lib/utils";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2 className={cn("text-3xl font-bold text-gray-500", className)}>
    {children}
  </h2>
);
export default Heading;
