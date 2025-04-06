import PatientForm from "@/components/forms/PatientForm";
import Link from "@/components/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | PassKey Modal */}
      {/* <LeftSidebar /> */}
      <section className="container remove-scrollbar my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            alt="Logo"
            width={1000}
            height={1000}
            className="mb-12 w-fit h-10"
          />
          <PatientForm />
          <div className="mt-20 text-14-regulate flex justify-between">
            <p className="justify-items-end xl:text-left text-dark-600">
              © {new Date().getFullYear()} CarePluse
            </p>
            <Link
              href={"/?admin=true"}
              className="text-green-500 hover:text-green-400 transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </section>
      {/* <RightSidebar /> */}
      <Image
        src={"/assets/images/onboarding-img.png"}
        alt="Onboarding Image"
        width={1000}
        height={1000}
        className="side-img max-w-[50%]"
        style={{
          borderRadius: "31% 69% 41% 59% / 72% 28% 72% 28% ",
        }}
      />
    </div>
  );
}
