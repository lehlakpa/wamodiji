"use client";

import { useState } from "react";
import { db } from "@/app/services/firebaseservice";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [tea, setTea] = useState("Yes");
  const [drinks, setDrinks] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckbox = (item: string) => {
    if (drinks.includes(item)) {
      setDrinks(drinks.filter((d) => d !== item));
    } else {
      setDrinks([...drinks, item]);
    }
  };

  const nextStep = () => {
    if (step === 1 && !name.trim()) {
      alert("Please enter your name");
      return;
    }
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submit = async () => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "tea_survey"), {
        name,
        tea,
        drinks: tea === "Yes" ? drinks : [],
        date: tea === "Yes" ? date : "",
        time: tea === "Yes" ? time : "",
        createdAt: new Date(),
      });

      alert("Data Saved Successfully!");
      
      // Reset form
      setStep(1);
      setName("");
      setTea("Yes");
      setDrinks([]);
      setDate("");
      setTime("");
    } catch (e) {
      console.error(e);
      alert("Error saving data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-blue-600 flex justify-center items-center p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-xl transition-all duration-300">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">
          Tea Survey
        </h1>

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">What is your name?</label>
              <input
                className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              onClick={nextStep}
              className="bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: Tea Question */}
        {step === 2 && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-4 text-lg">
                Hi {name}, can we go for Tea?
              </p>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer">
                  <div className={`border-2 p-4 rounded-lg text-center transition ${tea === "Yes" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}>
                    <input
                      type="radio"
                      value="Yes"
                      className="hidden"
                      checked={tea === "Yes"}
                      onChange={(e) => setTea(e.target.value)}
                    />
                    <span className="font-semibold">Yes</span>
                  </div>
                </label>
                <label className="flex-1 cursor-pointer">
                  <div className={`border-2 p-4 rounded-lg text-center transition ${tea === "No" ? "border-blue-600 bg-blue-50" : "border-gray-200"}`}>
                    <input
                      type="radio"
                      value="No"
                      className="hidden"
                      checked={tea === "No"}
                      onChange={(e) => setTea(e.target.value)}
                    />
                    <span className="font-semibold">No</span>
                  </div>
                </label>
              </div>
            </div>
            
            <div className="flex gap-3 mt-8">
              <button
                onClick={prevStep}
                className="bg-gray-100 text-gray-700 w-1/3 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
              >
                Back
              </button>
              {tea === "Yes" ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white w-2/3 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={submit}
                  disabled={isSubmitting}
                  className="bg-green-600 text-white w-2/3 py-3 rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Date, Time, and Drinks (Only if Yes) */}
        {step === 3 && (
          <div className="animate-fade-in">
            <div className="mb-5">
              <p className="font-semibold text-gray-700 mb-3">
                Awesome! What would you like to drink?
              </p>
              <div className="space-y-2">
                {["Tea", "Coffee", "Juice"].map((drink) => (
                  <label key={drink} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-blue-600"
                      checked={drinks.includes(drink)}
                      onChange={() => handleCheckbox(drink)}
                    />
                    <span className="ml-3">{drink}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">Date</label>
                <input
                  type="date"
                  className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-2">Time</label>
                <input
                  type="time"
                  className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={prevStep}
                className="bg-gray-100 text-gray-700 w-1/3 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
              >
                Back
              </button>
              <button
                onClick={submit}
                disabled={isSubmitting}
                className="bg-green-600 text-white w-2/3 py-3 rounded-lg hover:bg-green-700 transition font-semibold disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}