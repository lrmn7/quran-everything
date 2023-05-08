import type { GetStaticProps } from "next";
import Image from "next/image";
import { ofetch } from "ofetch";
import { QURAN_API } from "~lib/utils/constants";
import { ListSuratProps } from "~models";
import ListSurat from "~molecules/ListSurat";
import Layout from "~templates/Layout";

export const getStaticProps: GetStaticProps = async () => {
  const response = await ofetch(`${QURAN_API}/quran`, { parseResponse: JSON.parse });

  return {
    props: {
      surat: response.data,
    },
  };
};

export default function Quran({ surat }: ListSuratProps) {
  return (
    <Layout title="Baca Al-Qur'an">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-3">
          <h1>Baca Al-Qur&#39;an</h1>
          <Image src="/img/Quran.webp" width={40} height={40} alt="Al-Qur'an" />
        </div>
        <p className="mt-2 text-lg font-medium">
          &#34;Berlomba-lombalah kamu dalam berbuat kebaikan&#34;
        </p>
      </div>
      <ListSurat surat={surat} />
      <div className="flex items-center justify-center mt-5">
        <p className="text-xs text-gray-400">&copy; 2023 L RMN - Made with ❤️ in Bogor</p>
      </div>
    </Layout>
  );
}

