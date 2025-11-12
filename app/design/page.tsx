"use client";

import { useState } from 'react';
import Overview from './components/Overview';
import Colors from './components/Colors';
import Typography from './components/Typography';
import Screens from './components/screen';
export default function Interface() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Mockups de la app</h1>
                            <p className="text-gray-600 mt-1">Guía completa de estilos y componentes</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <nav className="flex gap-8">
                        {['overview', 'Colores', 'Tipografia', 'screens'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-2 border-b-2 font-medium transition-colors capitalize ${
                                    activeTab === tab
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
            <main className="max-w-7xl mx-auto px-6 py-12">
                <Overview activeTab={activeTab}/>
                <Colors activeTab={activeTab} />
                <Typography activeTab={activeTab} />
                <Screens activeTab={activeTab} />
            </main>
        </div>
    );
}