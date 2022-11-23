const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const apiBase = "https://api.airtable.com/v0/appsFsySYgjKqDoLu";

async function get(endpoint, body = null) {
  return fetch(`${apiBase}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => res.json())
    .then((json) => json.records);
}

export async function getSchedule() {
  return get("/Schedule");
}

export async function getSponsors() {
  return get("/Sponsors");
}
