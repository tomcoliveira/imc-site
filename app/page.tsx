// app/page.tsx
import Image from "next/image";

const WHATSAPP = "https://wa.me/5511971709603";

export default function Home() {
  return (
    <div className="min-h-screen w-full text-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 md:px-6">
          <a href="/" className="flex items-center gap-3">
            <Image
              src="/logo-imc.png"
              alt="Instituto Marin Cunha"
              width={36}
              height={36}
              className="h-9 w-9"
              priority
            />
            <div className="leading-tight">
              <div className="font-semibold">Instituto Marin Cunha</div>
              <div className="text-[11px] text-slate-500">
                Desde 2011, acolhimento e cuidado
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#sobre" className="text-sm text-slate-700 hover:text-slate-900">Sobre</a>
            <a href="#clinicas" className="text-sm text-slate-700 hover:text-slate-900">Clínicas</a>
            <a href="#contato" className="text-sm text-slate-700 hover:text-slate-900">Contato</a>
          </nav>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-emerald-600 md:inline-block"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO (frases fora) */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b58d7] via-[#1a7fe8] to-[#2aa0f0]" />
        <div className="mx-auto max-w-7xl px-4 py-6 md:py-8 lg:px-6">
          <div className="mx-auto max-w-3xl text-center text-white">
            <h1 className="text-[30px] leading-tight md:text-[40px] font-extrabold">
              Você não está sozinho.
              <br />
              <span>
                Existe <span className="text-orange-300">caminho</span> — e a gente te ajuda a encontrar.
              </span>
            </h1>
            <p className="mt-3 text-white/90">
              O Instituto Marin Cunha conecta você às melhores clínicas de tratamento para dependência química do Brasil,
              com acolhimento humanizado e seguro.
            </p>
            <div className="mt-4 flex flex-col items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-sm text-white/90 backdrop-blur">
                🗓️ Desde 2011 salvando vidas
              </span>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow hover:bg-orange-600"
              >
                Falar no WhatsApp Agora
              </a>
              <div className="text-sm text-white/85">
                Prefere que a gente entre em contato?{" "}
                <a href="#contato" className="underline decoration-white/50 hover:decoration-white">
                  Preencha o formulário
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frases (fora do hero) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-4 pt-8 lg:px-6">
          <div className="mx-auto max-w-3xl text-center text-slate-700">
            <p className="text-slate-600">
              “A dor do passado não define quem você é. A escolha de buscar ajuda pode transformar seu futuro.”
            </p>
            <div className="my-5 h-px bg-slate-200" />
            <p className="text-slate-600">
              “Cada passo em direção à recuperação é um ato de coragem. Você merece uma segunda chance.”
            </p>
            <div className="my-5 h-px bg-slate-200" />
            <p className="text-slate-600">
              “A jornada pode ser desafiadora, mas você não precisa caminhar sozinho. Estamos aqui para apoiar cada passo.”
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-20 lg:px-6">
          <div className="grid gap-8 md:grid-cols-1">
            <div className="md:col-span-2 mx-auto max-w-3xl text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                Sobre o Instituto Marin Cunha
              </h2>
              <p className="mt-4 text-slate-600">
                <span className="font-semibold">Desde 2011</span>, atuamos como ponte entre pessoas em busca de um tratamento para
                dependência química e as clínicas mais qualificadas do Brasil. Nosso compromisso é com o acolhimento, a
                segurança e o acompanhamento humano de cada família.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-200">
                🗝️ Mais de 13 anos salvando vidas
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Item
                titulo="Atendimento 24h"
                desc="Disponibilidade integral para emergências e orientações, porque sabemos que cada momento conta."
              />
              <Item
                titulo="Equipe Multidisciplinar"
                desc="Profissionais especializados em dependência química, psicologia e assistência social."
              />
              <Item
                titulo="Acolhimento Humanizado"
                desc="Tratamento respeitoso, sem julgamentos, focado na dignidade e recuperação de cada pessoa."
              />
            </div>
          </div>

          {/* Facilidades */}
          <div className="mt-10 rounded-2xl bg-emerald-50/60 p-6 ring-1 ring-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-900">Facilidades de Pagamento</h3>
            <p className="mt-1 text-sm text-emerald-900/80">Oferecemos diversas opções para que o tratamento seja acessível a todos</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                <div className="font-medium">Convênios Aceitos</div>
                <ul className="mt-2 list-disc pl-5 text-slate-600">
                  <li>Principais convênios médicos</li>
                  <li>Planos de saúde corporativos</li>
                  <li>Consulte cobertura específica</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white p-4 ring-1 ring-slate-200 shadow-sm">
                <div className="font-medium">Formas de Pagamento</div>
                <ul className="mt-2 list-disc pl-5 text-slate-600">
                  <li>Cartão de crédito (até 12x)</li>
                  <li>Cartão de débito</li>
                  <li>Transferência e PIX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLÍNICAS – inclui GRAJAÚ (unidade masculina) */}
      <section id="clinicas" className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        <h2 className="text-2xl font-bold">Nossas Clínicas Parceiras</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Trabalhamos apenas com clínicas licenciadas e que atendem nossos rigorosos padrões de qualidade,
          segurança e humanização no tratamento.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-tr from-slate-300 to-slate-100" />
              <div className="p-5">
                <div className="font-semibold">{c.nome}</div>
                <div className="text-sm text-slate-500">{c.cidade}</div>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`/clinicas/${c.slug}`}
                    className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Ver fotos
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        <h2 className="text-center text-2xl font-bold">Entre em Contato</h2>
        <p className="mt-2 text-center text-slate-600">
          Preencha o formulário abaixo e nossa equipe entrará em contato em breve
        </p>
        <form className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="grid gap-1">
              <label htmlFor="nome" className="text-sm font-medium text-slate-700">Nome completo *</label>
              <input id="nome" type="text" placeholder="Seu nome completo" className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="contatoField" className="text-sm font-medium text-slate-700">Telefone ou Email *</label>
              <input id="contatoField" type="text" placeholder="(11) 99999-9999 ou seu@email.com" className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500" />
            </div>
            <div className="grid gap-1">
              <label htmlFor="mensagem" className="text-sm font-medium text-slate-700">Mensagem</label>
              <textarea id="mensagem" rows={4} placeholder="Conte-nos como podemos ajudar..." className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500"></textarea>
            </div>
            <button className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#3b5bff] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#2f4be6]" type="button">
              Quero ser contatado
            </button>
          </div>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="text-lg font-semibold">Instituto Marin Cunha</div>
              <p className="mt-2 max-w-md text-slate-400">
                Conectando pessoas com clínicas de excelência em todo o Brasil. Nosso compromisso é com um acolhimento humano e seguro.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Links Úteis</div>
              <ul className="mt-2 space-y-2 text-sm text-slate-400">
                <li><a href="#sobre" className="hover:text-white">Sobre</a></li>
                <li><a href="#clinicas" className="hover:text-white">Clínicas</a></li>
                <li><a href="#contato" className="hover:text-white">Contato</a></li>
                <li><a href="#" className="hover:text-white">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <div className="rounded-xl bg-red-600/15 p-4 text-sm text-red-200 ring-1 ring-inset ring-red-700/25">
                <div className="font-semibold text-red-300">Importante</div>
                <p className="mt-1 text-red-200/90">
                  Em situação de risco: ligue 190 ou vá até uma emergência mais próxima.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row">
            <div>© {new Date().getFullYear()} Instituto Marin Cunha. Todos os direitos reservados.</div>
            <div>Site desenvolvido com foco em acolhimento e segurança.</div>
          </div>
        </div>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600"
          aria-label="Abrir WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47.03.15 5.36.17 11.96c.01 2.11.56 4.19 1.6 6.02L0 24l6.19-1.72a11.95 11.95 0 0 0 5.87 1.57h.05c6.6-.03 11.93-5.36 11.95-11.96a11.92 11.92 0 0 0-3.54-8.41Z" />
          </svg>
        </a>
      </footer>
    </div>
  );
}

function Item({ titulo, desc }: { titulo: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
      <div className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
      <div>
        <div className="font-semibold text-slate-900">{titulo}</div>
        <p className="text-sm text-slate-600">{desc}</p>
      </div>
    </div>
  );
}

/* Cards da home (agora com GRAJAÚ - unidade masculina) */
const CARDS = [
  {
    slug: "suzano",
    nome: "Casa de Repouso Suzano",
    cidade: "Suzano - SP",
    desc: "Localização em Suzano, ambiente acolhedor e seguro, com acompanhamento profissional 24h.",
  },
  {
    slug: "peruibe-1",
    nome: "Clínica Peruíbe I",
    cidade: "Peruíbe - SP",
    desc: "Em Peruíbe, próxima à natureza, espaço amplo e rotina estruturada para recuperação.",
  },
  {
    slug: "peruibe-2",
    nome: "Clínica Peruíbe II",
    cidade: "Peruíbe - SP",
    desc: "Segunda unidade de Peruíbe, quartos confortáveis e áreas de convivência.",
  },
  {
    slug: "itapecerica-casa",
    nome: "Casa de Repouso Itapecerica da Serra",
    cidade: "Itapecerica da Serra - SP",
    desc: "Ambiente tranquilo, acompanhamento diário e acolhimento humanizado.",
  },
  {
    slug: "itapecerica",
    nome: "Clínica Itapecerica da Serra",
    cidade: "Itapecerica da Serra - SP",
    desc: "Equipe multidisciplinar e protocolos focados em segurança e dignidade.",
  },
  {
    slug: "grajau-masculina",
    nome: "Grajaú — Unidade Masculina",
    cidade: "Grajaú - SP",
    desc: "Unidade voltada ao público masculino, estrutura completa e rotina terapêutica orientada.",
  },
];