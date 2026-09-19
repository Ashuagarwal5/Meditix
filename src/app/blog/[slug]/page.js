import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return {
    title: post ? `${post.title} | Meditix Journal` : "Article not found",
    description: post?.description,
  };
}
export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <main className="bg-white font-[Arial,Helvetica,sans-serif] text-[#173a3e] [&_a]:outline-offset-[5px] [&_button]:outline-offset-[5px] [&_input]:outline-offset-[5px] [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-[#007f91] [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-[#007f91] [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-[#007f91] motion-reduce:[&_*]:transition-none">
      <article className="mx-auto max-w-[920px] px-[30px] pt-[55px] pb-20 max-[760px]:px-[22px] max-[760px]:pt-[35px] max-[760px]:pb-[60px] [&_h1]:max-w-[820px] [&_h1]:text-[clamp(35px,5vw,62px)] [&_h1]:font-medium [&_h1]:leading-[1.1] [&_h1]:tracking-[-2px]">
        <Link
          href="/blog"
          className="mt-auto inline-flex items-center gap-2.5 self-start text-xs font-semibold text-[#007f91] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]"
        >
          ← Back to the journal
        </Link>
        <div className="mt-[45px] mb-[14px] flex items-center gap-5 text-[11px] text-[#617779] [&>span]:inline-flex [&>span]:items-center [&>span]:gap-[5px] [&>span:first-child]:font-semibold [&>span:first-child]:text-[#007f91]">
          <span>{post.category}</span>
          <span>{post.readTime} min read</span>
        </div>
        <h1>{post.title}</h1>
        <p className="my-6 text-[19px] leading-[1.7] text-[#637775]">
          {post.description}
        </p>
        <div className="flex items-center gap-[11px] text-[11px] [&_strong]:font-semibold [&_small]:mt-1 [&_small]:block [&_small]:text-[10px] [&_small]:text-[#788687]">
          <span className="grid size-[38px] place-items-center rounded-full bg-[#e2eeeb] font-[Georgia,serif] text-2xl font-bold text-[#007f91]">
            m.
          </span>
          <strong>Meditix Editorial</strong>
        </div>
        <div className="relative my-[35px] aspect-[1.9] overflow-hidden rounded-[18px] [&_img]:object-cover">
          <Image
            src={post.image}
            alt="Pharmacy operations and teamwork"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 860px"
          />
        </div>
        <div className="mx-auto max-w-[690px] [&_h2]:mt-[34px] [&_h2]:mb-[14px] [&_h2]:text-[26px] [&_h2]:tracking-[-0.5px] [&_p]:text-[17px] [&_p]:leading-[1.9] [&_p]:text-[#586d69]">
          {post.sections.map(([title, body]) => (
            <section key={title}>
              <h2>{title}</h2>
              <p>{body}</p>
            </section>
          ))}
        </div>
        <aside className="mt-[45px] mb-[30px] rounded-[14px] bg-[#eef8f3] p-[30px] [&_h2]:text-2xl [&_p]:mt-3 [&_p]:mb-5 [&_p]:text-[#586d69]">
          <h2>Put your next idea into practice.</h2>
          <p>
            Explore how Meditix can support your pharmacy’s everyday operations.
          </p>
          <Link
            href="/contact"
            className="mt-auto inline-flex items-center gap-2.5 self-start text-xs font-semibold text-[#007f91] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]"
          >
            Talk to our team ↗
          </Link>
        </aside>
        <Link
          href="/blog"
          className="mt-auto inline-flex items-center gap-2.5 self-start text-xs font-semibold text-[#007f91] [&_svg]:transition-transform [&_svg]:duration-200 hover:[&_svg]:translate-x-[3px] hover:[&_svg]:-translate-y-[3px]"
        >
          ← Explore more stories
        </Link>
      </article>
    </main>
  );
}
