import Head from "next/head";

export default function DSGVO() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Datenschutz - PicSwipe: Photo Cleaner</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">
        Privacy Policy – PicSwipe: Photo Cleaner
      </h1>
      <p className="mb-4 text-gray-600">Last updated: 19.03.2025.</p>

      <p className="mb-4">
        We take your privacy seriously. PicSwipe: Photo Cleaner does not
        collect, store, or share any personal data.
      </p>

      <div className="space-y-4">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Data Access and Usage
          </h2>
          <p>
            The app requires access to your photo gallery to allow you to view,
            sort, and delete images. All data is processed locally on your
            device – we do not upload or store your data on external servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. No Third-Party Sharing
          </h2>
          <p>
            We do not share, sell, or transfer any personal data with third
            parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Contact</h2>
          <p>
            If you have any questions regarding privacy, please contact us at:
            cuzimnoah1@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}
