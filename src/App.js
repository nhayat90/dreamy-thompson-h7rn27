import React, { useState } from "react";
import {
  ChevronRight,
  TrendingUp,
  Truck,
  Package,
  Shield,
  Scissors,
  DollarSign,
  Clock,
  Target,
  CheckCircle,
  BarChart2,
} from "lucide-react";

const SalesPitch = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slides = [
    // Title Slide
    {
      title: "Reinventing the Medical Supply Chain",
      content: (
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">
            Zaki Enterprises
          </h1>
          <h2 className="text-2xl text-gray-700 mb-8">
            Custom Sterile Medical Procedure Kits
          </h2>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 max-w-2xl">
            <p className="text-xl text-gray-800 italic">
              "Delivering premium quality at competitive prices by eliminating
              unnecessary steps in the supply chain"
            </p>
          </div>
        </div>
      ),
    },

    // The Problem Slide
    {
      title: "The Problem: Inefficient Supply Chains",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <TrendingUp size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Inflated Costs</h3>
                <p className="text-gray-600">
                  Multiple middlemen add 30-50% markup without adding value
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Clock size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Extended Lead Times</h3>
                <p className="text-gray-600">
                  Traditional supply chains involve 5-7 intermediaries
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-2 rounded-full mr-3">
                <Package size={24} className="text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Limited Customization</h3>
                <p className="text-gray-600">
                  Standard kits often contain unnecessary items, creating waste
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">
              Traditional Supply Chain
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  1
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Manufacturer in Pakistan
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  2
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Exporter
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  3
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Foreign Packager
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  4
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Major Distributor
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  5
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Regional Distributor
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  6
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Healthcare Provider
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // The Solution Slide
    {
      title: "Our Solution: Direct-from-Source Supply Chain",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-4">
              Zaki Enterprises Supply Chain
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  1
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Goldstar in Pakistan (Manufacturer & Packager)
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  2
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Zaki Enterprises (US Importer/Distributor)
                </div>
              </div>
              <div className="ml-4 text-gray-400">
                <ChevronRight />
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  3
                </div>
                <div className="flex-1 bg-white p-2 rounded shadow-sm">
                  Healthcare Provider
                </div>
              </div>
            </div>
            <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium">
                Simplified process leads to 20-30% cost savings and faster
                delivery times
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Scissors size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Direct from the Source
                </h3>
                <p className="text-gray-600">
                  Sourcing from Sialkot, Pakistan - where 90% of the world's
                  surgical instruments are manufactured
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <Package size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Complete Vertical Integration
                </h3>
                <p className="text-gray-600">
                  Instruments, assembly, sterilization, and packaging all in one
                  location
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <DollarSign size={24} className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Lower Labor Costs</h3>
                <p className="text-gray-600">
                  Competitive advantage through strategic labor cost
                  differentials
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Key Benefits Slide
    {
      title: "Key Benefits for Your Business",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg border-t-4 border-blue-500">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign size={28} className="text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Cost Savings
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>20-30% lower costs on surgical instrument kits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>Eliminate multiple middlemen markups</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>Better margins or competitive pricing advantage</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-t-4 border-purple-500">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Package size={28} className="text-purple-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Custom Solutions
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>Fully customizable procedure kits</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>Reduce waste from unused items</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>Option to include your own components</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-t-4 border-green-500">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Shield size={28} className="text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">
              Quality Assurance
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>FDA registered suppliers</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>CE marked and MDR compliant products</span>
              </li>
              <li className="flex items-start">
                <CheckCircle
                  size={18}
                  className="text-green-500 mr-2 mt-1 flex-shrink-0"
                />
                <span>EO sterilization with complete validation</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },

    // Competitive Advantage Slide
    {
      title: "Why Choose Zaki Enterprises?",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Supply Chain Expertise
            </h3>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <p className="text-gray-700">
                Zaki Enterprises has deep expertise in surgical instrument
                manufacturing and the medical supply chain. We've meticulously
                studied each step of the traditional process and identified
                significant inefficiencies.
              </p>
              <p className="text-gray-700 mt-3">
                By partnering directly with Goldstar in Sialkot - the world's
                hub for surgical instrument manufacturing - we've created a
                streamlined path to market that preserves quality while
                eliminating unnecessary costs.
              </p>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Unmatched Customization
            </h3>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700">
                Unlike major distributors who offer limited options, we can
                customize every aspect of your procedure kits:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Select only the instruments and supplies you need</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>Incorporate your existing preferred components</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    size={18}
                    className="text-green-500 mr-2 mt-1 flex-shrink-0"
                  />
                  <span>
                    Adjust quantities to match your exact requirements
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Advantages vs. Major Distributors
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Feature
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Major Distributors
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-blue-600">
                      Zaki Enterprises
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Price Point
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      Standard market rates
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-medium">
                      20-30% lower
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Customization
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      Limited options
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-medium">
                      Fully customizable
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Minimum Order
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      High volumes required
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-medium">
                      Lower minimums
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Supply Chain Control
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      Multiple intermediaries
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-medium">
                      Direct from source
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Add Own Components
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-500">
                      Rarely available
                    </td>
                    <td className="px-4 py-3 text-sm text-green-600 font-medium">
                      Always available
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-gray-800 mb-2">
                Our Commitment
              </h3>
              <p className="text-gray-700">
                We maintain full regulatory compliance while offering
                significantly better value. All products meet FDA and CE
                requirements, with complete documentation and quality assurance.
              </p>
            </div>
          </div>
        </div>
      ),
    },

    // Case Study Slide
    {
      title: "Projected Cost Savings Analysis",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">
              Cost Comparison: Laceration Tray
            </h3>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                      Cost Element
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                      Traditional
                    </th>
                    <th className="px-4 py-3 text-right text-sm font-medium text-blue-600">
                      Zaki Enterprises
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Manufacturing
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      $8.50
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-800">
                      $8.50
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Assembly & Packaging
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      $6.00
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-800">
                      $3.50
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Sterilization
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      $2.75
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-800">
                      $2.00
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      Distribution Markup
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-500">
                      $11.25
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-gray-800">
                      $5.00
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">
                      Wholesale Price
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                      $28.50
                    </td>
                    <td className="px-4 py-3 text-sm text-right font-medium text-green-600">
                      $19.00
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="px-4 py-3 text-sm">
                      <div className="flex justify-end items-center">
                        <span className="font-medium text-green-600 mr-2">
                          33% Savings
                        </span>
                        <TrendingUp size={16} className="text-green-600" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">
                Annual Savings Projection
              </h4>
              <p className="text-gray-700">
                For a facility using 1,000 laceration trays annually:
              </p>
              <div className="mt-3 p-3 bg-white rounded border border-blue-200">
                <div className="text-xl font-bold text-blue-600">
                  $9,500 Annual Savings
                </div>
                <div className="text-sm text-gray-500">
                  ($28.50 - $19.00) × 1,000 trays
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Savings Across Product Categories
            </h3>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="text-gray-700 mb-4">
                Our direct-from-source model delivers significant savings across
                all procedure kits containing surgical instruments:
              </p>

              <div className="space-y-4">
                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Suture Removal Kits</span>
                    <span className="text-green-600 font-medium">
                      25-30% Savings
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Biopsy Trays</span>
                    <span className="text-green-600 font-medium">
                      20-25% Savings
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">
                      Surgical Instrument Trays
                    </span>
                    <span className="text-green-600 font-medium">
                      30-35% Savings
                    </span>
                  </div>
                </div>

                <div className="bg-white p-3 rounded border border-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Debridement Kits</span>
                    <span className="text-green-600 font-medium">
                      25-30% Savings
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-5 bg-gray-50 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">
                Ready for the Next Step?
              </h4>
              <p className="text-gray-700 mb-4">
                We can conduct a detailed cost analysis based on your specific
                product needs and volumes to demonstrate exact savings
                potential.
              </p>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <div className="flex items-start">
                  <Target
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Let us prepare a custom quote comparing your current costs
                    with our direct-source pricing.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Getting Started Slide
    {
      title: "Getting Started With Zaki Enterprises",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Our Simple Process</h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200"></div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center z-10 mr-4">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">
                    Initial Consultation
                  </h4>
                  <p className="text-gray-600 mt-1">
                    We'll discuss your current procedure kits, volumes, and
                    specific requirements.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center z-10 mr-4">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">
                    Custom Quote
                  </h4>
                  <p className="text-gray-600 mt-1">
                    We'll prepare a detailed proposal with specific products and
                    pricing comparisons.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start mb-8">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center z-10 mr-4">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">
                    Sample Evaluation
                  </h4>
                  <p className="text-gray-600 mt-1">
                    We'll provide sample kits for your evaluation and quality
                    assessment.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center z-10 mr-4">
                  <span className="text-white font-medium">4</span>
                </div>
                <div>
                  <h4 className="font-medium text-lg text-gray-900">
                    Seamless Implementation
                  </h4>
                  <p className="text-gray-600 mt-1">
                    We'll work with you to ensure a smooth transition to our
                    streamlined supply system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Our Guarantee</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Quality products meeting or exceeding current standards
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Complete FDA and regulatory compliance
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Consistent supply and reliable delivery timelines
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Transparent pricing with no hidden fees
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-green-600 mr-2 mt-1 flex-shrink-0"
                  />
                  <span className="text-gray-700">
                    Dedicated support throughout the entire process
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Ready to Transform Your Supply Chain?
              </h3>
              <p className="text-gray-700 mb-4">
                Contact us today to schedule a consultation and discover how
                Zaki Enterprises can help you reduce costs while maintaining the
                highest quality standards.
              </p>
              <div className="grid grid-cols-1 gap-3 mt-4">
                <div className="flex items-center p-3 bg-white rounded border border-gray-200">
                  <BarChart2 size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Custom cost analysis based on your current spending
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded border border-gray-200">
                  <Package size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Sample kit evaluation program
                  </span>
                </div>
                <div className="flex items-center p-3 bg-white rounded border border-gray-200">
                  <Target size={20} className="text-blue-600 mr-3" />
                  <span className="text-gray-700">
                    Personalized consultation with our supply chain experts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Contact/Call to Action Slide
    {
      title: "Contact Zaki Enterprises",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Take The Next Step</h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                Ready to explore how our innovative supply chain approach can
                benefit your organization? We're here to help you navigate the
                transition to more cost-effective, customized procedure kits.
              </p>

              <div className="bg-white p-5 rounded-lg border border-blue-200">
                <h4 className="font-medium text-gray-800 mb-3">
                  Schedule a Consultation
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Clock size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">
                      30-minute introduction call
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <BarChart2 size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Custom cost analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Package size={16} className="text-blue-600" />
                    </div>
                    <span className="text-gray-700">Sample kit options</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <p className="text-green-800 font-medium">
                  No commitment required - we're confident our value proposition
                  will speak for itself.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-medium text-gray-900">
                    Zaki Enterprises
                  </h4>
                  <p className="text-gray-600">
                    Streamlining Medical Supply Chains
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-start p-3 bg-white rounded border border-gray-200">
                    <div className="mr-3 text-blue-500">📍</div>
                    <div>
                      <div className="font-medium text-gray-800">Address</div>
                      <div className="text-gray-600">
                        1234 Healthcare Drive, Suite 500
                      </div>
                      <div className="text-gray-600">Chicago, IL 60601</div>
                    </div>
                  </div>

                  <div className="flex items-start p-3 bg-white rounded border border-gray-200">
                    <div className="mr-3 text-blue-500">📞</div>
                    <div>
                      <div className="font-medium text-gray-800">Phone</div>
                      <div className="text-gray-600">(800) 555-0123</div>
                    </div>
                  </div>

                  <div className="flex items-start p-3 bg-white rounded border border-gray-200">
                    <div className="mr-3 text-blue-500">✉️</div>
                    <div>
                      <div className="font-medium text-gray-800">Email</div>
                      <div className="text-gray-600">
                        info@zakienterprises.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start p-3 bg-white rounded border border-gray-200">
                    <div className="mr-3 text-blue-500">🌐</div>
                    <div>
                      <div className="font-medium text-gray-800">Website</div>
                      <div className="text-gray-600">
                        www.zakienterprises.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 bg-blue-600 text-white rounded-lg">
              <h4 className="font-medium text-xl mb-2">
                Ready to reduce your costs by 20-30%?
              </h4>
              <p className="mb-4 text-blue-100">
                Contact us today to schedule your personalized consultation and
                discover the Zaki Enterprises advantage.
              </p>
              <div className="bg-white text-blue-600 py-2 px-4 rounded font-medium text-center cursor-pointer hover:bg-blue-50">
                Schedule Your Consultation
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {slides[currentSlide].title}
            </h2>
            <div className="h-1 w-full bg-gray-200 rounded">
              <div
                className="h-1 bg-blue-500 rounded"
                style={{
                  width: `${(currentSlide / (slides.length - 1)) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="mb-10">{slides[currentSlide].content}</div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`px-4 py-2 rounded ${
                currentSlide === 0
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className={`px-4 py-2 rounded ${
                currentSlide === slides.length - 1
                  ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPitch;
