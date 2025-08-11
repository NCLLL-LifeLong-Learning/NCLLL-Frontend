import React from 'react'
import { useTranslation } from 'react-i18next';

export default function KeyFunctions() {
  const { t } = useTranslation();

  // read arrays from translations (react-i18next must be configured to allow returnObjects)
  const roles = t("about_us.menu_2.roles", { returnObjects: true });
  const members = t("about_us.menu_2.members", { returnObjects: true });
  const emblemPoints = t("about_us.menu_2.emblemPoints", { returnObjects: true });
  const documents = t("about_us.menu_2.documents", { returnObjects: true });


  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <article>
        <header className="mb-6">
          <p className="text-gray-700 mission-content">{t("about_us.menu_2.subtitle")}</p>
        </header>

        <section className="mb-6">
          <h2 className="mission-title font-bold mb-3" style={{ color: "var(--primary-color)" }}>{t("about_us.menu_2.section.rolesTitle")}</h2>
          <p className="mb-3 mission-content">{t("about_us.menu_2.section.rolesIntro")}</p>

          <ul className="list-disc list-inside space-y-2">
            {roles.map((r, idx) => (
              <li key={idx} className="text-gray-800 mission-content">
                {r}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mission-title font-bold mb-3" style={{ color: "var(--primary-color)" }}>{t("about_us.menu_2.section.compositionTitle")}</h2>
          <p className="mb-3 mission-content">{t("about_us.menu_2.section.compositionIntro")}</p>

          <ul className="list-disc list-inside space-y-2">
            {members.map((m, idx) => (
              <li key={idx} className="text-gray-800">
                <span className="!font-medium mission-content">{m.title}</span>{" "}
                <span className="text-gray-600 mission-content"> — {m.note}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="mission-title font-bold mb-3" style={{ color: "var(--primary-color)" }}>{t("about_us.menu_2.section.emblemTitle")}</h2>
          <p className="mb-3 mission-content">{t("about_us.menu_2.section.emblemIntro")}</p>

          <ol className="list-decimal list-inside space-y-2">
            {emblemPoints.map((p, idx) => (
              <li key={idx} className="text-gray-800 mission-content">
                <span className='mission-content'>{p.title}</span>
                {p.children && p.children.length > 0 && (
                  <ul className="list-disc list-inside ml-5 space-y-1">
                    {p.children.map((child, cIdx) => (
                      <li key={cIdx} className="text-gray-700 mission-content">
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="mission-title font-bold mb-3" style={{ color: "var(--primary-color)" }}>{t("about_us.menu_2.section.documentsTitle")}</h2>
          <ul className="list-disc list-inside space-y-2">
            {documents.map((d, idx) => (
              <li key={idx}>
                <a
                  href={d.href || "#"}
                  className="text-blue-600 hover:underline mission-content"
                  target="_blank"
                  rel="noreferrer"
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}
