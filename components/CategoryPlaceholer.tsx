import Link from "next/link";
import { ReactNode } from "react";

interface CategoryPlaceholerProps {
  id: number;
  icon: ReactNode;
  text: string;
}

export const CategoryPlaceholer: React.FC<CategoryPlaceholerProps> = ({
  id,
  icon,
  text,
}) => {
  return (
    <div>
      <CategoryCard id={id} icon={icon} text={text} />
    </div>
  );
};

interface CategoryCardProps {
  id: number;
  icon: ReactNode;
  text: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  icon,
  text,
}) => {
  return (
    <>
      <Link href={`/category/${id}`} key={id}>
        <div className="flex flex-col justify-center items-center gap-4 w-[200px] h-[200px] border border-gray-300 rounded-md hover:bg-primary hover:text-white hover:border-none duration-300">
          {icon}
          {text}
        </div>
      </Link>
    </>
  );
};
