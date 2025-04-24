export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-4 md:p-8">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">PrimeLang Services</h1>
        <p className="text-lg mt-2">Multilingual Outsourcing You Can Trust</p>
      </header>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <p>
          PrimeLang Services connects businesses with highly skilled, multilingual Haitian professionals. Our team
          members are fluent in English, French, Haitian Creole, and Spanish, providing remote staffing solutions for
          customer support, sales, and virtual assistant roles. We manage recruitment, training, and performance to
          ensure excellence and consistency.
        </p>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Customer Support (Phone, Email, Chat)</li>
          <li>Sales & Lead Generation</li>
          <li>Virtual Assistant Services</li>
          <li>Multilingual Communication: English, French, Creole, Spanish</li>
        </ul>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Multilingual, culturally fluent professionals</li>
          <li>Remote and cost-effective staffing</li>
          <li>Tailored solutions for diverse industries</li>
          <li>Commitment to excellence and integrity</li>
        </ul>
      </section>

      <section className="my-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>Email: primelangservices@gmail.com</p>
        <p>Phone/WhatsApp: (308) 529-8461</p>
        <p>Website: www.primelangservices.com</p>
      </section>
    </main>
  );
}