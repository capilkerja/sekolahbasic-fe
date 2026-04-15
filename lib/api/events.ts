export async function getUpcomingEvents() {
  try {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/school-events?filter[upcoming]=true&page[size]=3`,
      // {
      //   next: { revalidate: 300 },
      // }
    );

    if (!res.ok) return [];

    const json = await res.json();
    return json.data ?? [];
  } catch {
    return [];
  }
}
  