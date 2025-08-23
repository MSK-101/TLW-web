import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function EditProfile({
  user,
  setUser,
  disableEditMode,
}: {
  user: UserData;
  setUser: (user: UserData) => void;
  disableEditMode: () => void;
}) {
  const [data, setData] = useState(user);
  const [open2fa, setOpen2fa] = useState(false);
  const [open2faApp, setOpen2faApp] = useState(false);
  const [open2faSms, setOpen2faSms] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const saveChangesHandler = () => {
    setOpen2fa(false);
    setOpen2faApp(false);
    setOpenSuccess(false);
    setUser(data);
    disableEditMode();
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl my-20">Gegevens wijzigen</h1>

      <div className="px-[10%]">
        <div className="bg-gray-50 p-10 rounded-3xl shadow">
          <div className="flex gap-3 items-center">
            <Image
              src={"/user-purple.svg"}
              width="100"
              height="100"
              alt="User"
              className={"w-15"}
            />
            <div className="text-md text-[#7F65CA]">Wijzig afbeelding</div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="firstname">Voornaam</Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Voornaam"
                  defaultValue={data.firstname}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastname">Achternaam</Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Achternaam"
                  defaultValue={data.lastname}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-mail"
                  value={data.email}
                  onChange={(event) =>
                    setData({ ...data, email: event.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Telefoonnummer</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefoonnummer"
                  value={data.phone}
                  onChange={(event) =>
                    setData({ ...data, phone: event.target.value })
                  }
                />
              </div>

              <p className="mt-5 text-sm">
                Adres is niet verplicht nec est in ultricies vestibulum nulla
                eget.
              </p>

              <div className="flex flex-col gap-2">
                <Label htmlFor="addressLine1">Straat en huisnummer</Label>
                <Input
                  id="addressLine1"
                  type="text"
                  placeholder="Straat en huisnummer"
                  value={data.address.line_1}
                  onChange={(event) =>
                    setData({
                      ...data,
                      address: { ...data.address, line_1: event.target.value },
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="addressLine2">Postcode</Label>
                <Input
                  id="addressLine2"
                  type="text"
                  placeholder="Postcode"
                  value={data.address.line_2}
                  onChange={(event) =>
                    setData({
                      ...data,
                      address: { ...data.address, line_2: event.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <Input type="text" placeholder="IDEAL" defaultValue={"IDEAL"} />
              <div className="flex flex-col gap-2">
                <Label htmlFor="bank">IBAN</Label>
                <Input
                  id="bank"
                  type="text"
                  placeholder="IBAN"
                  value={data.bank}
                  onChange={(event) =>
                    setData({ ...data, bank: event.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button className="mt-10" onClick={disableEditMode}>
              Terug
            </Button>
            <Button className="mt-10" onClick={() => setOpen2fa(true)}>
              Wijzigingen opslaan
            </Button>
          </div>
        </div>
      </div>

      <Modal
        title="Tweestapsverificatie opnieuw instellen"
        description="Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis lorem. "
        open={open2fa}
        setOpen={setOpen2fa}
      >
        <div className="flex flex-col gap-3">
          <Button
            variant={"secondary"}
            onClick={() => {
              setOpen2faApp(true);
              setOpen2fa(false);
            }}
          >
            Authenticator app
          </Button>
          <Button
            variant={"secondary"}
            onClick={() => {
              setOpen2faSms(true);
              setOpen2fa(false);
            }}
          >
            Stuur SMS code
          </Button>
        </div>
      </Modal>

      <Modal
        title="Tweestapsverificatie opnieuw instellen"
        description="Authenticator app non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis lorem. "
        open={open2faApp}
        setOpen={setOpen2faApp}
      >
        <div className="flex flex-col gap-3">
          <Input type="text" value={"JBSWY3DPEHPK3PXP"} disabled />
          <Input
            type="text"
            placeholder="Voer de code van je authenticator app in"
          />
          <div className="flex items-center gap-3 my-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Onthoud dit apparaat</Label>
          </div>
          <Button
            onClick={() => {
              setOpen2faApp(false);
              setOpenSuccess(true);
            }}
          >
            Verifiëren
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => {
              setOpen2fa(true);
              setOpen2faApp(false);
            }}
          >
            Terug
          </Button>
        </div>
      </Modal>

      <Modal
        title="Tweestapsverificatie opnieuw instellen"
        description="SMS non ultrices ac quis id tincidunt cursus arcu imperdiet elementum. Vitae nam sit eget nunc iaculis lorem. "
        open={open2faSms}
        setOpen={setOpen2faSms}
      >
        <div className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Voer de code van je authenticator app in"
          />
          <div className="flex items-center gap-3 my-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Onthoud dit apparaat</Label>
          </div>

          <Link href="#" className="text-[#6028AD] text-sm">
            SMS opnieuw versturen
          </Link>

          <Button
            onClick={() => {
              setOpen2faSms(false);
              setOpenSuccess(true);
            }}
          >
            Verifiëren
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => {
              setOpen2fa(true);
              setOpen2faSms(false);
            }}
          >
            Terug
          </Button>
        </div>
      </Modal>

      <Modal title="" open={openSuccess} setOpen={setOpenSuccess}>
        <div className="flex flex-col items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M36.6668 18.4664V19.9997C36.6648 23.5937 35.501 27.0908 33.3491 29.9694C31.1971 32.848 28.1723 34.9538 24.7258 35.9729C21.2792 36.9919 17.5956 36.8695 14.2243 35.624C10.853 34.3785 7.97459 32.0765 6.01843 29.0615C4.06227 26.0464 3.13315 22.4798 3.36962 18.8935C3.6061 15.3073 4.99551 11.8936 7.33063 9.16148C9.66575 6.42939 12.8215 4.52533 16.3271 3.73327C19.8328 2.94121 23.5006 3.30359 26.7835 4.76636"
              stroke="#7F65CA"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.6667 6.66675L20 23.3501L15 18.3501"
              stroke="#7F65CA"
              strokeWidth="3.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h1 className="text-2xl text-center my-5">
            Tweestapsverificatie is opnieuw ingesteld
          </h1>
          <Button className="w-full" onClick={saveChangesHandler}>
            Sluiten
          </Button>
        </div>
      </Modal>
    </>
  );
}
