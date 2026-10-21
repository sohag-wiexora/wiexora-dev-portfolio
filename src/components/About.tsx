import Image from "next/image";

// TODO(owner): replace with your own words. This draft makes no claims about history or achievements.
export function About() {
  return (
    <div className="two">
      <div className="about-photo-wrap">
        <Image
          src="/images/editorial/About Me Image.png"
          width={500}
          height={600}
          alt="Md Sohag Islam — the person behind WIEXORA"
          className="about-photo"
          sizes="(min-width: 960px) 22rem, 80vw"
        />
        <p className="mono" style={{ marginTop: "1rem" }}>The person behind WIEXORA</p>
      </div>
      <div className="prose">
        <p>
          I build web products one careful decision at a time. <strong>Quality</strong> to me means the thing works when
          inputs are wrong, the interface stays usable on a phone, and the next person can read the code.
        </p>
        <p>
          I am most interested in problems where reliability and security matter: accounts, forms that handle real
          data, and workflows that could be improved with automation or AI.
        </p>
        <p>
          <strong>Communication</strong> is written and specific. You will know what is in scope, what it costs, what
          has been tested and what has not, before and after the work.
        </p>
      </div>
    </div>
  );
}
