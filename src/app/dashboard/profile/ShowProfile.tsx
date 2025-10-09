import { Button } from "@/components/ui/button";
import { fetchAuthSession } from "aws-amplify/auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";

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

interface Exchange {
  id: string;
  name: string;
  logo: string;
}

interface HardwareWallet {
  id: string;
  name: string;
}

export default function ShowProfile({
  user,
  enableEditMode,
}: {
  user: UserData;
  enableEditMode: () => void;
}) {
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [userHardwareWallets, setUserHardwareWallets] = useState<
    HardwareWallet[]
  >([]);
  const [userExchanges, setUserExchanges] = useState<Exchange[]>([]);

  useEffect(() => {
    fetchExchanges();
    fetchUserExchanges();
    fetchUserHardwareWallets();
  }, []);

  const fetchExchanges = async () => {
    const session = await fetchAuthSession();
    const response = await fetch(
      "https://api.thelimitlessway.nl/api/v1/exchange/list",
      {
        headers: {
          Authorization: `Bearer ${session.tokens?.idToken?.toString()}`,
        },
      }
    );
    const data = await response.json();
    const exchanges = data.data.map((exchange: any) => ({
      id: exchange.id,
      name: exchange.exchangeName,
      logo: exchange.icon.Mobile,
    }));

    setExchanges(exchanges);
  };

  const fetchUserExchanges = async () => {
    const session = await fetchAuthSession();
    const response = await fetch(
      "https://api.thelimitlessway.nl/api/v1/user/get-user-exchanges",
      {
        headers: {
          Authorization: `Bearer ${session.tokens?.idToken?.toString()}`,
        },
      }
    );
    const data = await response.json();
    const exchanges = data.data.map((exchange: any) => ({
      id: exchange.exchangeId,
      name: exchange.exchangeName,
      logo: exchange.iconUrl,
    }));

    setUserExchanges(exchanges);
  };

  const fetchUserHardwareWallets = async () => {
    const session = await fetchAuthSession();
    const response = await fetch(
      "https://api.thelimitlessway.nl/api/v1/hardwarewallet/user-hardwarewallet-list",
      {
        headers: {
          Authorization: `Bearer ${session.tokens?.idToken?.toString()}`,
        },
      }
    );
    const data = await response.json();

    const hardwareWallets = data.data.map((wallet: any) => ({
      id: wallet.id,
      name: wallet.name,
    }));

    setUserHardwareWallets(hardwareWallets);
  };

  return (
    <>
      <h1 className="text-center text-3xl md:text-4xl my-20">
        Accountoverzicht
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-white p-7 md:p-10 rounded-3xl shadow">
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
              <div className="text-md leading-6">{user.firstName}</div>
              <div className="text-md leading-4">{user.lastName}</div>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-1">
            <h2 className="font-medium">Contactgegevens</h2>
            <div className="text-gray-700">{user.email}</div>
            <div className="text-gray-700">{user.phone}</div>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <h2 className="font-medium">Adres</h2>
            <div className="text-gray-700">{user.address.street}</div>
            <div className="text-gray-700">
              {user.address.postalCode}, {user.address.city}
            </div>
          </div>
          {user.bank && (
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="font-medium">Bankrekening</h2>
              <div className="text-gray-700">{user.bank}</div>
            </div>
          )}

          <Button className="mt-10" onClick={enableEditMode}>
            Wijzig mijn gegevens
          </Button>
        </div>

        <div className="bg-white p-7 md:p-10 rounded-3xl shadow">
          <h2 className="mb-10 text-2xl">Exchanges</h2>
          <div className="flex flex-col gap-3 mb-15">
            {exchanges.map((exchange) => {
              return (
                <div className="flex items-center gap-5" key={exchange.name}>
                  <div className="flex gap-2 items-center">
                    {!exchange.logo && (
                      <FontAwesomeIcon
                        icon={faCoins}
                        fontSize={25}
                        color="#4a4a4a"
                        className="mx-[4px]"
                      />
                    )}
                    {exchange.logo && (
                      <Image
                        src={exchange.logo}
                        alt={exchange.name}
                        width={32}
                        height={32}
                      />
                    )}

                    <div className="font-bold">{exchange.name}</div>
                  </div>
                  {userExchanges.find(
                    (userExchange) => userExchange.id === exchange.id
                  ) && (
                    <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                      Gekoppeld
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <h2 className="mb-7 text-2xl">Gekoppelde hardware wallets</h2>
          <div className="flex flex-col gap-2">
            {userHardwareWallets.map((wallet) => {
              return <div key={wallet.name}>{wallet.name}</div>;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
