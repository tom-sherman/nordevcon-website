import axios from "axios";

const apiKey = process.env.AIRTABLE_API_KEY;
const apiBase = "https://api.airtable.com/v0/app4lReXoXZ1NAULm";

async function callAPI(endpoint, body = null) {
  try {
    const url = `${apiBase}${endpoint}?api_key=${apiKey}&limit=100`;
    if (body) {
      return axios.post(url, body);
    }
    return axios.get(url);
  } catch (e) {
    console.error(e);
  }
}

export async function getSpeakers() {
  return callAPI("/Speakers");
}
