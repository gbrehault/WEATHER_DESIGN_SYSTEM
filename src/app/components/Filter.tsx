"use client";

import { Select, Button, Space, InputNumber } from "antd";
import { useState } from "react";
import type { WeatherData } from "../page"; // on réutilise le type

type Props = {
  disabled: boolean;
  allData: WeatherData[];
  filterChange: (filteredData: WeatherData[]) => void;
};

export default function Filter({ filterChange, disabled, allData }: Props) {
  const [value, setValue] = useState<number | null>(1);

  const villeNames = [
    "Toutes les villes",
    ...Array.from(new Set(allData.map((item) => item.ville))),
  ];

  const handleCityName = (val: string) => {
    const filtered =
      val === "Toutes les villes"
        ? allData
        : allData.filter((item) => item.ville === val);

    filterChange(filtered);
  };

  const handleInputChange = (val: number | null) => {
    const filteredNumber =
      val !== null ? allData.slice(0, val) : allData;

    filterChange(filteredNumber);
  };

  return (
    <div className="flex items-center justify-center my-8 gap-16 px-26">
      <div className="w-full px-8 py-5 flex items-center justify-start rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-secondary gap-[38px]">
        <span className="text-white text-lg font-semibold">Filters</span>

        <div className="flex items-center gap-4">
          <Select
            defaultValue="Villes"
            style={{ width: 200 }}
            onChange={handleCityName}
            options={villeNames.map((v) => ({ value: v, label: v }))}
            disabled={disabled}
          />

          <Space>
            <InputNumber
              min={1}
              max={6}
              value={value}
              onChange={(val) => {
                setValue(val);
                handleInputChange(val);
              }}
              disabled={disabled}
            />
            <Button
              type="primary"
              onClick={() => {
                setValue(1);
                handleInputChange(1);
              }}
              style={{
                backgroundColor: "var(--color-secondary)",
                border: "1px solid var(--color-secondary)",
              }}
              disabled={disabled}
            >
              Réinitialiser
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
}