import ListAsmaulHusna from "~molecules/ListAsmaulHusna";
import Layout from "~templates/Layout";

export default function AsmaulHusna() {
  return (
    <Layout title="Asma'ul Husna">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-3">
          <h1>Asma&#39;ul Husna</h1>
        </div>
        <p className="mt-2 text-lg font-medium">Berikut daftar Asma&#39;ul Husna</p>
      </div>
      <ListAsmaulHusna />
      <footer className="text-center py-4 text-gray-400 text-sm">
        &copy; 2023 L RMN - Made with ❤️ in Bogor
      </footer>
    </Layout>
  );
}
