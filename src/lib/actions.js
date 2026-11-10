"use server";

import { revalidatePath } from "next/cache";

export async function revalidateDestinationPaths(id) {
  revalidatePath("/destinations");
  revalidatePath(`/destinations/${id}`);
}

export async function revalidateDestinationList() {
  revalidatePath("/destinations");
}
