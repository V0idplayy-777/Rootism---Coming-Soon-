const entries = [
  {
    date: "nov 7",
    title: "training code is basically there",
    body: "almost done with the training pipeline. just tweaking, fixing dumb shit, doing the finishing touches, and optimising the hell out of it before i press the button and watch my bank balance disintegrate in real time.",
  },
];

const faqs = [
  {
    q: "when does it come out?",
    a: "when it works. or whenever my credit card gets declined by the cluster provider, whichever comes first.",
  },
  {
    q: "isn't this space crowded already?",
    a: "completely. at this point half of them are the same five models wearing different trenchcoats. entering an oversaturated market with no marketing skills and no unique selling point is just how i relax.",
  },
  {
    q: "will it cost anything?",
    a: "there'll be a free way to run it. i'd feel weird charging money for something made by someone this visibly unqualified.",
  },
  {
    q: "who are you?",
            a: "one guy in a room with blinds shut, training models and avoiding real-world responsibilities. my creative peak was naming this thing rootism, and even that was a total accident because i fucking suck at naming things anyway.",
  },
  {
    q: "how do i track this?",
    a: "check the log above once in a while. or the rss feed if you still use one like a normal recluse.",
  },
];

function Logo() {
  return (
    <svg width="19" height="19" viewBox="0 0 32 32" className="rounded-[4px]">
      <rect width="32" height="32" rx="5" fill="#0e7a3a" />
      <path
        d="M7 9 L11 13 L14 9"
        fill="none"
        stroke="#f9f8f3"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 13 L25 13 L20.5 24 L14 24"
        fill="none"
        stroke="#f9f8f3"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-[3px] bg-[#0e7a3a]" />

      <header className="border-b border-[#e3e1d4]">
        <div className="mx-auto max-w-xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="font-semibold text-sm">rootism</span>
          </a>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#what" className="u hidden sm:inline">
              what
            </a>
            <a href="#updates" className="u">
              updates
            </a>
            <a href="#faq" className="u hidden sm:inline">
              faq
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="flex-1 mx-auto w-full max-w-xl px-6">
        <section className="pt-16 pb-12">
          <p className="flex items-center gap-2.5 text-sm text-[#6d6d5f] mb-8">
            <span className="inline-block size-2 bg-[#0e7a3a]" />
            status: financially fucked
          </p>

          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
            a coding agent,
            <br />
            trained from scratch.
            <span className="caret" />
          </h1>

          <p className="mt-7 leading-relaxed">
            rootism is an ai coding agent. it is not an api wrapper. i'm
            training the whole thing myself from zero, which is objectively
            a terrible financial decision and probably above my pay grade,
            but fuck it, here we are.
          </p>

          <p className="mt-4 text-sm text-[#6d6d5f]">
            i know how hard this is going to be. i also know there are already
            heaps of coding agents and i'm not a creative guy, so the
            differentiation strategy is currently just "hope it doesn't
            suck".
          </p>
        </section>

        <section
          id="what"
          className="border-t border-[#e3e1d4] py-12 scroll-mt-16"
        >
          <h2 className="text-sm text-[#6d6d5f] mb-5">[01] what this is</h2>
          <p className="leading-relaxed">
            a coding agent where the model itself is actually mine. everyone
            else rents an api, hot-glues twenty python scripts together, and
            calls it an ecosystem. i want to train my own weights from nothing
            so that when it shits the bed at 3am, i have nobody to blame but
            myself.
          </p>

          <aside className="mt-6 border-l-2 border-[#0e7a3a] pl-4">
            <p className="text-sm leading-relaxed text-[#6d6d5f]">
              <span className="text-[#1b1b15]">why rootism?</span> i'm thinking
              of calling it that because root access sounds cool and i spent
              about twelve seconds thinking about it before getting back to
              terminal. if it's awful i'll rebrand right before bankruptcy.
            </p>
          </aside>

          <p className="text-sm text-[#6d6d5f] mt-8 mb-3">what it's not:</p>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <span className="text-[#6d6d5f]">×</span>
              another openrouter wrapper charging $20/month
            </li>
            <li className="flex gap-3">
              <span className="text-[#6d6d5f]">×</span>
              a fine-tune with a marketing budget
            </li>
            <li className="flex gap-3">
              <span className="text-[#6d6d5f]">×</span>
              backed by venture capital or parental approval
            </li>
          </ul>
        </section>

        <p className="text-center text-sm text-[#b9b6a6]">
          - - - - - - - - - 8&lt; - - - - - - - - -
        </p>

        <section className="py-12">
          <h2 className="text-sm text-[#6d6d5f] mb-5">[02] the honest part</h2>
          <p className="leading-relaxed">
            the market is saturated. i have zero marketing skills, zero
            advertising knowledge, and the creative instincts of a goddamn
            brick. so figuring out how to make this unique is an item on my
            to-do list somewhere between "optimise loss curve" and "rethink
            my life choices".
          </p>
          <p className="leading-relaxed mt-4">
            if this all goes to shit, at least it'll happen right here where
            everyone can point and laugh.
          </p>
        </section>

        <section
          id="updates"
          className="border-t border-[#e3e1d4] py-12 scroll-mt-16"
        >
          <h2 className="text-sm text-[#6d6d5f] mb-2">[03] update log</h2>
          <p className="text-sm text-[#6d6d5f] mb-4">
            tracking progress here as things happen. rss feed{" "}
            <a href="/feed.xml" className="u">
              over here
            </a>
            .
          </p>

          <ul>
            {entries.map((entry) => (
              <li key={entry.title} className="py-5">
                <p className="text-xs text-[#b9b6a6]">{entry.date}</p>
                <p className="mt-1 font-medium">{entry.title}</p>
                <p className="mt-1 text-sm text-[#6d6d5f] leading-relaxed">
                  {entry.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="faq"
          className="border-t border-[#e3e1d4] py-12 scroll-mt-16"
        >
          <h2 className="text-sm text-[#6d6d5f] mb-2">[04] faq</h2>
          <div>
            {faqs.map((item, i) => (
              <details
                key={item.q}
                className={i > 0 ? "border-t border-[#e3e1d4]" : ""}
              >
                <summary className="flex items-baseline gap-3 py-4 font-medium hover:text-[#0e7a3a]">
                  <span className="plus text-[#6d6d5f]">+</span>
                  {item.q}
                </summary>
                <p className="pb-5 pl-6 text-sm leading-relaxed text-[#6d6d5f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="border-t border-[#e3e1d4] py-12">
          <p className="leading-relaxed">
            that's all i've got right now. back to fighting cuda and
            questioning my life choices.
          </p>
          <p className="mt-8 text-sm text-[#6d6d5f]">
            — the person building rootism
          </p>
          <p className="mt-2 text-sm text-[#6d6d5f]">
            p.s. thx for reading this far. genuinely.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#e3e1d4]">
        <div className="mx-auto max-w-xl px-6 py-6 text-xs text-[#6d6d5f] flex flex-col sm:flex-row gap-2 sm:justify-between">
          <p>© 2026 rootism. probably.</p>
          <p>one person, zero safety net.</p>
        </div>
      </footer>
    </div>
  );
}
