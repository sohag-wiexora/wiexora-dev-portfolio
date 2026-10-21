import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf">
      <p className="mono">Error 404</p>
      <h1>Not found</h1>
      <p className="muted">That page does not exist or has moved.</p>
      <p>
        <Link href="/" className="btn btn-primary">Back to WIEXORA</Link>
      </p>
    </section>
  );
}
