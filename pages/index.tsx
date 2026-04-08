import { Inter, Source_Serif_4 } from 'next/font/google'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shield, Truck, Smartphone, Pill, Syringe, Clock, CheckCircle2 } from 'lucide-react'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sourceSerif = Source_Serif_4({ 
  subsets: ['latin'], 
  weight: ['400', '600'],
  variable: '--font-serif' 
})

export default function Home() {
  return (
    <main className={`${inter.variable} ${sourceSerif.variable} font-sans bg-slate-50 text-slate-800`}>
      {/* Hero Section - Trust-First Messaging */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">NABP Accredited • HIPAA Compliant</span>
              </div>
              <h1 className="text-5xl font-serif font-semibold mb-6 leading-tight">
                Your Prescriptions, <span className="text-yellow-300">Delivered Today</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Free same-day delivery. Insurance accepted. Real pharmacists available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg">
                  <Pill className="mr-2 h-5 w-5" />
                  Transfer Prescription
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Shop OTC
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-semibold mb-6">Quick Rx Transfer</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-blue-900 font-bold">1</div>
                    <span>Enter your current pharmacy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white font-bold">2</div>
                    <span>We handle the transfer</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-white font-bold">3</div>
                    <span>Delivered today by 6pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold mb-4">Complete Pharmacy Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Board-certified pharmacists providing personalized care beyond just dispensing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Pill className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Prescriptions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  All major insurance plans. Automatic refills. Med sync programs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Syringe className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Vaccinations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Flu, COVID-19, shingles, pneumonia. Walk-ins welcome. CDC-compliant.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Smartphone className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>FlavorRx</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Customize medication flavors. Great for kids & pets. 20+ options.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Truck className="w-10 h-10 text-blue-600 mb-3" />
                <CardTitle>Compounding</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-sm">
                  Custom medication formulations. Tailored dosages. Specialized therapies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Insurance Checker */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-serif font-semibold mb-4">Check Your Insurance</h3>
            <p className="text-slate-600 mb-6">
              Real-time benefits verification. See your copay before you order.
            </p>
            <div className="flex gap-4">
              <select className="flex-1 p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Select Insurance Provider</option>
                <option>Aetna</option>
                <option>Blue Cross Blue Shield</option>
                <option>Cigna</option>
                <option>UnitedHealthcare</option>
                <option>Medicare Part D</option>
              </select>
              <Button className="bg-blue-600 hover:bg-blue-700">Check Coverage</Button>
            </div>
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 hidden" id="coverage-result">
              <div className="flex items-center gap-2 text-green-800">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-medium">Covered - Generic copay: $10</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Promo */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-semibold mb-4">
                Never Miss a Dose Again
              </h2>
              <p className="text-blue-100 text-lg mb-6">
                Our HIPAA-compliant app sends reminders, tracks refills, and lets you chat with pharmacists.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <span>Smart medication reminders</span>
                </div>
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-yellow-300" />
                  <span>Track for family members</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-300" />
                  <span>Request refills in 2 taps</span>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <Button className="bg-white text-blue-600 hover:bg-slate-100">
                  Download iOS App
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Android App
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="bg-white rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-800">Lisinopril 10mg</span>
                  <Badge className="bg-green-100 text-green-800">Due 2:00 PM</Badge>
                </div>
                <p className="text-sm text-slate-600">Take with food • 30 tablets remaining</p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-800">Metformin 500mg</span>
                  <Badge className="bg-yellow-100 text-yellow-800">Taken 8:00 AM</Badge>
                </div>
                <p className="text-sm text-slate-600">Take with breakfast • Refill ready</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">ProPharm Delivery</h4>
              <p className="text-sm">
                NABP Accredited • License #PH-12345
              </p>
              <div className="flex gap-2 mt-4">
                <Badge className="bg-green-900 text-green-300">HIPAA Compliant</Badge>
                <Badge className="bg-blue-900 text-blue-300">SSL Secured</Badge>
              </div>
            </div>
            <div>
              <h5 className="text-white font-medium mb-3">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>Prescription Delivery</li>
                <li>Compounding Pharmacy</li>
                <li>Medication Therapy Management</li>
                <li>Vaccination Services</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-3">Support</h5>
              <ul className="space-y-2 text-sm">
                <li>24/7 Pharmacist Hotline</li>
                <li>Insurance Verification</li>
                <li>Refill Reminders</li>
                <li>FAQ & Help Center</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-3">Contact</h5>
              <ul className="space-y-2 text-sm">
                <li>1-800-PHARMACY</li>
                <li>support@propharm.delivery</li>
                <li>123 Medical Plaza, Suite 100</li>
                <li> Available 24/7/365</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>© 2026 ProPharm Delivery. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </main>
  )
}