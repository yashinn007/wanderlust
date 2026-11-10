"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaDeleteLeft } from "react-icons/fa6";

export function BookingDeleteAlert({ bookingId }) {
  const handleCancelBooking = async () => {
    const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    window.location.reload();
  };

  return (
    <AlertDialog>
      <Button
        variant="outline"
        className="rounded-none border-red-500 text-red-500"
      >
        <FaDeleteLeft></FaDeleteLeft> Cancle
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body></AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleCancelBooking}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
