import Image from "next/image";
import { Button } from "./ui/button";

interface IButtonProps {
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}
const SubmitButton = ({ isLoading, className, children }: IButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "w-full shad-primary-btn"}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          Loading...
          <Image
            src={"/assets/icons/loader.svg"}
            alt="loader icon"
            width={24}
            height={24}
            className="animate-spin"
          />
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
