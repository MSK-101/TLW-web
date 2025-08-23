"use client";

import { useState } from "react";
import ShowSubscriptions from "./ShowSubscriptions";
import EditSubscriptions from "./EditSubscriptions";
import EditExtras from "./EditExtras";

export default function Subscriptions() {
  const [showSubscriptions, setShowSubscriptions] = useState(true);
  const [editSubscriptions, setEditSubscriptions] = useState(false);
  const [editExtras, setEditExtras] = useState(false);

  return (
    <>
      {showSubscriptions && (
        <ShowSubscriptions
          setShowSubscriptions={setShowSubscriptions}
          setEditSubscriptions={setEditSubscriptions}
          setEditExtras={setEditExtras}
        />
      )}

      {editSubscriptions && (
        <EditSubscriptions
          setShowSubscriptions={setShowSubscriptions}
          setEditSubscriptions={setEditSubscriptions}
        />
      )}

      {editExtras && (
        <EditExtras
          setShowSubscriptions={setShowSubscriptions}
          setEditExtras={setEditExtras}
        />
      )}
    </>
  );
}
