import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
export const Bottom = () => {
  return (
    <div className=" w-full h-77 flex flex-col justify-between bg-[#4338CA] py-10 px-5 gap-7 text-[#FAFAFA] relative top-16">
      <div className="flex flex-col justify-between gap-3">
        <div className="w-25 h-5 flex gap-2 items-center">
          <Film className="size-5 lg:size-6" />
          <h1 className="italic text-base font-bold xl:text-lg">Movie Z</h1>
        </div>
        <h5 className="text-sm ">© 2026 Movie Z. All Rights Reserved.</h5>
      </div>

      <div className="flex justify-between text-sm gap-5">
        <div className="h-34 flex flex-col justify-between">
          <h5>Contact Information</h5>
          <div className="flex justify-between items-center gap-4">
            <Mail className="size-4" />
            <div className="">
              <h5 className="font-medium ">Email:</h5>
              <p>bb.munkhjin@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="size-4" />
            <div>
              <h5 className="font-medium">Phone:</h5>
              <p>+976 88111426</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between text-sm w-28 h-37">
          <h5>Follow us </h5>
          <h5>Facebook</h5>
          <h5>Instagram</h5>
          <h5>Twitter</h5>
          <h5>Youtube</h5>
        </div>
      </div>
    </div>
  );
};
