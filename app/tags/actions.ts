"use server";

export async function cleanTags(
  _previousTags: string[],
  formData: FormData,
): Promise<string[]> {
  const rawTags = formData.get("tags");
  const input = typeof rawTags === "string" ? rawTags : "";
  const cleanedTags = [...new Set(
    input
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean),
  )];

  console.log("Cleaned tags on the server:", cleanedTags);

  return cleanedTags;
}
