// Résumé data. Every empty array renders an honest "not provided yet" state.
// TODO(owner): fill with verified information only.
// To offer a download, place your real PDF at public/resume/cv.pdf. The link appears automatically.

export const resume = {
  name: "Md Sohag Islam",
  headline: "Independent digital engineer, WIEXORA",
  summary: "",
  skills: [] as string[],
  experience: [] as { role: string; org: string; period: string; notes: string[] }[],
  education: [] as { credential: string; school: string; period: string }[],
  certifications: [] as { name: string; issuer: string; year: string }[],
  projects: ["WIEXORA Portfolio"],
  contact: { email: "", location: "" },
};
