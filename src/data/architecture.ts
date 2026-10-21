export type Layer = {
  id: string;
  name: string;
  plain: string;
  security: string;
};

export const layers: Layer[] = [
  { id: "interface", name: "INTERFACE", plain: "What people see and touch: layout, forms, navigation.", security: "Escape output, validate input early, avoid exposing secrets to the browser." },
  { id: "application", name: "APPLICATION", plain: "The logic that decides what happens when someone acts.", security: "Check permissions on every action, never trust the client." },
  { id: "api", name: "API", plain: "The doorway between the interface and your data.", security: "Validate every request, rate-limit, return safe error messages." },
  { id: "data", name: "DATA", plain: "Where information is stored and kept consistent.", security: "Least-privilege access, parameterized queries, backups." },
  { id: "infrastructure", name: "INFRASTRUCTURE", plain: "Hosting, networking and the release pipeline.", security: "Secrets in environment config, minimal exposure, repeatable deploys." },
  { id: "monitoring", name: "MONITORING", plain: "Knowing when something breaks, before users tell you.", security: "Log without leaking sensitive data, alert on abnormal behavior." },
];
