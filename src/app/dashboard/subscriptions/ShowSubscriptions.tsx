import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

function DownloadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 10L12 15L17 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V3"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ShowSubscriptions({
  setShowSubscriptions,
  setEditSubscriptions,
  setEditExtras,
}: {
  setShowSubscriptions: (showSubscriptions: boolean) => void;
  setEditSubscriptions: (editSubscriptions: boolean) => void;
  setEditExtras: (editExtras: boolean) => void;
}) {
  const [cancelSubscription, setCancelSubscription] = useState(false);

  return (
    <>
      <h1 className="flex justify-center text-4xl my-20">
        Abonnement en facturering
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="bg-gray-50 p-10 rounded-3xl shadow">
          <h2 className="mb-10 text-2xl">Mijn abonnement</h2>

          <div className="flex items-center gap-5 mb-10">
            <div className="rounded bg-gray-950 px-2 h-12">
              <Image
                src={"/subscriptions/basic.png"}
                width={70}
                height={70}
                alt="Basic"
                className="-translate-y-6"
              />
            </div>
            <div className="text-lg font-bold">Basic</div>
            <div className="text-sm -ml-2">€ xx p/m</div>
          </div>

          <div className="flex gap-4 mb-15">
            <Button
              onClick={() => {
                setShowSubscriptions(false);
                setEditSubscriptions(true);
              }}
              className="cursor-pointer"
            >
              Abonnement wijzigen
            </Button>
            <Button
              variant={"ghost"}
              className="text-[#7F65CA] cursor-pointer"
              onClick={() => setCancelSubscription(true)}
            >
              Abonnement wijzigen
            </Button>
          </div>

          <h2 className="mb-10 text-2xl">Extra's</h2>
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex gap-5">
              <div className="font-medium">Dictum aliquam</div>
              <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                tot 00 juni 2025
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-medium">Urna sit elit vitae purus</div>
              <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                tot 00 juni 2025
              </div>
            </div>
            <div className="flex gap-5">
              <div className="font-medium">Iaculis quam</div>
              <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
                tot 00 juni 2025
              </div>
            </div>
          </div>

          <Button
            className="cursor-pointer"
            onClick={() => {
              setShowSubscriptions(false);
              setEditExtras(true);
            }}
          >
            Extra's toevoegen
          </Button>
        </div>

        <div className="bg-gray-50 p-10 rounded-3xl shadow">
          <h2 className="mb-10 text-2xl">Mijn facturen</h2>

          <div className="flex gap-5">
            <div className="font-medium">Volgende incasso:</div>
            <div className="bg-[#E6C7FF] text-[#6028AD] rounded-md px-2 py-1 text-sm">
              tot 00 juni 2025
            </div>
          </div>

          <div className="mb-5">
            <div className="flex items-center justify-between not-last:border-b py-2">
              <div className="flex flex-col">
                <div>Documentnaam arcu elementum</div>
                <div className="text-gray-400">
                  Periode: 00-00-0000 tot 00-00-0000
                </div>
              </div>
              <div className="w-10 aspect-square rounded-md bg-gray-950 flex justify-center items-center">
                <DownloadIcon />
              </div>
            </div>
            <div className="flex items-center justify-between not-last:border-b py-2">
              <div className="flex flex-col">
                <div>Documentnaam arcu elementum</div>
                <div className="text-gray-400">
                  Periode: 00-00-0000 tot 00-00-0000
                </div>
              </div>
              <div className="w-10 aspect-square rounded-md bg-gray-950 flex justify-center items-center">
                <DownloadIcon />
              </div>
            </div>
            <div className="flex items-center justify-between not-last:border-b py-2">
              <div className="flex flex-col">
                <div>Documentnaam arcu elementum</div>
                <div className="text-gray-400">
                  Periode: 00-00-0000 tot 00-00-0000
                </div>
              </div>
              <div className="w-10 aspect-square rounded-md bg-gray-950 flex justify-center items-center">
                <DownloadIcon />
              </div>
            </div>
            <div className="flex items-center justify-between not-last:border-b py-2">
              <div className="flex flex-col">
                <div>Documentnaam arcu elementum</div>
                <div className="text-gray-400">
                  Periode: 00-00-0000 tot 00-00-0000
                </div>
              </div>
              <div className="w-10 aspect-square rounded-md bg-gray-950 flex justify-center items-center">
                <DownloadIcon />
              </div>
            </div>
            <div className="flex items-center justify-between not-last:border-b py-2">
              <div className="flex flex-col">
                <div>Documentnaam arcu elementum</div>
                <div className="text-gray-400">
                  Periode: 00-00-0000 tot 00-00-0000
                </div>
              </div>
              <div className="w-10 aspect-square rounded-md bg-gray-950 flex justify-center items-center">
                <DownloadIcon />
              </div>
            </div>
          </div>

          <Button>Toon alles</Button>
        </div>
      </div>

      <Modal
        title="Abonnement opzeggen"
        description="Jammer dat je wilt opzeggen Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt."
        open={cancelSubscription}
        setOpen={setCancelSubscription}
      >
        <div className="flex flex-col gap-3">
          <Textarea placeholder="Waarom wil je opzeggen?" rows={10} />
          <Button
            onClick={() => {
              setCancelSubscription(false);
            }}
          >
            Bevestigen en terug naar Free
          </Button>
        </div>
      </Modal>
    </>
  );
}
