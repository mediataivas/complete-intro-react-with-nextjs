"use server";

import { cookies } from "next/headers";

export default async function getAdoptedPetAction() {
  const adoptedPetCookie = cookies().get("adoptedPet");
  return JSON.parse(adoptedPetCookie?.value);
}
