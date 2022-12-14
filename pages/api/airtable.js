const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const apiBase = "https://api.airtable.com/v0/appsFsySYgjKqDoLu";

async function get(endpoint, cache) {
  const url = `${apiBase}${endpoint}`
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  })
    .then((res) => {
      if (cache) {
        const cloned = res.clone();
        cloned.headers.set("Cache-Control", "max-age=60");
        cache.put(url, cloned);
      }
      return res.json();
    })
    .then((json) => json.records);
}

export async function getSchedule(cache) {
  return get("/Schedule", cache);
}

export async function getSponsors() {
  return get("/Sponsors");
}
