import React from "react";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Terms = () => {
  return (
    <>
      <header className="relative mt-[65px]">
        <Navbar />
      </header>

      <main className="bg-[#111827]">
        <section className="container mx-auto py-10">
          <h2 className="text-3xl font-semibold text-center text-[#FF357F]">TERMS & CONDITIONS</h2>
          <div className="p-10  bg-[#1F2937] text-gray-300 mt-20 rounded-2xl hover:border-2 border-2 border-gray-50/10 duration-300 transition ease-in-out cursor-pointer hover:border-[#FF357F]">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">General</h2>
              <p>
                By using any Digital Work (Item) from TailWind UI Kit (AlphaSquad, Inc.), you agree that this End User License Agreement (EULA) is a
                legally binding and valid contract and agree to be bound by it. You agree to abide by the intellectual property laws and all of the
                terms and conditions of this Agreement.
              </p>

              <p>If you do not agree to be bound by this agreement, remove any Item from your computer now.</p>
            </div>
            <div className="mt-10 space-y-3">
              <h2 className="text-3xl font-bold">License Period</h2>
              <p>
                An Item’s License is for lifetime. That means, once you buy it, you can use the license forever within the restrictions described in
                this document. Developer and Teams Licenses includes 1-year of Premium Support and upgrades. Please check this term for each License
                for more details.
              </p>
            </div>{" "}
            <div className="mt-10 space-y-3">
              <h2 className="text-3xl font-bold">Community License</h2>
              <ul className="space-y-3">
                <li className="list-disc list-inside">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quis, nisi.
                </li>
                <li className="list-disc list-inside">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, labore?</li>
                <li className="list-disc list-inside">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatum obcaecati numquam in iure tempore pariatur, ratione est eveniet repudiandae voluptate?{" "}
                </li>
                <li className="list-disc list-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, reprehenderit?</li>
                <li className="list-disc list-inside">
                  {" "}
                  Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, neque?
                </li>
                <li className="list-disc list-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, commodi?</li>
                <li className="list-disc list-inside">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, qui voluptatibus! Beatae impedit enim similique?
                </li>
                <li className="list-disc list-inside">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, debitis.</li>
                <li className="list-disc list-inside">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, dignissimos beatae perspiciatis accusantium illum hic non aliquid
                  ipsam veritatis iste.
                </li>
                <li className="list-disc list-inside">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, magni.</li>
              </ul>
            </div>
            <hr className="my-10" />
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Developer License</h2>
              <p>
                By using any Digital Work (Item) from TailWind UI Kit (AlphaSquad, Inc.), you agree that this End User License Agreement (EULA) is a
                legally binding and valid contract and agree to be bound by it. You agree to abide by the intellectual property laws and all of the
                terms and conditions of this Agreement.
              </p>

              <p>If you do not agree to be bound by this agreement, remove any Item from your computer now.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Terms;
