import data from './data/data.json';
import { Card } from "antd";
import Image from "next/image";
import Filter from './components/Filter';

export default async function Home() {
console.log(data);

interface WeatherData {
  ville: string;
  pays: string;
  date_heure: string;
  temperature: number;
  unite: string;
  code_meteo: number;
  icone: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const weatherData: WeatherData[] = data.meteo.map((item: any) => ({
  ville: item.ville,
  pays: item.pays,
  date_heure: `${item.date} ${item.heure}`,
  temperature: item.temperature,
  unite: item.unite,
  code_meteo: item.code_meteo,
  icone: item.icone,  
}));

  return (
    <>
    <Filter />
    <div className="flex flex-col items-center justify-center py-2">
        <h1 className="w-3xl text-4xl text-title mb-4 text-center">Seeing the weather of the whole world with <b> <span className="text-cyan-700">Dark Weather!</span></b></h1>
    </div>
    <div className='flex gap-10 flex-wrap justify-center py-20'>
      {weatherData.map((data: WeatherData) => (
        <Card key={data.ville} style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text)", gap: "100px", marginBottom: "20px", display: "flex", alignItems: "center", border: "none", paddingTop: '120px' }} >
          <Image 
          src={data.icone} 
          alt="Weather Icon"
          width={300}
          height={300}
          className='absolute top-[-100px]'
          />
          <ul className='flex flex-col gap-3'>
        <li>
          <h2 className="text-2xl font-title-regular mb-2"> <b>{data.ville}</b>, {data.temperature}°C</h2>
          </li>
          <li>
          <p className="mb-1"><b>{data.date_heure}</b></p>
          </li>
          <li>
          <p className="mb-1"><b>Température de : </b>{data.temperature} {data.unite}</p>
          </li>
          <li>
          <p className="mb-1"><b>Condition Météo: </b>{data.code_meteo}</p>
          </li>
  </ul>
        </Card>
        ))}
        </div>
    </>
  );
}