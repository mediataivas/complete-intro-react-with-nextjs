"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function adoptPet(pet) {
  if (pet) {
    cookies().set("adoptedPet", JSON.stringify(pet));
  }

  redirect("/");
}
