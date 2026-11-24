/**
 * HubSpot Forms API client. The site renders its own form UI and posts the answers to the
 * HubSpot forms below, so submissions land in HubSpot exactly as if the embed had been used.
 * The endpoint is public and needs no token (the portal and form IDs are not secrets).
 * Field names must match the internal names of the fields on each HubSpot form.
 */
const portalId = "45531511";

export const hubspotForms = {
  contact: "dca7e4c4-c3e6-4339-a18b-e6e868de149e",
  talentNetwork: "9d6006ce-d86f-4f15-9171-53658f5e3cf4",
} as const;

export type HubSpotFormId = (typeof hubspotForms)[keyof typeof hubspotForms];

/** A string, or a list of strings for multi-select fields (sent to HubSpot joined by ";"). */
type FieldValue = string | readonly string[] | undefined;

/** Browser only. Throws when HubSpot rejects the submission or the network fails. */
export async function submitHubSpotForm(formId: HubSpotFormId, values: Record<string, FieldValue>) {
  const fields = Object.entries(values).flatMap(([name, value]) => {
    const joined = (typeof value === "string" ? value : (value ?? []).join(";")).trim();
    return joined ? [{ objectTypeId: "0-1", name, value: joined }] : [];
  });

  // Ties the submission to the visitor's HubSpot tracking session when the tracking script is present.
  const hutk = document.cookie.match(/(?:^|;\s*)hubspotutk=([^;]+)/)?.[1];

  const res = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        context: { hutk, pageUri: window.location.href, pageName: document.title },
      }),
    },
  );
  if (!res.ok) throw new Error(`HubSpot responded ${res.status}`);
}
