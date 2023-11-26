import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useIcons } from "/utils/context/IconsContext";
import ContactsData from "/data/contacts";

export default function MobileContact() {
  const ReactIcons = useIcons();
  const { t } = useTranslation(["sidebar", "mobileMenu"]);

const contactsList = ContactsData.filter(contact => contact.mobile === true).map(contact => {
  const IconComponent = ReactIcons[contact.icon];

  // Composant qui sera répété
  return (
    <div
      key={contact.fieldset}
      className="flex items-center justify-start pt-2 mb-2 gap-x-2 "
    >
      <div
        className="flex items-center justify-center w-10 h-10 duration-300 hover:text-white group"
        style={{
          color: contact.lightColor,
        }}
      >
        <IconComponent alt={contact.fieldset} />
      </div>
      <div>
        <p className="text-xs font-semibold text-tiny text-slate-500 dark:text-gray-400">
          {contact.fieldset}
        </p>
        {contact.href ? (
          <Link
            href={contact.href}
            target="_blank"
            className="text-sm font-semibold text-slate-900 dark:text-gray-100 group-hover:text-white"
          >
            {t(contact.valueTransKey, { ns: "sidebar" })}
          </Link>
        ) : (
          <p className="text-sm font-semibold text-slate-900 dark:text-gray-100 group-hover:text-white">
            {contact.value}
          </p>
        )}
      </div>
    </div>
  );
});

  // Véritable return du composant
  return (
    <div className="flex flex-col px-4 duration-300 gap-y-2 max-w-max">
      <p className="px-3 font-semibold ">{t("contactMe", { ns: "mobileMenu" })}</p>
      {contactsList}
    </div>
  );
}
