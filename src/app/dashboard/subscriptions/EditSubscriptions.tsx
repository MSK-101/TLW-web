"use client";

import { CheckIcon } from "@/components/icons";
import Modal from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function EditSubscriptions({
  setShowSubscriptions,
  setEditSubscriptions,
}: {
  setShowSubscriptions: (showSubscriptions: boolean) => void;
  setEditSubscriptions: (editSubscriptions: boolean) => void;
}) {
  const [plans, setPlans] = useState([
    {
      title: "Free",
      subTitle: "",
      image: "/subscriptions/free.png",
      tag: "",
      features: [
        "Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum",
        "Mauris pulvinar fermentum sed diam euismod quam nisi",
      ],
      active: false,
    },
    {
      title: "Basic",
      subTitle: "€ xx p/m",
      image: "/subscriptions/basic.png",
      tag: "",
      features: [
        "Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum",
        "Mauris pulvinar fermentum sed diam euismod quam nisi",
      ],
      active: true,
    },
    {
      title: "Pro",
      subTitle: "€ xx p/m",
      image: "/subscriptions/pro.png",
      tag: "Aanbevolen voor jou",
      features: [
        "Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum",
        "Mauris pulvinar fermentum sed diam euismod quam nisi",
      ],
      active: false,
    },
    {
      title: "Premium",
      subTitle: "€ xx p/m",
      image: "/subscriptions/premium.png",
      tag: "",
      features: [
        "Arcu tincidunt lacus et viverra. Non ultrices ac quis id tincidunt cursus arcu imperdiet elementum",
        "Mauris pulvinar fermentum sed diam euismod quam nisi",
        "Cras ridiculus velit dictum volutpat nibh morbi ut fames",
      ],
      active: false,
    },
  ]);

  const [openReferral, setOpenReferral] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const saveChangesHandler = () => {
    setEditSubscriptions(false);
    setShowSubscriptions(true);
  };

  const cancelChangesHandler = () => {
    setEditSubscriptions(false);
    setShowSubscriptions(true);
  };

  return (
    <>
      <h1 className="flex justify-center text-4xl mt-20">
        Wijzig je abonnement
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-15">
        {plans.map((plan, index) => {
          return (
            <div key={index} className="flex flex-col cursor-pointer">
              <Image
                src={plan.image}
                width={100}
                height={100}
                alt={plan.title}
                className="self-center -mb-12 z-10"
              />
              <div
                className={`rounded-3xl bg-gray-50 overflow-hidden ${
                  plan.active ? "shadow-2xl" : ""
                } hover:shadow-2xl`}
                onClick={() => {
                  setPlans((prevPlans) =>
                    prevPlans.map((p) => ({
                      ...p,
                      active: p.title === plan.title,
                    }))
                  );
                }}
              >
                <div
                  className={`flex gap-3 items-center justify-center ${
                    plan.active ? "bg-gray-950" : "bg-[#7F65CA]"
                  }  text-gray-50 pt-10 pb-5`}
                >
                  <div className="text-xl font-bold">{plan.title}</div>
                  <div className="text-sm">{plan.subTitle}</div>
                </div>
                <div className="flex flex-col gap-2 px-3 py-5">
                  {plan.tag && (
                    <div className="px-3 py-2 text-center rounded-lg bg-[#E6C7FF]">
                      {plan.tag}
                    </div>
                  )}
                  {plan.features.map((feature, index) => {
                    return (
                      <div key={index} className="grid grid-cols-[35px_1fr]">
                        <CheckIcon />
                        <div>{feature}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-3 mb-15">
        <Checkbox id="remember" className="border border-gray-700" />
        <Label htmlFor="remember" className="gap-1">
          Ik ga akkoord met de
          <Link href={"#"} className="text-[#7F65CA]">
            algemene voorwaarden
          </Link>
          en het
          <Link href={"#"} className="text-[#7F65CA]">
            privacybeleid
          </Link>
        </Label>
      </div>

      <div className="flex gap-4 justify-center">
        <Button className="cursor-pointer" onClick={cancelChangesHandler}>
          Terug
        </Button>
        <Button
          className="cursor-pointer"
          onClick={() => setOpenReferral(true)}
        >
          Bevestigen
        </Button>
      </div>

      <Modal
        title="Afrekenen"
        description="Ultricies consectetur cras arcu elementum pharetra mattis scelerisque nullam consectetur."
        open={openReferral}
        setOpen={setOpenReferral}
      >
        <div className="flex flex-col gap-3">
          <div className="font-bold">Productnaam - € xx p/m</div>
          <Input type="text" placeholder="Referral code" />
          <Button onClick={() => setOpenSuccess(true)}>Naar betaling</Button>
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
