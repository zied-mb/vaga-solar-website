import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// CO2 emissions factor for Tunisia (kg CO2 per kWh)
const CO2_EMISSION_FACTOR = 0.56;

const tranches = {
  residential: [
    { label: "≤ 200 kWh/mois", value: 0.213, min: 0, max: 200 },
    { label: "201 à 500 kWh/mois", value: 0.345, min: 201, max: 500 },
    { label: "> 500 kWh/mois", value: 0.427, min: 501, max: Infinity },
  ],
  professional: [
    { label: "≤ 500 kWh/mois", value: 0.345, min: 0, max: 500 },
    { label: "501 à 1000 kWh/mois", value: 0.427, min: 501, max: 1000 },
    { label: "> 1000 kWh/mois", value: 0.5, min: 1001, max: Infinity },
  ],
  agricultural: [
    { label: "≤ 1000 kWh/mois", value: 0.1, min: 0, max: 1000 },
    { label: "1001 à 3000 kWh/mois", value: 0.15, min: 1001, max: 3000 },
    { label: "> 3000 kWh/mois", value: 0.2, min: 3001, max: Infinity },
  ],
};

const SimulateurEconomies = ({ open, onClose }) => {
  const [typeBatiment, setTypeBatiment] = useState("residential");
  const [consommation, setConsommation] = useState("");
  const [tarif, setTarif] = useState(0.213);
  const [couverture, setCouverture] = useState(30);
  const [submitted, setSubmitted] = useState(false);
  const [viewAnnual, setViewAnnual] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [resultat, setResultat] = useState({
    productionAnnuelle: 0,
    coutActuelAnnuel: 0,
    montantAPayerAnnuel: 0,
    coutTrimestriel: 0,
    montantAPayerTrimestriel: 0,
    co2: 0,
    factureTrimestrielle: 0,
    economiesAnnuelle: 0,
    productionSolaireAnnuelle: 0,
  });

  // Auto-select tariff based on consumption
  useEffect(() => {
    if (consommation) {
      const consoNum = parseFloat(consommation);
      const tranche = tranches[typeBatiment].find(
        t => consoNum >= t.min && consoNum <= t.max
      );
      if (tranche) {
        setTarif(tranche.value);
      }
    }
  }, [consommation, typeBatiment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const conso = parseFloat(consommation);
    if (isNaN(conso) || conso <= 0) return;

    const productionAnnuelle = conso * 12;
    const productionSolaireAnnuelle = productionAnnuelle * (couverture / 100);
    const coutActuelAnnuel = productionAnnuelle * tarif;
    const montantAPayerAnnuel = coutActuelAnnuel * (1 - couverture / 100);
    const economiesAnnuelle = coutActuelAnnuel - montantAPayerAnnuel;
    const co2 = (productionSolaireAnnuelle * CO2_EMISSION_FACTOR) / 1000; // Convert to tons

    const coutTrimestriel = coutActuelAnnuel / 4;
    const montantAPayerTrimestriel = montantAPayerAnnuel / 4;
    const factureTrimestrielle = montantAPayerTrimestriel;

    setResultat({
      productionAnnuelle,
      productionSolaireAnnuelle,
      coutActuelAnnuel: coutActuelAnnuel.toFixed(2),
      montantAPayerAnnuel: montantAPayerAnnuel.toFixed(2),
      coutTrimestriel: coutTrimestriel.toFixed(2),
      montantAPayerTrimestriel: montantAPayerTrimestriel.toFixed(2),
      co2: co2.toFixed(2),
      factureTrimestrielle: factureTrimestrielle.toFixed(2),
      economiesAnnuelle: economiesAnnuelle.toFixed(2),
    });

    setViewAnnual(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setTypeBatiment("residential");
    setConsommation("");
    setTarif(0.213);
    setCouverture(30);
    setSubmitted(false);
    setViewAnnual(false);
    setCurrentStep(1);
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="modalContent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >

          {!submitted && (
            <div className="space-y-6">
              {/* Progress Steps */}
              <div className="flex justify-between items-center mb-6">
                {[1, 2, 3].map(step => (
                  <div key={step} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step ? 'bg-yellow-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'}`}>
                      {step}
                    </div>
                    <span className="text-xs mt-1">{['Consommation', 'Configuration', 'Résultats'][step-1]}</span>
                  </div>
                ))}
              </div>

              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-md mx-auto"
              >
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Type de bâtiment / activité
                      </label>
                      <select
                        value={typeBatiment}
                        onChange={(e) => {
                          setTypeBatiment(e.target.value);
                          setTarif(tranches[e.target.value][0].value);
                        }}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
                      >
                        <option value="residential">Résidentiel</option>
                        <option value="professional">Professionnel</option>
                        <option value="agricultural">Agricole</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Consommation mensuelle (kWh)
                      </label>
                      <input
                        type="number"
                        value={consommation}
                        onChange={(e) => setConsommation(e.target.value)}
                        placeholder="Ex: 250"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Votre consommation mensuelle moyenne d'électricité
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        Tranche tarifaire STEG
                      </label>
                      <select
                        value={tarif}
                        onChange={(e) => setTarif(parseFloat(e.target.value))}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
                      >
                        {tranches[typeBatiment].map((t, idx) => (
                          <option key={idx} value={t.value}>
                            {t.label} → {t.value} DT/kWh
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
                        % Couverture solaire
                      </label>
                      <input
                        type="range"
                        value={couverture}
                        onChange={(e) => setCouverture(parseFloat(e.target.value))}
                        min="0"
                        max="100"
                        step="5"
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>0%</span>
                        <span>{couverture}%</span>
                        <span>100%</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Pourcentage de votre consommation que vous souhaitez couvrir avec l'énergie solaire
                      </p>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="py-2 px-4 bg-gray-300 dark:bg-gray-600 rounded-md font-medium hover:bg-gray-400 dark:hover:bg-gray-500"
                      >
                        Précédent
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Suivant
                      </button>
                    </div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div className="p-4 bg-yellow-50 dark:bg-gray-700 rounded-md">
                      <h3 className="font-semibold mb-2 text-center">Résumé de votre configuration</h3>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <p className="text-sm">Type de bâtiment:</p>
                        <p className="text-sm font-medium">
                          {typeBatiment === "residential" ? "Résidentiel" : 
                           typeBatiment === "professional" ? "Professionnel" : "Agricole"}
                        </p>
                        
                        <p className="text-sm">Consommation:</p>
                        <p className="text-sm font-medium">{consommation} kWh/mois</p>
                        
                        <p className="text-sm">Couverture solaire:</p>
                        <p className="text-sm font-medium">{couverture}%</p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="py-2 px-4 bg-gray-300 dark:bg-gray-600 rounded-md font-medium hover:bg-gray-400 dark:hover:bg-gray-500"
                      >
                        Précédent
                      </button>
                      <button
                        type="submit"
                        className="py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-md font-medium"
                      >
                        Calculer mes économies
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.form>
            </div>
          )}

          {submitted && (
            <div className="space-y-6">
              {!viewAnnual ? (
                <>
                  {/* Résultats 3 mois */}
                  <div className="p-6 bg-yellow-50 dark:bg-gray-700 rounded-md border border-yellow-200 dark:border-gray-600 space-y-3">
                    <h3 className="font-semibold mb-3 text-gray-900 dark:text-white text-lg">
                      Résultats pour 3 mois
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200">
                      💵 Montant à payer : {resultat.montantAPayerTrimestriel} DT
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      📅 Facture approximative (3 mois) : {resultat.factureTrimestrielle} DT
                    </p>
                    <div className="mt-4 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: "Coût actuel", value: parseFloat(resultat.coutTrimestriel) },
                            { name: "À payer", value: parseFloat(resultat.montantAPayerTrimestriel) },
                          ]}
                          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#facc15" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 mt-4">
                    <button
                      onClick={() => setViewAnnual(true)}
                      className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                    >
                      Voir l'année complète
                    </button>
                    <button
                      onClick={handleReset}
                      className="py-2 px-4 bg-gray-300 dark:bg-gray-600 rounded-md font-medium hover:bg-gray-400 dark:hover:bg-gray-500"
                    >
                      Recommencer
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {/* Résultats annuels */}
                  <div className="p-6 bg-yellow-50 dark:bg-gray-700 rounded-md border border-yellow-200 dark:border-gray-600 space-y-3">
                    <h3 className="font-semibold mb-3 text-gray-900 dark:text-white text-lg">
                      Résultats annuels
                    </h3>
                    <p className="text-gray-800 dark:text-gray-200">
                      🔋 Consommation annuelle : {resultat.productionAnnuelle} kWh
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      💰 Coût actuel : {resultat.coutActuelAnnuel} DT
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      💵 Montant à payer après solaire : {resultat.montantAPayerAnnuel} DT
                    </p>
                    <p className="text-gray-800 dark:text-gray-200">
                      🌱 Réduction CO₂ : {resultat.co2} T/an
                    </p>
                    
                    <div className="mt-4 h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={[
                            { name: "Coût actuel", value: parseFloat(resultat.coutActuelAnnuel) },
                            { name: "À payer", value: parseFloat(resultat.montantAPayerAnnuel) },
                          ]}
                          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Bar dataKey="value" fill="#facc15" radius={[8, 8, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                      <button
                        onClick={() => setViewAnnual(false)}
                        className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                      >
                        Voir les 3 mois
                      </button>
                      <button
                        onClick={handleReset}
                        className="py-2 px-4 bg-gray-300 dark:bg-gray-600 rounded-md font-medium hover:bg-gray-400 dark:hover:bg-gray-500"
                      >
                        Recommencer
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SimulateurEconomies;