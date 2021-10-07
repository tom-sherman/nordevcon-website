# Nor Dev Con 2022 Website

The website data for speakers and schedule is sourced from an Airtable spreadsheet via the Airtable API.

## Installation and development

**In progress 2022 version can be found on the `2022` branch.**

1. Clone the repo
2. Copy `.env.example` file to `.env`.
3. Set `NEXT_PUBLIC_AIRTABLE_API_KEY` in `.env` to an Airtable API key for an account with access to the Nor Dev Con Airtable (Sign up for Airtable, then ask Alex or Shaun to share the sheet with you).
4. Install dependencies with `npm install`
5. Launch the development server: `npm run dev`
6. Visit http://localhost:3000
