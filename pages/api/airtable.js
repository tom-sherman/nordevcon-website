const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;
const apiBase = "https://api.airtable.com/v0/appngnoiyvyyacD6l";

async function callAPI(endpoint, body = null) {
  const url = `${apiBase}${endpoint}?api_key=${apiKey}&limit=100`;

  let fetcher = (body == null)
    ? fetch(url)
    : fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

  return fetcher
    .then(res => res.json())
    .then(json => json.data ? json.data.records : [])
}

export async function getSpeakers() {
  return callAPI("/Speakers");
}

export async function getSchedule() {
  return callAPI("/Schedule");
}

export async function getSponsors() {
  return callAPI("/Sponsors");
}
