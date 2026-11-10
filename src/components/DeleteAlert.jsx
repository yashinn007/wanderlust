"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaDeleteLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import { revalidateDestinationList } from "@/lib/actions";

export function DeleteAlert({ destination }) {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/destination/${destination._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        throw new Error(`Delete failed (${res.status})`);
      }

      await revalidateDestinationList();
      toast(`${destination.destinationName} deleted successfully`);
      router.replace("/destinations");
    } catch (error) {
      console.error("Failed to delete destination:", error);
      toast.error("Destination delete করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  return (
    <AlertDialog>
      <Button variant="outline" className="rounded-none text-red-500">
        <FaDeleteLeft />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete destination permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destination.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" variant="danger" onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
