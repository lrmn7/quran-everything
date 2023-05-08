import type { GetStaticProps } from "next";
import Image from "next/image";
import { ofetch } from "ofetch";
import { JADWAL_SHOLAT_API } from "~lib/utils/constants";
import { ListKotaProps } from "~models";
import ListKota from "~molecules/ListKota";
import Layout from "~templates/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const response = await ofetch(`${JADWAL_SHOLAT_API}/kota/semua`, { parseResponse: JSON.parse });

  return {
    props: {
      kota: response,
    },
  };
};

export default function JadwalSholat({ kota }: ListKotaProps) {
  return (
    <Layout title="Jadwal Sholat">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <h1>Jadwal Sholat</h1>
          <Image src="/img/mosque.webp" width={40} height={40} alt="Mosque" priority />
        </div>
        <p className="mt-2 text-lg font-medium">Berikut daftar Kabupaten/Kota yang tersedia</p>
      </div>
      <ListKota kota={kota} />
      <div className="flex items-center justify-center mt-5">
        <p className="text-xs text-gray-400">&copy; 2023 L RMN - Made with ❤️ in Bogor</p>
      </div>
    </Layout>
  );
}

