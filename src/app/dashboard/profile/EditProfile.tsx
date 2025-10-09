import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNotification } from "@/contexts/NotificationContext";
import { fetchAuthSession } from "aws-amplify/auth";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Address {
  street: string;
  postalCode: string;
  city: string;
}
interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  bank?: string;
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
  const { showError, showSuccess } = useNotification();

  const saveChangesHandler = async () => {
    const session = await fetchAuthSession();
    const updateData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phone,
      streetAndNumber: data.address.street,
      postalCode: data.address.postalCode,
      city: data.address.city,
    };

    const response = await fetch(
      "https://api.thelimitlessway.nl/api/v1/user/update-user-profile",
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${session.tokens?.idToken?.toString()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    );
    showSuccess("Gegevens opgeslagen", "Je gegevens zijn succesvol opgeslagen");
    setUser(data);
    disableEditMode();
  };

  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl my-20">
        Gegevens wijzigen
      </h1>

      <div className="md:px-[10%]">
        <div className="bg-white p-7 md:p-10 rounded-3xl shadow">
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
                  defaultValue={data.firstName}
                  disabled
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lastname">Achternaam</Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Achternaam"
                  defaultValue={data.lastName}
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
                  value={data.address?.street}
                  onChange={(event) =>
                    setData({
                      ...data,
                      address: { ...data.address, street: event.target.value },
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
                  value={data.address?.postalCode}
                  onChange={(event) =>
                    setData({
                      ...data,
                      address: {
                        ...data.address,
                        postalCode: event.target.value,
                      },
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="addressLine2">Place</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="Place"
                  value={data.address?.city}
                  onChange={(event) =>
                    setData({
                      ...data,
                      address: {
                        ...data.address,
                        city: event.target.value,
                      },
                    })
                  }
                />
              </div>
            </div>

            {data.bank && (
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
            )}
          </div>

          <div className="flex justify-center gap-3">
            <Button className="mt-10" onClick={disableEditMode}>
              Terug
            </Button>
            <Button className="mt-10" onClick={saveChangesHandler}>
              Wijzigingen opslaan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
