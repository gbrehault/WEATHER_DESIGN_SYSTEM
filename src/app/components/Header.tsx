"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Modal, Select, InputNumber, Button, Space } from "antd";

type HeaderProps = {
  filtersDisabled?: boolean;
  onToggleFiltersDisabled?: () => void;
};

export default function Header({ filtersDisabled, onToggleFiltersDisabled }: HeaderProps) {
  const pathname = usePathname();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/setting", label: "Setting" },
  ];

  return (
<>
      <header className="w-full flex bg-transparent text-color-text gap-60 px-26 py-6">
        <div className="text-3xl w-1/3 flex items-center font-bold">BRH Weather</div>
        <div className="w-1/3 flex justify-center items-center">
          <ul className="flex text-xl gap-10">
            {links.map((link) => (
              <li key={link.href}>
                {link.href === "/setting" ? (
                  <Link
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSettingsOpen(true);
                    }}
                    className={`transition-all duration-200 ${
                      pathname === link.href ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <Link
                    href={link.href}
                       onClick={(e) => {
                      e.preventDefault();
                      setIsAboutOpen(true);
                    }}
                    className={`transition-all duration-200 ${
                      pathname === link.href ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/3 flex justify-end gap-4">
          <button className="px-10 py-4">Sign up</button>
        </div>
      </header>

     <Modal
  title="Settings"
  open={isSettingsOpen}
  onOk={() => setIsSettingsOpen(false)}
  onCancel={() => setIsSettingsOpen(false)}
>
  <p>{"Ici tu pourras configurer ta météo :"}</p>
  <p>{"- Choix de la ville par défaut"}</p>
  <p>{"- Unités (°C / °F)"}</p>
  <p>{"- Thème clair / sombre"}</p>

  <Button
    type="default"
    onClick={onToggleFiltersDisabled}
    style={{ marginBottom: "1rem" }}
  >
    {filtersDisabled ? "Activer les paramètres" : "Désactiver les paramètres"}
  </Button>

  <div className="mt-4 flex flex-col gap-3">
    <Space>
      <Select
        defaultValue="Ville par défaut"
        style={{ width: 200 }}
        disabled={filtersDisabled}
      />
      <InputNumber min={1} max={6} disabled={filtersDisabled} />
      <Button disabled={filtersDisabled}>Réinitialiser</Button>
    </Space>
  </div>
</Modal>

<Modal
  title={"À propos de BRH Weather"}
  open={isAboutOpen}
  onOk={() => setIsAboutOpen(false)}
  onCancel={() => setIsAboutOpen(false)}
>
  <p>
    <strong>BRH Weather</strong> est une application météo interactive développée pour
    présenter un design system basé sur <strong>Ant Design</strong>. Elle permet de
    consulter les conditions météorologiques actuelles et de personnaliser
    l’affichage des données.
  </p>
  <p>
    Vous pouvez filtrer les informations selon la ville, ajuster le nombre de
    résultats visibles et activer ou désactiver les paramètres directement depuis
    la fenêtre Settings.
  </p>
  <p>
    Ce projet a été conçu par <strong>Gabriel Bréhault</strong> dans le cadre du
    Master Développement Web à l’ECV Bordeaux.
  </p>
</Modal>
    </>
  );
}