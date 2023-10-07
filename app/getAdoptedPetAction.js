"use server";

import { cookies } from "next/headers";

export default async function getAdoptedPetAction() {
  const adoptedPetCookie = cookies().get("adoptedPet");
  if (adoptedPetCookie?.value) {
    return JSON.parse(adoptedPetCookie?.value);
  }
  return null;
}
