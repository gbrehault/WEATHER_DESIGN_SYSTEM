'use client';
import { Select, Button, Space, InputNumber } from "antd";
import { useState } from "react";
import data from "../data/data.json";

type WeatherItem = any; // remplace par ton type réel ou exporte WeatherData
type Props = {
  filterChange: (filtered: WeatherItem[]) => void;
};

export default function Filter({ filterChange }: Props) {
  const [value, setValue] = useState<number | null>(1);

  const villeNames = [
    "Toutes les villes",
    ...Array.from(new Set(data.meteo.map((item) => item.ville))),
  ];

  const handleCityName = (value: string) => {
    const filtered =
      value === "Toutes les villes"
        ? data.meteo
        : data.meteo.filter((item) => item.ville === value);
    filterChange(filtered);
  };

  const handleInputChange = (value: number | null) => {
    const filteredNumber =
      value !== null ? data.meteo.slice(0, value) : data.meteo;
      console.log(filteredNumber);
    filterChange(filteredNumber);
  
  }
  return (
    <div className="flex items-center justify-center my-8 gap-16 px-26">     
      <div className="w-full px-8 py-5  flex items-center justify-start rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-secondary gap-[38px]">
        <span className="text-white text-lg font-semibold">Filters</span>

        <div className="flex items-center gap-4">
         <Select
        defaultValue="Villes"
        style={{ width: 200 }}
        onChange={handleCityName}
        options={villeNames.map((v) => ({ value: v, label: v }))}
      />

  <Space>
      <InputNumber min={1} max={6} value={value} onChange={(value) => { setValue(value); handleInputChange(value); }} />
      <Button
        type="primary"
        onClick={() => {
          setValue(1);
          handleInputChange(1);
        }}
        style= {{ backgroundColor: "var(--color-secondary)", border: "1px solid var(--color-secondary)" }}
      >
        Réinitialiser 
      </Button>
    </Space>

        </div>
      </div>
    </div>
  );
}