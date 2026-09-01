import { createClient } from "@supabase/supabase-js";

// Remplace ces deux valeurs par celles de ton projet Supabase
// (Project Settings → API → Project URL / anon public key)
const SUPABASE_URL = "https://xtqgwuzfpkdbymtooira.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Ebtaf_WyGefOGCm2UPj1cw_yKLg-Hra";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Identifiant simple pour retrouver le profil de cet appareil.
// À remplacer plus tard par une vraie authentification (Google / téléphone vérifié).
export function getDeviceId() {
  let id = localStorage.getItem("agriflow_device_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("agriflow_device_id", id);
  }
  return id;
}

// Récupère le profil existant pour cet appareil, ou en crée un nouveau.
export async function getOrCreateProfile() {
  const deviceId = getDeviceId();

  const { data: existing, error: fetchError } = await supabase
    .from("profiles")
    .select("*")
    .eq("device_id", deviceId)
    .maybeSingle();

  if (fetchError) {
    console.error("Erreur lors de la recherche du profil :", fetchError);
    return null;
  }

  if (existing) return existing;

  const { data: created, error: insertError } = await supabase
    .from("profiles")
    .insert({ device_id: deviceId })
    .select()
    .single();

  if (insertError) {
    console.error("Erreur lors de la création du profil :", insertError);
    return null;
  }

  return created;
}

// Enregistre une entrée (production, stock, ventes ou depenses) pour un profil donné.
// Exemple d'appel :
// saveEntry(profile.id, "ventes", "2026-09-01", { montant: 120, produit: "tomates" })
export async function saveEntry(profileId, type, date, payload) {
  const { data, error } = await supabase
    .from("entries")
    .insert({ profile_id: profileId, type, date, payload })
    .select()
    .single();

  if (error) {
    console.error("Erreur lors de l'enregistrement de l'entrée :", error);
    return null;
  }

  return data;
}

// Récupère toutes les entrées d'un type donné pour un profil (ex: toutes les ventes).
export async function getEntries(profileId, type) {
  const { data, error } = await supabase
    .from("entries")
    .select("*")
    .eq("profile_id", profileId)
    .eq("type", type)
    .order("date", { ascending: false });

  if (error) {
    console.error("Erreur lors de la récupération des entrées :", error);
    return [];
  }

  return data;
}
