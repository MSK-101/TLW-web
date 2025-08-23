import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Address {
  line_1: string;
  line_2: string;
}

interface UserData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: Address;
  bank: string;
}

export default function ShowProfile({
  user,
  enableEditMode,
}: {
  user: UserData;
  enableEditMode: () => void;
}) {
  return (
    <>
      <h1 className="flex justify-center text-4xl my-20">Accountoverzicht</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-gray-50 p-10 rounded-3xl shadow">
          <h2 className="mb-10 text-2xl">Mijn gegevens</h2>
          <div className="flex gap-3 items-center">
            <Image
              src={"/user-purple.svg"}
              width="100"
              height="100"
              alt="User"
              className={"w-15"}
            />
            <div className="flex flex-col font-medium">
              <div className="text-md leading-6">{user.firstname}</div>
              <div className="text-md leading-4">{user.lastname}</div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <h2 className="font-medium">Contactgegevens</h2>
            <div className="text-gray-700">{user.email}</div>
            <div className="text-gray-700">{user.phone}</div>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <h2 className="font-medium">Adres</h2>
            <div className="text-gray-700">{user.address.line_1}</div>
            <div className="text-gray-700">{user.address.line_2}</div>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <h2 className="font-medium">Bankrekening</h2>
            <div className="text-gray-700">{user.bank}</div>
          </div>

          <Button className="mt-10" onClick={enableEditMode}>
            Wijzig mijn gegevens
          </Button>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl shadow">
          <h2 className="mb-10 text-2xl">Exchanges</h2>
          <div className="flex flex-col gap-3 mb-15">
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M14.7644 5.12H23.0401L10.8218 25.6H2.56006L14.7644 5.12Z"
                    fill="black"
                  />
                  <path
                    d="M21.339 15.36H29.4399L23.4565 25.6H15.3599L21.339 15.36Z"
                    fill="black"
                  />
                </svg>

                <div className="font-bold">Bitvavo</div>
              </div>
              <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                Gekoppeld
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_152_3589)">
                    <path
                      d="M30.0247 18.8175L23.2854 7.52583C21.8079 5.17236 18.2049 5.14733 16.7793 7.62597L9.70303 19.3683C8.38103 21.5214 10.014 24.2254 12.658 24.2254H26.8364C29.5063 24.2254 31.5022 21.4463 30.0247 18.8175Z"
                      fill="#3156AA"
                    />
                    <path
                      d="M20.3038 19.6938L19.8891 18.9927C19.5003 18.3418 18.6449 16.9397 18.6449 16.9397L12.9424 7.37566C11.4649 5.24752 7.96566 5.07226 6.48819 7.75121L-0.147453 18.8425C-1.52124 21.1709 0.111751 24.2004 3.09261 24.2255H17.1933H23.2069H26.7839C23.1292 24.2505 21.9628 22.4228 20.3038 19.6938Z"
                      fill="#1972E2"
                    />
                    <path
                      d="M20.3045 19.6938L19.8898 18.9929C19.501 18.3419 18.6456 16.9398 18.6456 16.9398L14.9649 10.6806L9.67708 19.3935C8.35521 21.5466 9.98816 24.2506 12.6321 24.2506H17.1681H23.1817H26.7847C23.104 24.2255 21.9634 22.4229 20.3045 19.6938Z"
                      fill="url(#paint0_linear_152_3589)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_152_3589"
                      x1="7.79521"
                      y1="15.4346"
                      x2="24.0363"
                      y2="21.6482"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#264CA2" stopOpacity="0" />
                      <stop offset="1" stopColor="#234588" />
                    </linearGradient>
                    <clipPath id="clip0_152_3589">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="font-bold">Mexc</div>
              </div>
              <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                Gekoppeld
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex gap-2 items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="8"
                    viewBox="0 0 32 8"
                    fill="none"
                  >
                    <path
                      d="M3.4454 7.83925H0V0.438446H3.30699C4.91418 0.438446 5.85045 1.24913 5.85045 2.5173C5.85045 3.33826 5.24892 3.86889 4.83264 4.04566C5.32974 4.25322 5.96561 4.72096 5.96561 5.70875C5.96561 7.09079 4.91418 7.83925 3.4454 7.83925ZM3.17968 1.7278H1.60718V3.43227H3.17968C3.86168 3.43227 4.24327 3.08932 4.24327 2.57987C4.24327 2.07075 3.86168 1.7278 3.17968 1.7278ZM3.28375 4.73155H1.60718V6.55089H3.28375C4.01224 6.55089 4.35842 6.13511 4.35842 5.63592C4.35842 5.13706 4.01152 4.73155 3.28375 4.73155Z"
                      fill="#282828"
                    />
                    <path
                      d="M10.8675 4.80408V7.83928H9.2718V4.80408L6.79736 0.438477H8.54331L10.0811 3.42171L11.5957 0.438477H13.3413L10.8675 4.80408Z"
                      fill="#282828"
                    />
                    <path
                      d="M17.898 7.83928H14.4526V0.438477H17.7593C19.3665 0.438477 20.3031 1.24917 20.3031 2.51734C20.3031 3.33829 19.7016 3.86892 19.2853 4.04569C19.782 4.25325 20.4182 4.72099 20.4182 5.70878C20.4182 7.09082 19.3665 7.83928 17.898 7.83928ZM17.6323 1.72783H16.0598V3.4323H17.6323C18.3143 3.4323 18.6959 3.08935 18.6959 2.5799C18.6959 2.07078 18.3143 1.72783 17.6323 1.72783ZM17.736 4.73158H16.0598V6.55092H17.736C18.4649 6.55092 18.8111 6.13515 18.8111 5.63595C18.8111 5.13709 18.4649 4.73158 17.736 4.73158Z"
                      fill="#282828"
                    />
                    <path
                      d="M28.9632 1.72783V7.83994H27.356V1.72783H25.2056V0.438477H31.114V1.72783H28.9632Z"
                      fill="#282828"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="8"
                    viewBox="0 0 2 8"
                    fill="none"
                    className="translate-x-[22.2px] -translate-y-[10px]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.17627 0.23999H1.78345V7.64079H0.17627V0.23999Z"
                      fill="#F7A600"
                    />
                  </svg>
                </div>
                <div className="font-bold">ByBit</div>
              </div>
            </div>
          </div>

          <h2 className="mb-7 text-2xl">Gekoppelde hardware wallets</h2>
          <div className="flex flex-col gap-2">
            <div>Lorum Ipsum</div>
            <div>Lacus morbi id tincidunt</div>
          </div>
        </div>
      </div>
    </>
  );
}
