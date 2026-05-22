export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-400">
          PERSONAL WEBSITE
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          曾进
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
          我是一名软件工程师，正在构建以 Java、Spring Boot、Next.js
          和数据库为核心的全栈项目。这个网站将作为我的个人主页、项目展示页和技术博客。
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            查看项目
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
          >
            联系我
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">项目</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">个人网站</h3>
            <p className="mb-4 text-slate-300">
              使用 Next.js、Spring Boot 和 PostgreSQL 构建的全栈个人网站。
            </p>
            <p className="text-sm text-cyan-400">
              Next.js / Spring Boot / PostgreSQL
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">像素武侠游戏</h3>
            <p className="mb-4 text-slate-300">
              使用 Unity 制作的类银河恶魔城动作游戏原型。
            </p>
            <p className="text-sm text-cyan-400">
              Unity / C# / Game Design
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">联系</h2>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="mb-4 text-slate-300">
            这里之后会连接后端 API，把联系信息保存到数据库。
          </p>

          <a
            href="mailto:your-email@example.com"
            className="text-cyan-400 hover:text-cyan-300"
          >
            your-email@example.com
          </a>
        </div>
      </section>
    </main>
  );
}